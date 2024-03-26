import { CreateDomainRequest, CreateDomainResponse, DeleteDomainRequest, GetDomainRequest, GetDomainResponse, ListDomainRequest, ListDomainResponse, UpdateDomainRequest, UpdateDomainResponse } from "./domain_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service scalekit.v1.domains.DomainService
 */
export declare const DomainService: {
    readonly typeName: "scalekit.v1.domains.DomainService";
    readonly methods: {
        /**
         * @generated from rpc scalekit.v1.domains.DomainService.CreateDomain
         */
        readonly createDomain: {
            readonly name: "CreateDomain";
            readonly I: typeof CreateDomainRequest;
            readonly O: typeof CreateDomainResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc scalekit.v1.domains.DomainService.UpdateDomain
         */
        readonly updateDomain: {
            readonly name: "UpdateDomain";
            readonly I: typeof UpdateDomainRequest;
            readonly O: typeof UpdateDomainResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc scalekit.v1.domains.DomainService.GetDomain
         */
        readonly getDomain: {
            readonly name: "GetDomain";
            readonly I: typeof GetDomainRequest;
            readonly O: typeof GetDomainResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc scalekit.v1.domains.DomainService.DeleteDomain
         */
        readonly deleteDomain: {
            readonly name: "DeleteDomain";
            readonly I: typeof DeleteDomainRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc scalekit.v1.domains.DomainService.ListDomains
         */
        readonly listDomains: {
            readonly name: "ListDomains";
            readonly I: typeof ListDomainRequest;
            readonly O: typeof ListDomainResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
