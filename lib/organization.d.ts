import { PartialMessage } from '@bufbuild/protobuf';
import GrpcConnect from './connect';
import CoreClient from './core';
import { CreateOrganizationResponse, GetOrganizationResponse, ListOrganizationsResponse, UpdateOrganization, UpdateOrganizationResponse } from './pkg/grpc/scalekit/v1/organizations/organizations_pb';
export default class OrganizationClient {
    private readonly grpcConncet;
    private readonly coreClient;
    private client;
    constructor(grpcConncet: GrpcConnect, coreClient: CoreClient);
    /**
    * Create an organization with the given name. Optionally, you can provide an external id.
    * @param {object} options The options to create an organization
    * @param {string} options.name The organization name
    * @param {string} options.externalId The external id
    * @returns {Promise<CreateOrganizationResponse>} The created organization
    */
    createOrganization(options: {
        name: string;
        externalId?: string;
    }): Promise<CreateOrganizationResponse>;
    /**
     * List organizations with pagination
     * @param {object} options The options to list organizations
     * @param {number} options.pageSize The page size
     * @param {string} options.pageToken The page token
     * @returns {Promise<ListOrganizationResponse>} The list of organizations
     */
    listOrganization(options?: {
        pageSize?: number;
        pageToken?: string;
    }): Promise<ListOrganizationsResponse>;
    /**
     * Get an organization by id
     * @param {string} id The organization id
     * @returns {Promise<GetOrganizationResponse>} The organization
     */
    getOrganization(id: string): Promise<GetOrganizationResponse>;
    /**
     * Get an organization by external id
     * @param {string} externalId The external id
     * @returns {Promise<GetOrganizationResponse>} The organization
     */
    getOrganizationByExternalId(externalId: string): Promise<GetOrganizationResponse>;
    /**
     * Update an organization by id
     * @param {string} id The organization id
     * @param {PartialMessage<UpdateOrganization>} organization The organization to update
     * @returns {Promise<UpdateOrganizationResponse>} The updated organization
     */
    updateOrganization(id: string, organization: PartialMessage<UpdateOrganization>): Promise<UpdateOrganizationResponse>;
    /**
     * Update an organization by external id
     * @param {string} externalId The external id
     * @param {PartialMessage<UpdateOrganization>} organization The organization to update
     * @returns {Promise<UpdateOrganizationResponse>} The updated organization
     */
    updateOrganizationByExternalId(externalId: string, organization: PartialMessage<UpdateOrganization>): Promise<UpdateOrganizationResponse>;
    /**
     * Generate customer portal link for an organization
     * @param organizationId  The organization id
     * @returns {Promise<string[]>} The customer portal links
     */
    generateCustomerPortalLink(organizationId: string): Promise<string[]>;
}