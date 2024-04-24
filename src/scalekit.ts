import * as jose from 'jose';
import QueryString from 'qs';
import GrpcConnect from './connect';
import ConnectionClient from './connection';
import { IdTokenClaimToUserMap } from './constants/user';
import CoreClient from './core';
import DomainClient from './domain';
import OrganizationClient from './organization';
import { AuthorizationUrlOptions, CodeAuthenticationOptions, GrantType } from './types/scalekit';
import { IdTokenClaim, User } from './types/user';

const authorizeEndpoint = "oauth/authorize";

/**
 * To initiate scalekit
 * @param {string} envUrl The environment url
 * @param {string} clientId The client id
 * @param {string} clientSecret The client secret
 * @returns {Scalekit} Returns the scalekit instance 
 * @example
 * const scalekit = new Scalekit(envUrl, clientId, clientSecret);
*/
export default class Scalekit {
  private readonly coreClient: CoreClient;
  private readonly grpcConnect: GrpcConnect;
  readonly organization: OrganizationClient;
  readonly connection: ConnectionClient;
  readonly domain: DomainClient;
  constructor(
    envUrl: string,
    clientId: string,
    clientSecret: string
  ) {
    this.coreClient = new CoreClient(
      envUrl,
      clientId,
      clientSecret
    );
    this.grpcConnect = new GrpcConnect(
      this.coreClient
    );

    this.organization = new OrganizationClient(
      this.grpcConnect,
      this.coreClient
    );
    this.connection = new ConnectionClient(
      this.grpcConnect,
      this.coreClient
    );
    this.domain = new DomainClient(
      this.grpcConnect,
      this.coreClient
    )
  }

  /**
   * Returns the authorization url to initiate the authentication request.
   * @param {string} redirectUri Redirect uri
   * @param {AuthorizationUrlOptions} options Authorization url options
   * @param {string[]} options.scopes Scopes to request from the user 
   * @param {string} options.state State parameter
   * @param {string} options.nonce Nonce parameter 
   * @param {string} options.loginHint Login hint parameter
   * @param {string} options.domainHint Domain hint parameter
   * @param {string} options.connectionId Connection id parameter
   * @param {string} options.organizationId Organization id parameter
   * 
   * @example
   * const scalekit = new Scalekit(envUrl, clientId, clientSecret);
   * const authorizationUrl = scalekit.getAuthorizationUrl(redirectUri, { scopes: ['openid', 'profile'] });
   * @returns {string} authorization url
   */
  getAuthorizationUrl(
    redirectUri: string,
    options?: AuthorizationUrlOptions
  ): string {
    const defaultOptions: AuthorizationUrlOptions = {
      scopes: ['openid', 'profile']
    }
    options = {
      ...defaultOptions,
      ...options
    }
    const qs = QueryString.stringify({
      response_type: 'code',
      client_id: this.coreClient.clientId,
      redirect_uri: redirectUri,
      scope: options.scopes?.join(" "),
      ...(options.state && { state: options.state }),
      ...(options.nonce && { state: options.nonce }),
      ...(options.loginHint && { login_hint: options.loginHint }),
      ...(options.domainHint && { domain_hint: options.domainHint }),
      ...(options.domainHint && { domain: options.domainHint }),
      ...(options.connectionId && { connection_id: options.connectionId }),
      ...(options.organizationId && { organization_id: options.organizationId }),
    })

    return `${this.coreClient.envUrl}/${authorizeEndpoint}?${qs}`
  }

  /**
   * Authenticate with the code
   * @param {CodeAuthenticationOptions} options Code authentication options
   * @param {string} options.code Code
   * @param {string} options.redirectUri Redirect uri
   * @param {string} options.codeVerifier Code verifier
   * @returns {Promise<{ user: Partial<User>, idToken: string, accessToken: string }>} Returns user, id token and access token
   */
  async authenticateWithCode(options: CodeAuthenticationOptions): Promise<{ user: Partial<User>; idToken: string; accessToken: string; }> {
    const res = await this.coreClient.authenticate(QueryString.stringify({
      code: options.code,
      redirect_uri: options.redirectUri,
      grant_type: GrantType.AuthorizationCode,
      client_id: this.coreClient.clientId,
      client_secret: this.coreClient.clientSecret,
      ...(options.codeVerifier && { code_verifier: options.codeVerifier })
    }))
    const { id_token, access_token } = res.data;
    const claims = jose.decodeJwt<IdTokenClaim>(id_token);
    const user: Partial<User> = {};
    for (const [k, v] of Object.entries(claims)) {
      if (IdTokenClaimToUserMap[k]) {
        user[IdTokenClaimToUserMap[k]] = v;
      }
    }

    return {
      user,
      idToken: id_token,
      accessToken: access_token
    }
  }

  /**
   * Validates the access token. 
   * 
   * @param {string} token The token to be validated.
   * @return {Promise<boolean>} Returns true if the token is valid, false otherwise.
   */
  async validateAccessToken(token: string): Promise<boolean> {
    await this.coreClient.getJwks();
    const JWKS = jose.createLocalJWKSet({
      keys: this.coreClient.keys
    })
    try {
      await jose.jwtVerify(token, JWKS);
      return true;
    } catch (error) {
      return false;
    }
  }
}

