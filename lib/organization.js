"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const organizations_connect_1 = require("./pkg/grpc/scalekit/v1/organizations/organizations_connect");
class OrganizationClient {
    constructor(grpcConncet, coreClient) {
        this.grpcConncet = grpcConncet;
        this.coreClient = coreClient;
        this.client = this.grpcConncet.createClient(organizations_connect_1.OrganizationService);
    }
    /**
    * Create an organization with the given name. Optionally, you can provide an external id.
    * @param {object} options The options to create an organization
    * @param {string} options.name The organization name
    * @param {string} options.externalId The external id
    * @returns {Promise<CreateOrganizationResponse>} The created organization
    */
    createOrganization(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, externalId } = options;
            return this.coreClient.connectExec(this.client.createOrganization, {
                organization: {
                    displayName: name,
                    externalId: externalId
                }
            });
        });
    }
    /**
     * List organizations with pagination
     * @param {object} options The options to list organizations
     * @param {number} options.pageSize The page size
     * @param {string} options.pageToken The page token
     * @returns {Promise<ListOrganizationResponse>} The list of organizations
     */
    listOrganization(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coreClient.connectExec(this.client.listOrganization, options ? options : {});
        });
    }
    /**
     * Get an organization by id
     * @param {string} id The organization id
     * @returns {Promise<GetOrganizationResponse>} The organization
     */
    getOrganization(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coreClient.connectExec(this.client.getOrganization, { identities: { case: 'id', value: id } });
        });
    }
    /**
     * Get an organization by external id
     * @param {string} externalId The external id
     * @returns {Promise<GetOrganizationResponse>} The organization
     */
    getOrganizationByExternalId(externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coreClient.connectExec(this.client.getOrganization, { identities: { case: 'externalId', value: externalId } });
        });
    }
    /**
     * Update an organization by id
     * @param {string} id The organization id
     * @param {PartialMessage<UpdateOrganization>} organization The organization to update
     * @returns {Promise<UpdateOrganizationResponse>} The updated organization
     */
    updateOrganization(id, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coreClient.connectExec(this.client.updateOrganization, {
                identities: { case: "id", value: id },
                organization
            });
        });
    }
    /**
     * Update an organization by external id
     * @param {string} externalId The external id
     * @param {PartialMessage<UpdateOrganization>} organization The organization to update
     * @returns {Promise<UpdateOrganizationResponse>} The updated organization
     */
    updateOrganizationByExternalId(externalId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.coreClient.connectExec(this.client.updateOrganization, {
                identities: { case: "externalId", value: externalId, },
                organization
            });
        });
    }
    /**
     * Generate customer portal link for an organization
     * @param organizationId  The organization id
     * @returns {Promise<string[]>} The customer portal links
     */
    generateCustomerPortalLink(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.coreClient.connectExec(this.client.generateCustomerPortalLink, {
                id: organizationId
            });
            return response.links.map(link => link.location);
        });
    }
}
exports.default = OrganizationClient;
//# sourceMappingURL=organization.js.map