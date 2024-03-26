// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file users.proto (package scalekit.v1.users, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, GetUserRequest, GetUserResponse, ListUserRequest, ListUserResponse, UpdateUserRequest, UpdateUserResponse } from "./users_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service scalekit.v1.users.UserService
 */
export const UserService = {
  typeName: "scalekit.v1.users.UserService",
  methods: {
    /**
     * @generated from rpc scalekit.v1.users.UserService.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.users.UserService.UpdateUser
     */
    updateUser: {
      name: "UpdateUser",
      I: UpdateUserRequest,
      O: UpdateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.users.UserService.GetUser
     */
    getUser: {
      name: "GetUser",
      I: GetUserRequest,
      O: GetUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.users.UserService.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUserRequest,
      O: ListUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc scalekit.v1.users.UserService.DeleteUser
     */
    deleteUser: {
      name: "DeleteUser",
      I: DeleteUserRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

