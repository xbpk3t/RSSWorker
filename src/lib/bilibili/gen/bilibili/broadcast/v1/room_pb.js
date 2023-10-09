// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/broadcast/v1/room.proto (package bilibili.broadcast.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";
import { Status } from "../../rpc/status_pb.js";

/**
 * @generated from message bilibili.broadcast.v1.RoomErrorEvent
 */
export const RoomErrorEvent = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomErrorEvent",
  () => [
    { no: 1, name: "status", kind: "message", T: Status },
  ],
);

/**
 * @generated from message bilibili.broadcast.v1.RoomJoinEvent
 */
export const RoomJoinEvent = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomJoinEvent",
  [],
);

/**
 * @generated from message bilibili.broadcast.v1.RoomLeaveEvent
 */
export const RoomLeaveEvent = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomLeaveEvent",
  [],
);

/**
 * @generated from message bilibili.broadcast.v1.RoomMessageEvent
 */
export const RoomMessageEvent = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomMessageEvent",
  () => [
    { no: 1, name: "target_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "message", T: Any },
  ],
);

/**
 * @generated from message bilibili.broadcast.v1.RoomOnlineEvent
 */
export const RoomOnlineEvent = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomOnlineEvent",
  () => [
    { no: 1, name: "online", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "all_online", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message bilibili.broadcast.v1.RoomReq
 */
export const RoomReq = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomReq",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "join", kind: "message", T: RoomJoinEvent, oneof: "event" },
    { no: 3, name: "leave", kind: "message", T: RoomLeaveEvent, oneof: "event" },
    { no: 4, name: "online", kind: "message", T: RoomOnlineEvent, oneof: "event" },
    { no: 5, name: "msg", kind: "message", T: RoomMessageEvent, oneof: "event" },
  ],
);

/**
 * @generated from message bilibili.broadcast.v1.RoomResp
 */
export const RoomResp = proto3.makeMessageType(
  "bilibili.broadcast.v1.RoomResp",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "join", kind: "message", T: RoomJoinEvent, oneof: "event" },
    { no: 3, name: "leave", kind: "message", T: RoomLeaveEvent, oneof: "event" },
    { no: 4, name: "online", kind: "message", T: RoomOnlineEvent, oneof: "event" },
    { no: 5, name: "msg", kind: "message", T: RoomMessageEvent, oneof: "event" },
    { no: 6, name: "err", kind: "message", T: RoomErrorEvent, oneof: "event" },
  ],
);
