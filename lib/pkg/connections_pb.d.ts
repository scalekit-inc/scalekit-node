import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum scalekit.v1.connections.ConfigurationType
 */
export declare enum ConfigurationType {
    /**
     * @generated from enum value: CONFIGURATION_TYPE_UNSPECIFIED = 0;
     */
    CONFIGURATION_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: DISCOVERY = 1;
     */
    DISCOVERY = 1,
    /**
     * @generated from enum value: MANUAL = 2;
     */
    MANUAL = 2
}
/**
 * @generated from enum scalekit.v1.connections.NameIdFormat
 */
export declare enum NameIdFormat {
    /**
     * @generated from enum value: NAME_ID_FORMAT_NIL = 0;
     */
    NAME_ID_FORMAT_NIL = 0,
    /**
     * @generated from enum value: UNSPECIFIED = 1;
     */
    UNSPECIFIED = 1,
    /**
     * @generated from enum value: EMAIL = 2;
     */
    EMAIL = 2,
    /**
     * @generated from enum value: TRANSIENT = 3;
     */
    TRANSIENT = 3,
    /**
     * @generated from enum value: PERSISTENT = 4;
     */
    PERSISTENT = 4
}
/**
 * enums all
 *
 * @generated from enum scalekit.v1.connections.SAMLSigningOptions
 */
export declare enum SAMLSigningOptions {
    /**
     * @generated from enum value: SAML_SIGNING_OPTIONS_UNSPECIFIED = 0;
     */
    SAML_SIGNING_OPTIONS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: NO_SIGNING = 1;
     */
    NO_SIGNING = 1,
    /**
     * @generated from enum value: SAML_ONLY_RESPONSE_SIGNING = 2;
     */
    SAML_ONLY_RESPONSE_SIGNING = 2,
    /**
     * @generated from enum value: SAML_ONLY_ASSERTION_SIGNING = 3;
     */
    SAML_ONLY_ASSERTION_SIGNING = 3,
    /**
     * @generated from enum value: SAML_RESPONSE_ASSERTION_SIGNING = 4;
     */
    SAML_RESPONSE_ASSERTION_SIGNING = 4
}
/**
 * @generated from enum scalekit.v1.connections.RequestBinding
 */
export declare enum RequestBinding {
    /**
     * @generated from enum value: REQUEST_BINDING_UNSPECIFIED = 0;
     */
    REQUEST_BINDING_UNSPECIFIED = 0,
    /**
     * @generated from enum value: HTTP_POST = 1;
     */
    HTTP_POST = 1,
    /**
     * @generated from enum value: HTTP_REDIRECT = 2;
     */
    HTTP_REDIRECT = 2
}
/**
 * @generated from enum scalekit.v1.connections.TokenAuthType
 */
export declare enum TokenAuthType {
    /**
     * @generated from enum value: TOKEN_AUTH_TYPE_UNSPECIFIED = 0;
     */
    TOKEN_AUTH_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: URL_PARAMS = 1;
     */
    URL_PARAMS = 1,
    /**
     * @generated from enum value: BASIC_AUTH = 2;
     */
    BASIC_AUTH = 2
}
/**
 * @generated from enum scalekit.v1.connections.OIDCScope
 */
export declare enum OIDCScope {
    /**
     * @generated from enum value: OIDC_SCOPE_UNSPECIFIED = 0;
     */
    OIDC_SCOPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: openid = 1;
     */
    openid = 1,
    /**
     * @generated from enum value: profile = 2;
     */
    profile = 2,
    /**
     * @generated from enum value: email = 3;
     */
    email = 3,
    /**
     * @generated from enum value: address = 4;
     */
    address = 4,
    /**
     * @generated from enum value: phone = 5;
     */
    phone = 5
}
/**
 * @generated from enum scalekit.v1.connections.ConnectionType
 */
