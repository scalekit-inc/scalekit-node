// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file events.proto (package scalekit.v1.events, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum scalekit.v1.events.EventType
 */
export enum EventType {
  /**
   * @generated from enum value: EVENT_TYPE_UNSPECIFIED = 0;
   */
  EVENT_TYPE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORGANIZATION_CREATE = 11;
   */
  ORGANIZATION_CREATE = 11,
}
// Retrieve enum metadata with: proto3.getEnumType(EventType)
proto3.util.setEnumType(EventType, "scalekit.v1.events.EventType", [
  { no: 0, name: "EVENT_TYPE_UNSPECIFIED" },
  { no: 11, name: "ORGANIZATION_CREATE" },
]);

/**
 * @generated from message scalekit.v1.events.Event
 */
export class Event extends Message<Event> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: scalekit.v1.events.EventType type = 2;
   */
  type = EventType.EVENT_TYPE_UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * @generated from field: scalekit.v1.events.Event.Actor actor = 4;
   */
  actor?: Event_Actor;

  /**
   * @generated from field: string trace_context = 5;
   */
  traceContext = "";

  /**
   * @generated from field: string source = 6;
   */
  source = "";

  /**
   * @generated from field: string request_id = 7;
   */
  requestId = "";

  /**
   * @generated from field: google.protobuf.Any payload = 11;
   */
  payload?: Any;

  /**
   * @generated from field: google.protobuf.Any previous_payload = 12;
   */
  previousPayload?: Any;

  constructor(data?: PartialMessage<Event>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scalekit.v1.events.Event";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(EventType) },
    { no: 3, name: "create_time", kind: "message", T: Timestamp },
    { no: 4, name: "actor", kind: "message", T: Event_Actor },
    { no: 5, name: "trace_context", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "payload", kind: "message", T: Any },
    { no: 12, name: "previous_payload", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event {
    return new Event().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJsonString(jsonString, options);
  }

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean {
    return proto3.util.equals(Event, a, b);
  }
}

/**
 * @generated from message scalekit.v1.events.Event.Actor
 */
export class Event_Actor extends Message<Event_Actor> {
  /**
   * @generated from field: string environment_id = 1;
   */
  environmentId = "";

  /**
   * @generated from field: string organization_id = 2;
   */
  organizationId = "";

  /**
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * @generated from field: scalekit.v1.events.Event.Actor.UserType user_type = 4;
   */
  userType = Event_Actor_UserType.UNSPECIFIED;

  /**
   * @generated from field: string ip_addr = 5;
   */
  ipAddr = "";

  /**
   * @generated from field: string user_agent = 6;
   */
  userAgent = "";

  constructor(data?: PartialMessage<Event_Actor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "scalekit.v1.events.Event.Actor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "environment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "user_type", kind: "enum", T: proto3.getEnumType(Event_Actor_UserType) },
    { no: 5, name: "ip_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "user_agent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Actor {
    return new Event_Actor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Actor {
    return new Event_Actor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Actor {
    return new Event_Actor().fromJsonString(jsonString, options);
  }

  static equals(a: Event_Actor | PlainMessage<Event_Actor> | undefined, b: Event_Actor | PlainMessage<Event_Actor> | undefined): boolean {
    return proto3.util.equals(Event_Actor, a, b);
  }
}

/**
 * @generated from enum scalekit.v1.events.Event.Actor.UserType
 */
export enum Event_Actor_UserType {
  /**
   * @generated from enum value: USER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: USER_TYPE_HUMAN = 1;
   */
  HUMAN = 1,

  /**
   * @generated from enum value: USER_TYPE_MACHINE = 2;
   */
  MACHINE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Event_Actor_UserType)
proto3.util.setEnumType(Event_Actor_UserType, "scalekit.v1.events.Event.Actor.UserType", [
  { no: 0, name: "USER_TYPE_UNSPECIFIED" },
  { no: 1, name: "USER_TYPE_HUMAN" },
  { no: 2, name: "USER_TYPE_MACHINE" },
]);

