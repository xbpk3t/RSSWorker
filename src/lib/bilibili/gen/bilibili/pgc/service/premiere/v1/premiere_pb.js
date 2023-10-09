// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/pgc/service/premiere/v1/premiere.proto (package bilibili.pgc.service.premiere.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * 获取首播状态-请求
 *
 * @generated from message bilibili.pgc.service.premiere.v1.PremiereStatusReq
 */
export const PremiereStatusReq = proto3.makeMessageType(
  "bilibili.pgc.service.premiere.v1.PremiereStatusReq",
  () => [
    { no: 1, name: "ep_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 获取首播状态-响应
 *
 * @generated from message bilibili.pgc.service.premiere.v1.PremiereStatusReply
 */
export const PremiereStatusReply = proto3.makeMessageType(
  "bilibili.pgc.service.premiere.v1.PremiereStatusReply",
  () => [
    { no: 1, name: "progress", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "delay_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "online_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "status", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "after_premiere_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);