export declare enum ConnectionType {
    /**
     * @generated from enum value: INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from enum value: OIDC = 1;
     */
    OIDC = 1,
    /**
     * @generated from enum value: SAML = 2;
     */
    SAML = 2,
    /**
     * @generated from enum value: PASSWORD = 3;
     */
    PASSWORD = 3
}
/**
 * @generated from enum scalekit.v1.connections.ConnectionStatus
 */
export declare enum ConnectionStatus {
    /**
     * @generated from enum value: CONNECTION_STATUS_UNSPECIFIED = 0;
     */
    CONNECTION_STATUS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: DRAFT = 1;
     */
    DRAFT = 1,
    /**
     * @generated from enum value: IN_PROGRESS = 2;
     */
    IN_PROGRESS = 2,
    /**
     * @generated from enum value: COMPLETED = 3;
     */
    COMPLETED = 3
}
/**
 * @generated from enum scalekit.v1.connections.ConnectionProvider
 */
export declare enum ConnectionProvider {
    /**
     * @generated from enum value: CONNECTION_PROVIDER_UNSPECIFIED = 0;
     */
    CONNECTION_PROVIDER_UNSPECIFIED = 0,
    /**
     * @generated from enum value: OKTA = 1;
     */
    OKTA = 1,
    /**
     * @generated from enum value: GOOGLE = 2;
     */
    GOOGLE = 2,
    /**
     * @generated from enum value: MICROSOFT_AD = 3;
     */
    MICROSOFT_AD = 3,
    /**
     * @generated from enum value: AUTH0 = 4;
     */
    AUTH0 = 4,
    /**
     * @generated from enum value: CUSTOM = 5;
     */
    CUSTOM = 5
}
/**
 * @generated from message scalekit.v1.connections.CreateConnectionRequest
 */
