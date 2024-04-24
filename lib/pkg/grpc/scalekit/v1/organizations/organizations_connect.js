"use strict";
// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file scalekit/v1/organizations/organizations.proto (package scalekit.v1.organizations, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationService = void 0;
const organizations_pb_js_1 = require("./organizations_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service scalekit.v1.organizations.OrganizationService
 */
exports.OrganizationService = {
    typeName: "scalekit.v1.organizations.OrganizationService",
    methods: {
        /**
         * Create Organization
         *
         * @generated from rpc scalekit.v1.organizations.OrganizationService.CreateOrganization
         */
        createOrganization: {
            name: "CreateOrganization",
            I: organizations_pb_js_1.CreateOrganizationRequest,
            O: organizations_pb_js_1.CreateOrganizationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Update Organization description here
         *
         * @generated from rpc scalekit.v1.organizations.OrganizationService.UpdateOrganization
         */
        updateOrganization: {
            name: "UpdateOrganization",
            I: organizations_pb_js_1.UpdateOrganizationRequest,
            O: organizations_pb_js_1.UpdateOrganizationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Get Organization Description here
         *
         * @generated from rpc scalekit.v1.organizations.OrganizationService.GetOrganization
         */
        getOrganization: {
            name: "GetOrganization",
            I: organizations_pb_js_1.GetOrganizationRequest,
            O: organizations_pb_js_1.GetOrganizationResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc scalekit.v1.organizations.OrganizationService.ListOrganization
         */
        listOrganization: {
            name: "ListOrganization",
            I: organizations_pb_js_1.ListOrganizationsRequest,
            O: organizations_pb_js_1.ListOrganizationsResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Delete an Organization
         *
         * @generated from rpc scalekit.v1.organizations.OrganizationService.DeleteOrganization
         */
        deleteOrganization: {
            name: "DeleteOrganization",
            I: organizations_pb_js_1.DeleteOrganizationRequest,
            O: protobuf_1.Empty,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * Generate Portal Link for Org
         *
         * @generated from rpc scalekit.v1.organizations.OrganizationService.GenerateCustomerPortalLink
         */
        generateCustomerPortalLink: {
            name: "GenerateCustomerPortalLink",
            I: organizations_pb_js_1.CustomerPortalLinkRequest,
            O: organizations_pb_js_1.CustomerPortalLinksResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc scalekit.v1.organizations.OrganizationService.DeleteCustomerPortalLink
         */
        deleteCustomerPortalLink: {
            name: "DeleteCustomerPortalLink",
            I: organizations_pb_js_1.CustomerPortalLinkRequest,
            O: protobuf_1.Empty,
            kind: protobuf_1.MethodKind.Unary,
        },
        /**
         * @generated from rpc scalekit.v1.organizations.OrganizationService.GetCustomerPortalLink
         */
        getCustomerPortalLink: {
            name: "GetCustomerPortalLink",
            I: organizations_pb_js_1.CustomerPortalLinkRequest,
            O: organizations_pb_js_1.CustomerPortalLinksResponse,
            kind: protobuf_1.MethodKind.Unary,
        },
    }
};
//# sourceMappingURL=organizations_connect.js.map