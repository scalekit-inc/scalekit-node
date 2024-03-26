// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file domain.proto (package scalekit.v1.domains, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateDomainRequest, CreateDomainResponse, DeleteDomainRequest, GetDomainRequest, GetDomainResponse, ListDomainRequest, ListDomainResponse, UpdateDomainRequest, UpdateDomainResponse } from "./domain_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service scalekit.v1.domains.DomainService
 */
export const DomainService = {
  typeName: "scalekit.v1.domains.DomainService",
  methods: {
    /**
     * @generated from rpc scalekit.v1.domains.DomainService.CreateDomain
     */
    createDomain: {
      name: "CreateDomain",
      I: CreateDomainRequest,
      O: CreateDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.domains.DomainService.UpdateDomain
     */
    updateDomain: {
      name: "UpdateDomain",
      I: UpdateDomainRequest,
      O: UpdateDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.domains.DomainService.GetDomain
     */
    getDomain: {
      name: "GetDomain",
      I: GetDomainRequest,
      O: GetDomainResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.domains.DomainService.DeleteDomain
     */
    deleteDomain: {
      name: "DeleteDomain",
      I: DeleteDomainRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.domains.DomainService.ListDomains
     */
    listDomains: {
      name: "ListDomains",
      I: ListDomainRequest,
      O: ListDomainResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