export declare class CreateConnectionRequest extends Message<CreateConnectionRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.CreateConnectionRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: scalekit.v1.connections.CreateConnection connection = 3;
     */
    connection?: CreateConnection;
    constructor(data?: PartialMessage<CreateConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.CreateConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConnectionRequest;
    static equals(a: CreateConnectionRequest | PlainMessage<CreateConnectionRequest> | undefined, b: CreateConnectionRequest | PlainMessage<CreateConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.CreateConnection
 */
export declare class CreateConnection extends Message<CreateConnection> {
    /**
     * @generated from field: scalekit.v1.connections.ConnectionProvider provider = 1;
     */
    provider: ConnectionProvider;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionType type = 2;
     */
    type: ConnectionType;
    constructor(data?: PartialMessage<CreateConnection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.CreateConnection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConnection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConnection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConnection;
    static equals(a: CreateConnection | PlainMessage<CreateConnection> | undefined, b: CreateConnection | PlainMessage<CreateConnection> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.Connection
 */
export declare class Connection extends Message<Connection> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionProvider provider = 2;
     */
    provider: ConnectionProvider;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionType type = 3;
     */
    type: ConnectionType;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionStatus status = 4;
     */
    status: ConnectionStatus;
    /**
     * @generated from field: bool enabled = 5;
     */
    enabled: boolean;
    /**
     * @generated from field: bool debug_enabled = 6;
     */
    debugEnabled: boolean;
    /**
     * @generated from field: string organization_id = 7;
     */
    organizationId: string;
    /**
     * @generated from field: string ui_button_title = 8;
     */
    uiButtonTitle: string;
    /**
     * @generated from field: string login_initiation_uri = 9;
     */
    loginInitiationUri: string;
    /**
     * @generated from field: string logout_uri = 10;
     */
    logoutUri: string;
    /**
     * @generated from field: scalekit.v1.connections.ConfigurationType configuration_type = 11;
     */
    configurationType: ConfigurationType;
    /**
     * @generated from oneof scalekit.v1.connections.Connection.settings
     */
    settings: {
        /**
         * @generated from field: scalekit.v1.connections.OIDCConnectionConfig oidc_config = 13;
         */
        value: OIDCConnectionConfig;
        case: "oidcConfig";
    } | {
        /**
         * @generated from field: scalekit.v1.connections.SAMLConnectionConfigResponse saml_config = 14;
         */
        value: SAMLConnectionConfigResponse;
        case: "samlConfig";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: map<string, string> attribute_mapping = 15;
     */
    attributeMapping: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<Connection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.Connection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Connection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Connection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Connection;
    static equals(a: Connection | PlainMessage<Connection> | undefined, b: Connection | PlainMessage<Connection> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.CreateConnectionResponse
 */
export declare class CreateConnectionResponse extends Message<CreateConnectionResponse> {
    /**
     * @generated from field: scalekit.v1.connections.Connection connection = 1;
     */
    connection?: Connection;
    constructor(data?: PartialMessage<CreateConnectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.CreateConnectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConnectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConnectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConnectionResponse;
    static equals(a: CreateConnectionResponse | PlainMessage<CreateConnectionResponse> | undefined, b: CreateConnectionResponse | PlainMessage<CreateConnectionResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.UpdateConnectionRequest
 */
export declare class UpdateConnectionRequest extends Message<UpdateConnectionRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.UpdateConnectionRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    /**
     * @generated from field: scalekit.v1.connections.UpdateConnection connection = 4;
     */
    connection?: UpdateConnection;
    constructor(data?: PartialMessage<UpdateConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.UpdateConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateConnectionRequest;
    static equals(a: UpdateConnectionRequest | PlainMessage<UpdateConnectionRequest> | undefined, b: UpdateConnectionRequest | PlainMessage<UpdateConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.UpdateConnection
 */
export declare class UpdateConnection extends Message<UpdateConnection> {
    /**
     * @generated from field: scalekit.v1.connections.ConnectionProvider provider = 1;
     */
    provider: ConnectionProvider;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionType type = 2;
     */
    type: ConnectionType;
    /**
     * @generated from field: google.protobuf.BoolValue debug_enabled = 3;
     */
    debugEnabled?: boolean;
    /**
     * @generated from field: google.protobuf.StringValue ui_button_title = 4;
     */
    uiButtonTitle?: string;
    /**
     * @generated from field: google.protobuf.StringValue logout_uri = 5;
     */
    logoutUri?: string;
    /**
     * @generated from field: scalekit.v1.connections.ConfigurationType configuration_type = 6;
     */
    configurationType: ConfigurationType;
    /**
     * @generated from oneof scalekit.v1.connections.UpdateConnection.settings
     */
    settings: {
        /**
         * @generated from field: scalekit.v1.connections.OIDCConnectionConfig oidc_config = 7;
         */
        value: OIDCConnectionConfig;
        case: "oidcConfig";
    } | {
        /**
         * @generated from field: scalekit.v1.connections.SAMLConnectionConfigRequest saml_config = 8;
         */
        value: SAMLConnectionConfigRequest;
        case: "samlConfig";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: map<string, string> attribute_mapping = 9;
     */
    attributeMapping: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<UpdateConnection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.UpdateConnection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateConnection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateConnection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateConnection;
    static equals(a: UpdateConnection | PlainMessage<UpdateConnection> | undefined, b: UpdateConnection | PlainMessage<UpdateConnection> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.UpdateConnectionResponse
 */
export declare class UpdateConnectionResponse extends Message<UpdateConnectionResponse> {
    /**
     * @generated from field: scalekit.v1.connections.Connection connection = 1;
     */
    connection?: Connection;
    constructor(data?: PartialMessage<UpdateConnectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.UpdateConnectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateConnectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateConnectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateConnectionResponse;
    static equals(a: UpdateConnectionResponse | PlainMessage<UpdateConnectionResponse> | undefined, b: UpdateConnectionResponse | PlainMessage<UpdateConnectionResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.DeleteConnectionRequest
 */
export declare class DeleteConnectionRequest extends Message<DeleteConnectionRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.DeleteConnectionRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    constructor(data?: PartialMessage<DeleteConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.DeleteConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteConnectionRequest;
    static equals(a: DeleteConnectionRequest | PlainMessage<DeleteConnectionRequest> | undefined, b: DeleteConnectionRequest | PlainMessage<DeleteConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetConnectionRequest
 */
export declare class GetConnectionRequest extends Message<GetConnectionRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.GetConnectionRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    constructor(data?: PartialMessage<GetConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectionRequest;
    static equals(a: GetConnectionRequest | PlainMessage<GetConnectionRequest> | undefined, b: GetConnectionRequest | PlainMessage<GetConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetConnectionResponse
 */
export declare class GetConnectionResponse extends Message<GetConnectionResponse> {
    /**
     * @generated from field: scalekit.v1.connections.Connection connection = 1;
     */
    connection?: Connection;
    constructor(data?: PartialMessage<GetConnectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetConnectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectionResponse;
    static equals(a: GetConnectionResponse | PlainMessage<GetConnectionResponse> | undefined, b: GetConnectionResponse | PlainMessage<GetConnectionResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.ListConnectionsRequest
 */
export declare class ListConnectionsRequest extends Message<ListConnectionsRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.ListConnectionsRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional string include = 3;
     */
    include?: string;
    constructor(data?: PartialMessage<ListConnectionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.ListConnectionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListConnectionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListConnectionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListConnectionsRequest;
    static equals(a: ListConnectionsRequest | PlainMessage<ListConnectionsRequest> | undefined, b: ListConnectionsRequest | PlainMessage<ListConnectionsRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.ListConnectionsResponse
 */
export declare class ListConnectionsResponse extends Message<ListConnectionsResponse> {
    /**
     * @generated from field: repeated scalekit.v1.connections.Connection connections = 1;
     */
    connections: Connection[];
    constructor(data?: PartialMessage<ListConnectionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.ListConnectionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListConnectionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListConnectionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListConnectionsResponse;
    static equals(a: ListConnectionsResponse | PlainMessage<ListConnectionsResponse> | undefined, b: ListConnectionsResponse | PlainMessage<ListConnectionsResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.EnableConnectionRequest
 */
export declare class EnableConnectionRequest extends Message<EnableConnectionRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.EnableConnectionRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    constructor(data?: PartialMessage<EnableConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.EnableConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableConnectionRequest;
    static equals(a: EnableConnectionRequest | PlainMessage<EnableConnectionRequest> | undefined, b: EnableConnectionRequest | PlainMessage<EnableConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.DisableConnectionRequest
 */
export declare class DisableConnectionRequest extends Message<DisableConnectionRequest> {
    /**
     * @generated from oneof scalekit.v1.connections.DisableConnectionRequest.identities
     */
    identities: {
        /**
         * @generated from field: string organization_id = 1;
         */
        value: string;
        case: "organizationId";
    } | {
        /**
         * @generated from field: string external_id = 2;
         */
        value: string;
        case: "externalId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    constructor(data?: PartialMessage<DisableConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.DisableConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DisableConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DisableConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DisableConnectionRequest;
    static equals(a: DisableConnectionRequest | PlainMessage<DisableConnectionRequest> | undefined, b: DisableConnectionRequest | PlainMessage<DisableConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.ToggleConnectionResponse
 */
export declare class ToggleConnectionResponse extends Message<ToggleConnectionResponse> {
    /**
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * @generated from field: optional string error_message = 2;
     */
    errorMessage?: string;
    constructor(data?: PartialMessage<ToggleConnectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.ToggleConnectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ToggleConnectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ToggleConnectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ToggleConnectionResponse;
    static equals(a: ToggleConnectionResponse | PlainMessage<ToggleConnectionResponse> | undefined, b: ToggleConnectionResponse | PlainMessage<ToggleConnectionResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.OIDCConnectionConfig
 */
export declare class OIDCConnectionConfig extends Message<OIDCConnectionConfig> {
    /**
     * @generated from field: google.protobuf.StringValue issuer = 1;
     */
    issuer?: string;
    /**
     * @generated from field: google.protobuf.StringValue well_known_uri = 2;
     */
    wellKnownUri?: string;
    /**
     * @generated from field: google.protobuf.StringValue authorize_uri = 3;
     */
    authorizeUri?: string;
    /**
     * @generated from field: google.protobuf.StringValue token_uri = 4;
     */
    tokenUri?: string;
    /**
     * @generated from field: google.protobuf.StringValue user_info_uri = 5;
     */
    userInfoUri?: string;
    /**
     * @generated from field: google.protobuf.StringValue jwks_uri = 6;
     */
    jwksUri?: string;
    /**
     * @generated from field: google.protobuf.StringValue client_id = 8;
     */
    clientId?: string;
    /**
     * @generated from field: google.protobuf.StringValue client_secret = 9;
     */
    clientSecret?: string;
    /**
     * @generated from field: repeated scalekit.v1.connections.OIDCScope scopes = 10;
     */
    scopes: OIDCScope[];
    /**
     * @generated from field: scalekit.v1.connections.TokenAuthType token_auth_type = 11;
     */
    tokenAuthType: TokenAuthType;
    /**
     * @generated from field: string redirect_uri = 12;
     */
    redirectUri: string;
    /**
     * @generated from field: google.protobuf.BoolValue pkce_enabled = 13;
     */
    pkceEnabled?: boolean;
    constructor(data?: PartialMessage<OIDCConnectionConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.OIDCConnectionConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OIDCConnectionConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OIDCConnectionConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OIDCConnectionConfig;
    static equals(a: OIDCConnectionConfig | PlainMessage<OIDCConnectionConfig> | undefined, b: OIDCConnectionConfig | PlainMessage<OIDCConnectionConfig> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.SAMLConnectionConfigRequest
 */
export declare class SAMLConnectionConfigRequest extends Message<SAMLConnectionConfigRequest> {
    /**
     * @generated from field: google.protobuf.StringValue idp_metadata_url = 1;
     */
    idpMetadataUrl?: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_entity_id = 2;
     */
    idpEntityId?: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_sso_url = 3;
     */
    idpSsoUrl?: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_certificate = 4;
     */
    idpCertificate?: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_slo_url = 5;
     */
    idpSloUrl?: string;
    /**
     * @generated from field: google.protobuf.StringValue ui_button_title = 6;
     */
    uiButtonTitle?: string;
    /**
     * @generated from field: scalekit.v1.connections.NameIdFormat idp_name_id_format = 7;
     */
    idpNameIdFormat: NameIdFormat;
    /**
     * @generated from field: scalekit.v1.connections.RequestBinding request_binding = 8;
     */
    requestBinding: RequestBinding;
    /**
     * @generated from field: scalekit.v1.connections.SAMLSigningOptions saml_signing_option = 9;
     */
    samlSigningOption: SAMLSigningOptions;
    /**
     * @generated from field: google.protobuf.BoolValue allow_idp_initiated_login = 10;
     */
    allowIdpInitiatedLogin?: boolean;
    /**
     * @generated from field: google.protobuf.BoolValue force_authn = 11;
     */
    forceAuthn?: boolean;
    /**
     * @generated from field: google.protobuf.StringValue default_redirect_uri = 12;
     */
    defaultRedirectUri?: string;
    /**
     * @generated from field: google.protobuf.BoolValue assertion_encrypted = 13;
     */
    assertionEncrypted?: boolean;
    /**
     * @generated from field: google.protobuf.BoolValue want_request_signed = 14;
     */
    wantRequestSigned?: boolean;
    constructor(data?: PartialMessage<SAMLConnectionConfigRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.SAMLConnectionConfigRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SAMLConnectionConfigRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SAMLConnectionConfigRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SAMLConnectionConfigRequest;
    static equals(a: SAMLConnectionConfigRequest | PlainMessage<SAMLConnectionConfigRequest> | undefined, b: SAMLConnectionConfigRequest | PlainMessage<SAMLConnectionConfigRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.SAMLConnectionConfigResponse
 */
export declare class SAMLConnectionConfigResponse extends Message<SAMLConnectionConfigResponse> {
    /**
     * @generated from field: string sp_entity_id = 1;
     */
    spEntityId: string;
    /**
     * @generated from field: string sp_assertion_url = 2;
     */
    spAssertionUrl: string;
    /**
     * @generated from field: string sp_metadata_url = 3;
     */
    spMetadataUrl: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_metadata_url = 4;
     */
    idpMetadataUrl?: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_entity_id = 5;
     */
    idpEntityId?: string;
    /**
     * @generated from field: google.protobuf.StringValue idp_sso_url = 6;
     */
    idpSsoUrl?: string;
    /**
     * @generated from field: repeated scalekit.v1.connections.IDPCertificate idp_certificates = 7;
     */
    idpCertificates: IDPCertificate[];
    /**
     * @generated from field: google.protobuf.StringValue idp_slo_url = 8;
     */
    idpSloUrl?: string;
    /**
     * @generated from field: google.protobuf.StringValue ui_button_title = 9;
     */
    uiButtonTitle?: string;
    /**
     * @generated from field: scalekit.v1.connections.NameIdFormat idp_name_id_format = 10;
     */
    idpNameIdFormat: NameIdFormat;
    /**
     * @generated from field: scalekit.v1.connections.RequestBinding request_binding = 11;
     */
    requestBinding: RequestBinding;
    /**
     * @generated from field: scalekit.v1.connections.SAMLSigningOptions saml_signing_option = 12;
     */
    samlSigningOption: SAMLSigningOptions;
    /**
     * @generated from field: google.protobuf.BoolValue allow_idp_initiated_login = 13;
     */
    allowIdpInitiatedLogin?: boolean;
    /**
     * @generated from field: google.protobuf.BoolValue force_authn = 14;
     */
    forceAuthn?: boolean;
    /**
     * @generated from field: google.protobuf.StringValue default_redirect_uri = 15;
     */
    defaultRedirectUri?: string;
    /**
     * @generated from field: google.protobuf.BoolValue assertion_encrypted = 16;
     */
    assertionEncrypted?: boolean;
    /**
     * @generated from field: google.protobuf.BoolValue want_request_signed = 17;
     */
    wantRequestSigned?: boolean;
    constructor(data?: PartialMessage<SAMLConnectionConfigResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.SAMLConnectionConfigResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SAMLConnectionConfigResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SAMLConnectionConfigResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SAMLConnectionConfigResponse;
    static equals(a: SAMLConnectionConfigResponse | PlainMessage<SAMLConnectionConfigResponse> | undefined, b: SAMLConnectionConfigResponse | PlainMessage<SAMLConnectionConfigResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.IDPCertificate
 */
export declare class IDPCertificate extends Message<IDPCertificate> {
    /**
     * @generated from field: string certificate = 1;
     */
    certificate: string;
    /**
     * @generated from field: google.protobuf.Timestamp create_time = 2;
     */
    createTime?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp expiry_time = 3;
     */
    expiryTime?: Timestamp;
    /**
     * @generated from field: string id = 4;
     */
    id: string;
    /**
     * @generated from field: string issuer = 5;
     */
    issuer: string;
    constructor(data?: PartialMessage<IDPCertificate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.IDPCertificate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPCertificate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPCertificate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPCertificate;
    static equals(a: IDPCertificate | PlainMessage<IDPCertificate> | undefined, b: IDPCertificate | PlainMessage<IDPCertificate> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetConnectionByDomainRequest
 */
export declare class GetConnectionByDomainRequest extends Message<GetConnectionByDomainRequest> {
    /**
     * @generated from field: string domain = 1;
     */
    domain: string;
    constructor(data?: PartialMessage<GetConnectionByDomainRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetConnectionByDomainRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectionByDomainRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectionByDomainRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectionByDomainRequest;
    static equals(a: GetConnectionByDomainRequest | PlainMessage<GetConnectionByDomainRequest> | undefined, b: GetConnectionByDomainRequest | PlainMessage<GetConnectionByDomainRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetConnectionByDomainResponse
 */
export declare class GetConnectionByDomainResponse extends Message<GetConnectionByDomainResponse> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionStatus status = 2;
     */
    status: ConnectionStatus;
    /**
     * @generated from field: scalekit.v1.connections.ConnectionType type = 3;
     */
    type: ConnectionType;
    /**
     * @generated from field: string ui_button_title = 4;
     */
    uiButtonTitle: string;
    constructor(data?: PartialMessage<GetConnectionByDomainResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetConnectionByDomainResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectionByDomainResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectionByDomainResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectionByDomainResponse;
    static equals(a: GetConnectionByDomainResponse | PlainMessage<GetConnectionByDomainResponse> | undefined, b: GetConnectionByDomainResponse | PlainMessage<GetConnectionByDomainResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetOIDCMetadataRequest
 */
export declare class GetOIDCMetadataRequest extends Message<GetOIDCMetadataRequest> {
    /**
     * @generated from field: scalekit.v1.connections.OIDCMetadataRequest metadata = 1;
     */
    metadata?: OIDCMetadataRequest;
    constructor(data?: PartialMessage<GetOIDCMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetOIDCMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOIDCMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOIDCMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOIDCMetadataRequest;
    static equals(a: GetOIDCMetadataRequest | PlainMessage<GetOIDCMetadataRequest> | undefined, b: GetOIDCMetadataRequest | PlainMessage<GetOIDCMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.OIDCMetadataRequest
 */
export declare class OIDCMetadataRequest extends Message<OIDCMetadataRequest> {
    /**
     * @generated from field: string issuer = 1;
     */
    issuer: string;
    constructor(data?: PartialMessage<OIDCMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.OIDCMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OIDCMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OIDCMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OIDCMetadataRequest;
    static equals(a: OIDCMetadataRequest | PlainMessage<OIDCMetadataRequest> | undefined, b: OIDCMetadataRequest | PlainMessage<OIDCMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetOIDCMetadataResponse
 */
export declare class GetOIDCMetadataResponse extends Message<GetOIDCMetadataResponse> {
    /**
     * @generated from field: string issuer = 1;
     */
    issuer: string;
    /**
     * @generated from field: string authorization_endpoint = 2;
     */
    authorizationEndpoint: string;
    /**
     * @generated from field: string token_endpoint = 3;
     */
    tokenEndpoint: string;
    /**
     * @generated from field: string userinfo_endpoint = 4;
     */
    userinfoEndpoint: string;
    /**
     * @generated from field: string jwks_uri = 5;
     */
    jwksUri: string;
    constructor(data?: PartialMessage<GetOIDCMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetOIDCMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOIDCMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOIDCMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOIDCMetadataResponse;
    static equals(a: GetOIDCMetadataResponse | PlainMessage<GetOIDCMetadataResponse> | undefined, b: GetOIDCMetadataResponse | PlainMessage<GetOIDCMetadataResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetSAMLMetadataRequest
 */
export declare class GetSAMLMetadataRequest extends Message<GetSAMLMetadataRequest> {
    /**
     * @generated from field: scalekit.v1.connections.SAMLMetadataRequest metadata = 1;
     */
    metadata?: SAMLMetadataRequest;
    constructor(data?: PartialMessage<GetSAMLMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetSAMLMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSAMLMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSAMLMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSAMLMetadataRequest;
    static equals(a: GetSAMLMetadataRequest | PlainMessage<GetSAMLMetadataRequest> | undefined, b: GetSAMLMetadataRequest | PlainMessage<GetSAMLMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.SAMLMetadataRequest
 */
export declare class SAMLMetadataRequest extends Message<SAMLMetadataRequest> {
    /**
     * @generated from field: string metadata_url = 1;
     */
    metadataUrl: string;
    constructor(data?: PartialMessage<SAMLMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.SAMLMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SAMLMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SAMLMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SAMLMetadataRequest;
    static equals(a: SAMLMetadataRequest | PlainMessage<SAMLMetadataRequest> | undefined, b: SAMLMetadataRequest | PlainMessage<SAMLMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetSAMLMetadataResponse
 */
export declare class GetSAMLMetadataResponse extends Message<GetSAMLMetadataResponse> {
    /**
     * @generated from field: string idp_entity_id = 1;
     */
    idpEntityId: string;
    /**
     * @generated from field: string idp_sso_url = 2;
     */
    idpSsoUrl: string;
    /**
     * @generated from field: string idp_slo_url = 3;
     */
    idpSloUrl: string;
    /**
     * @generated from field: repeated string idp_certificates = 4;
     */
    idpCertificates: string[];
    /**
     * @generated from field: string idp_name_id_format = 5;
     */
    idpNameIdFormat: string;
    /**
     * @generated from field: string request_binding = 6;
     */
    requestBinding: string;
    /**
     * @generated from field: bool want_assertions_signed = 7;
     */
    wantAssertionsSigned: boolean;
    constructor(data?: PartialMessage<GetSAMLMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetSAMLMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSAMLMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSAMLMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSAMLMetadataResponse;
    static equals(a: GetSAMLMetadataResponse | PlainMessage<GetSAMLMetadataResponse> | undefined, b: GetSAMLMetadataResponse | PlainMessage<GetSAMLMetadataResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetSAMLCertificateDetailsRequest
 */
export declare class GetSAMLCertificateDetailsRequest extends Message<GetSAMLCertificateDetailsRequest> {
    /**
     * @generated from field: scalekit.v1.connections.SAMLCertificateRequest certificate = 1;
     */
    certificate?: SAMLCertificateRequest;
    constructor(data?: PartialMessage<GetSAMLCertificateDetailsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetSAMLCertificateDetailsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSAMLCertificateDetailsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSAMLCertificateDetailsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSAMLCertificateDetailsRequest;
    static equals(a: GetSAMLCertificateDetailsRequest | PlainMessage<GetSAMLCertificateDetailsRequest> | undefined, b: GetSAMLCertificateDetailsRequest | PlainMessage<GetSAMLCertificateDetailsRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.SAMLCertificateRequest
 */
export declare class SAMLCertificateRequest extends Message<SAMLCertificateRequest> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    constructor(data?: PartialMessage<SAMLCertificateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.SAMLCertificateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SAMLCertificateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SAMLCertificateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SAMLCertificateRequest;
    static equals(a: SAMLCertificateRequest | PlainMessage<SAMLCertificateRequest> | undefined, b: SAMLCertificateRequest | PlainMessage<SAMLCertificateRequest> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.GetSAMLCertificateDetailsResponse
 */
export declare class GetSAMLCertificateDetailsResponse extends Message<GetSAMLCertificateDetailsResponse> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    /**
     * @generated from field: int64 not_after = 2;
     */
    notAfter: bigint;
    /**
     * @generated from field: int64 not_before = 3;
     */
    notBefore: bigint;
    /**
     * @generated from field: string subject = 4;
     */
    subject: string;
    /**
     * @generated from field: string issuer = 5;
     */
    issuer: string;
    constructor(data?: PartialMessage<GetSAMLCertificateDetailsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.GetSAMLCertificateDetailsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSAMLCertificateDetailsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSAMLCertificateDetailsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSAMLCertificateDetailsResponse;
    static equals(a: GetSAMLCertificateDetailsResponse | PlainMessage<GetSAMLCertificateDetailsResponse> | undefined, b: GetSAMLCertificateDetailsResponse | PlainMessage<GetSAMLCertificateDetailsResponse> | undefined): boolean;
}
/**
 * @generated from message scalekit.v1.connections.PasswordConnectionConfig
 */
export declare class PasswordConnectionConfig extends Message<PasswordConnectionConfig> {
    constructor(data?: PartialMessage<PasswordConnectionConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "scalekit.v1.connections.PasswordConnectionConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PasswordConnectionConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PasswordConnectionConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PasswordConnectionConfig;
    static equals(a: PasswordConnectionConfig | PlainMessage<PasswordConnectionConfig> | undefined, b: PasswordConnectionConfig | PlainMessage<PasswordConnectionConfig> | undefined): boolean;
}
