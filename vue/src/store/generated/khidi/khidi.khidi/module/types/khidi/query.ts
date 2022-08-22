/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../khidi/params";
import { HyMarketsize } from "../khidi/hy_marketsize";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { HyPartner } from "../khidi/hy_partner";
import { HyImport } from "../khidi/hy_import";
import { HyExport } from "../khidi/hy_export";

export const protobufPackage = "khidi.khidi";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetHyMarketsizeRequest {
  index: string;
}

export interface QueryGetHyMarketsizeResponse {
  hyMarketsize: HyMarketsize | undefined;
}

export interface QueryAllHyMarketsizeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHyMarketsizeResponse {
  hyMarketsize: HyMarketsize[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHyPartnerRequest {
  index: string;
}

export interface QueryGetHyPartnerResponse {
  hyPartner: HyPartner | undefined;
}

export interface QueryAllHyPartnerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHyPartnerResponse {
  hyPartner: HyPartner[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHyImportRequest {
  index: string;
}

export interface QueryGetHyImportResponse {
  hyImport: HyImport | undefined;
}

export interface QueryAllHyImportRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHyImportResponse {
  hyImport: HyImport[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHyExportRequest {
  index: string;
}

export interface QueryGetHyExportResponse {
  hyExport: HyExport | undefined;
}

export interface QueryAllHyExportRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHyExportResponse {
  hyExport: HyExport[];
  pagination: PageResponse | undefined;
}

export interface QueryHyRecentMarketsizeRequest {
  name: string;
  group: string;
}

export interface QueryHyRecentMarketsizeResponse {
  volume: string;
}

export interface QueryHyRecentPartnerRequest {
  buyer: string;
  seller: string;
}

export interface QueryHyRecentPartnerResponse {
  volume: string;
}

export interface QueryHyRecentImportRequest {
  name: string;
  group: string;
}

export interface QueryHyRecentImportResponse {
  volume: string;
}

export interface QueryHyRecentExportRequest {
  name: string;
  group: string;
}

export interface QueryHyRecentExportResponse {
  volume: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetHyMarketsizeRequest: object = { index: "" };

export const QueryGetHyMarketsizeRequest = {
  encode(
    message: QueryGetHyMarketsizeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHyMarketsizeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyMarketsizeRequest,
    } as QueryGetHyMarketsizeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyMarketsizeRequest {
    const message = {
      ...baseQueryGetHyMarketsizeRequest,
    } as QueryGetHyMarketsizeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetHyMarketsizeRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyMarketsizeRequest>
  ): QueryGetHyMarketsizeRequest {
    const message = {
      ...baseQueryGetHyMarketsizeRequest,
    } as QueryGetHyMarketsizeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetHyMarketsizeResponse: object = {};

export const QueryGetHyMarketsizeResponse = {
  encode(
    message: QueryGetHyMarketsizeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hyMarketsize !== undefined) {
      HyMarketsize.encode(
        message.hyMarketsize,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHyMarketsizeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyMarketsizeResponse,
    } as QueryGetHyMarketsizeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyMarketsize = HyMarketsize.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyMarketsizeResponse {
    const message = {
      ...baseQueryGetHyMarketsizeResponse,
    } as QueryGetHyMarketsizeResponse;
    if (object.hyMarketsize !== undefined && object.hyMarketsize !== null) {
      message.hyMarketsize = HyMarketsize.fromJSON(object.hyMarketsize);
    } else {
      message.hyMarketsize = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHyMarketsizeResponse): unknown {
    const obj: any = {};
    message.hyMarketsize !== undefined &&
      (obj.hyMarketsize = message.hyMarketsize
        ? HyMarketsize.toJSON(message.hyMarketsize)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyMarketsizeResponse>
  ): QueryGetHyMarketsizeResponse {
    const message = {
      ...baseQueryGetHyMarketsizeResponse,
    } as QueryGetHyMarketsizeResponse;
    if (object.hyMarketsize !== undefined && object.hyMarketsize !== null) {
      message.hyMarketsize = HyMarketsize.fromPartial(object.hyMarketsize);
    } else {
      message.hyMarketsize = undefined;
    }
    return message;
  },
};

const baseQueryAllHyMarketsizeRequest: object = {};

export const QueryAllHyMarketsizeRequest = {
  encode(
    message: QueryAllHyMarketsizeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHyMarketsizeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyMarketsizeRequest,
    } as QueryAllHyMarketsizeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyMarketsizeRequest {
    const message = {
      ...baseQueryAllHyMarketsizeRequest,
    } as QueryAllHyMarketsizeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyMarketsizeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyMarketsizeRequest>
  ): QueryAllHyMarketsizeRequest {
    const message = {
      ...baseQueryAllHyMarketsizeRequest,
    } as QueryAllHyMarketsizeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHyMarketsizeResponse: object = {};

export const QueryAllHyMarketsizeResponse = {
  encode(
    message: QueryAllHyMarketsizeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.hyMarketsize) {
      HyMarketsize.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHyMarketsizeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyMarketsizeResponse,
    } as QueryAllHyMarketsizeResponse;
    message.hyMarketsize = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyMarketsize.push(
            HyMarketsize.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyMarketsizeResponse {
    const message = {
      ...baseQueryAllHyMarketsizeResponse,
    } as QueryAllHyMarketsizeResponse;
    message.hyMarketsize = [];
    if (object.hyMarketsize !== undefined && object.hyMarketsize !== null) {
      for (const e of object.hyMarketsize) {
        message.hyMarketsize.push(HyMarketsize.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyMarketsizeResponse): unknown {
    const obj: any = {};
    if (message.hyMarketsize) {
      obj.hyMarketsize = message.hyMarketsize.map((e) =>
        e ? HyMarketsize.toJSON(e) : undefined
      );
    } else {
      obj.hyMarketsize = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyMarketsizeResponse>
  ): QueryAllHyMarketsizeResponse {
    const message = {
      ...baseQueryAllHyMarketsizeResponse,
    } as QueryAllHyMarketsizeResponse;
    message.hyMarketsize = [];
    if (object.hyMarketsize !== undefined && object.hyMarketsize !== null) {
      for (const e of object.hyMarketsize) {
        message.hyMarketsize.push(HyMarketsize.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetHyPartnerRequest: object = { index: "" };

export const QueryGetHyPartnerRequest = {
  encode(
    message: QueryGetHyPartnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHyPartnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyPartnerRequest,
    } as QueryGetHyPartnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyPartnerRequest {
    const message = {
      ...baseQueryGetHyPartnerRequest,
    } as QueryGetHyPartnerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetHyPartnerRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyPartnerRequest>
  ): QueryGetHyPartnerRequest {
    const message = {
      ...baseQueryGetHyPartnerRequest,
    } as QueryGetHyPartnerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetHyPartnerResponse: object = {};

export const QueryGetHyPartnerResponse = {
  encode(
    message: QueryGetHyPartnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hyPartner !== undefined) {
      HyPartner.encode(message.hyPartner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHyPartnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyPartnerResponse,
    } as QueryGetHyPartnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyPartner = HyPartner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyPartnerResponse {
    const message = {
      ...baseQueryGetHyPartnerResponse,
    } as QueryGetHyPartnerResponse;
    if (object.hyPartner !== undefined && object.hyPartner !== null) {
      message.hyPartner = HyPartner.fromJSON(object.hyPartner);
    } else {
      message.hyPartner = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHyPartnerResponse): unknown {
    const obj: any = {};
    message.hyPartner !== undefined &&
      (obj.hyPartner = message.hyPartner
        ? HyPartner.toJSON(message.hyPartner)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyPartnerResponse>
  ): QueryGetHyPartnerResponse {
    const message = {
      ...baseQueryGetHyPartnerResponse,
    } as QueryGetHyPartnerResponse;
    if (object.hyPartner !== undefined && object.hyPartner !== null) {
      message.hyPartner = HyPartner.fromPartial(object.hyPartner);
    } else {
      message.hyPartner = undefined;
    }
    return message;
  },
};

const baseQueryAllHyPartnerRequest: object = {};

export const QueryAllHyPartnerRequest = {
  encode(
    message: QueryAllHyPartnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHyPartnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyPartnerRequest,
    } as QueryAllHyPartnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyPartnerRequest {
    const message = {
      ...baseQueryAllHyPartnerRequest,
    } as QueryAllHyPartnerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyPartnerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyPartnerRequest>
  ): QueryAllHyPartnerRequest {
    const message = {
      ...baseQueryAllHyPartnerRequest,
    } as QueryAllHyPartnerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHyPartnerResponse: object = {};

export const QueryAllHyPartnerResponse = {
  encode(
    message: QueryAllHyPartnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.hyPartner) {
      HyPartner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHyPartnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyPartnerResponse,
    } as QueryAllHyPartnerResponse;
    message.hyPartner = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyPartner.push(HyPartner.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyPartnerResponse {
    const message = {
      ...baseQueryAllHyPartnerResponse,
    } as QueryAllHyPartnerResponse;
    message.hyPartner = [];
    if (object.hyPartner !== undefined && object.hyPartner !== null) {
      for (const e of object.hyPartner) {
        message.hyPartner.push(HyPartner.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyPartnerResponse): unknown {
    const obj: any = {};
    if (message.hyPartner) {
      obj.hyPartner = message.hyPartner.map((e) =>
        e ? HyPartner.toJSON(e) : undefined
      );
    } else {
      obj.hyPartner = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyPartnerResponse>
  ): QueryAllHyPartnerResponse {
    const message = {
      ...baseQueryAllHyPartnerResponse,
    } as QueryAllHyPartnerResponse;
    message.hyPartner = [];
    if (object.hyPartner !== undefined && object.hyPartner !== null) {
      for (const e of object.hyPartner) {
        message.hyPartner.push(HyPartner.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetHyImportRequest: object = { index: "" };

export const QueryGetHyImportRequest = {
  encode(
    message: QueryGetHyImportRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHyImportRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyImportRequest,
    } as QueryGetHyImportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyImportRequest {
    const message = {
      ...baseQueryGetHyImportRequest,
    } as QueryGetHyImportRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetHyImportRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyImportRequest>
  ): QueryGetHyImportRequest {
    const message = {
      ...baseQueryGetHyImportRequest,
    } as QueryGetHyImportRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetHyImportResponse: object = {};

export const QueryGetHyImportResponse = {
  encode(
    message: QueryGetHyImportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hyImport !== undefined) {
      HyImport.encode(message.hyImport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHyImportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyImportResponse,
    } as QueryGetHyImportResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyImport = HyImport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyImportResponse {
    const message = {
      ...baseQueryGetHyImportResponse,
    } as QueryGetHyImportResponse;
    if (object.hyImport !== undefined && object.hyImport !== null) {
      message.hyImport = HyImport.fromJSON(object.hyImport);
    } else {
      message.hyImport = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHyImportResponse): unknown {
    const obj: any = {};
    message.hyImport !== undefined &&
      (obj.hyImport = message.hyImport
        ? HyImport.toJSON(message.hyImport)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyImportResponse>
  ): QueryGetHyImportResponse {
    const message = {
      ...baseQueryGetHyImportResponse,
    } as QueryGetHyImportResponse;
    if (object.hyImport !== undefined && object.hyImport !== null) {
      message.hyImport = HyImport.fromPartial(object.hyImport);
    } else {
      message.hyImport = undefined;
    }
    return message;
  },
};

const baseQueryAllHyImportRequest: object = {};

export const QueryAllHyImportRequest = {
  encode(
    message: QueryAllHyImportRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHyImportRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyImportRequest,
    } as QueryAllHyImportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyImportRequest {
    const message = {
      ...baseQueryAllHyImportRequest,
    } as QueryAllHyImportRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyImportRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyImportRequest>
  ): QueryAllHyImportRequest {
    const message = {
      ...baseQueryAllHyImportRequest,
    } as QueryAllHyImportRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHyImportResponse: object = {};

export const QueryAllHyImportResponse = {
  encode(
    message: QueryAllHyImportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.hyImport) {
      HyImport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHyImportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyImportResponse,
    } as QueryAllHyImportResponse;
    message.hyImport = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyImport.push(HyImport.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyImportResponse {
    const message = {
      ...baseQueryAllHyImportResponse,
    } as QueryAllHyImportResponse;
    message.hyImport = [];
    if (object.hyImport !== undefined && object.hyImport !== null) {
      for (const e of object.hyImport) {
        message.hyImport.push(HyImport.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyImportResponse): unknown {
    const obj: any = {};
    if (message.hyImport) {
      obj.hyImport = message.hyImport.map((e) =>
        e ? HyImport.toJSON(e) : undefined
      );
    } else {
      obj.hyImport = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyImportResponse>
  ): QueryAllHyImportResponse {
    const message = {
      ...baseQueryAllHyImportResponse,
    } as QueryAllHyImportResponse;
    message.hyImport = [];
    if (object.hyImport !== undefined && object.hyImport !== null) {
      for (const e of object.hyImport) {
        message.hyImport.push(HyImport.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetHyExportRequest: object = { index: "" };

export const QueryGetHyExportRequest = {
  encode(
    message: QueryGetHyExportRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHyExportRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyExportRequest,
    } as QueryGetHyExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyExportRequest {
    const message = {
      ...baseQueryGetHyExportRequest,
    } as QueryGetHyExportRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetHyExportRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyExportRequest>
  ): QueryGetHyExportRequest {
    const message = {
      ...baseQueryGetHyExportRequest,
    } as QueryGetHyExportRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetHyExportResponse: object = {};

export const QueryGetHyExportResponse = {
  encode(
    message: QueryGetHyExportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hyExport !== undefined) {
      HyExport.encode(message.hyExport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHyExportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHyExportResponse,
    } as QueryGetHyExportResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyExport = HyExport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHyExportResponse {
    const message = {
      ...baseQueryGetHyExportResponse,
    } as QueryGetHyExportResponse;
    if (object.hyExport !== undefined && object.hyExport !== null) {
      message.hyExport = HyExport.fromJSON(object.hyExport);
    } else {
      message.hyExport = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHyExportResponse): unknown {
    const obj: any = {};
    message.hyExport !== undefined &&
      (obj.hyExport = message.hyExport
        ? HyExport.toJSON(message.hyExport)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHyExportResponse>
  ): QueryGetHyExportResponse {
    const message = {
      ...baseQueryGetHyExportResponse,
    } as QueryGetHyExportResponse;
    if (object.hyExport !== undefined && object.hyExport !== null) {
      message.hyExport = HyExport.fromPartial(object.hyExport);
    } else {
      message.hyExport = undefined;
    }
    return message;
  },
};

const baseQueryAllHyExportRequest: object = {};

export const QueryAllHyExportRequest = {
  encode(
    message: QueryAllHyExportRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHyExportRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyExportRequest,
    } as QueryAllHyExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyExportRequest {
    const message = {
      ...baseQueryAllHyExportRequest,
    } as QueryAllHyExportRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyExportRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyExportRequest>
  ): QueryAllHyExportRequest {
    const message = {
      ...baseQueryAllHyExportRequest,
    } as QueryAllHyExportRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHyExportResponse: object = {};

export const QueryAllHyExportResponse = {
  encode(
    message: QueryAllHyExportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.hyExport) {
      HyExport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHyExportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHyExportResponse,
    } as QueryAllHyExportResponse;
    message.hyExport = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hyExport.push(HyExport.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHyExportResponse {
    const message = {
      ...baseQueryAllHyExportResponse,
    } as QueryAllHyExportResponse;
    message.hyExport = [];
    if (object.hyExport !== undefined && object.hyExport !== null) {
      for (const e of object.hyExport) {
        message.hyExport.push(HyExport.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHyExportResponse): unknown {
    const obj: any = {};
    if (message.hyExport) {
      obj.hyExport = message.hyExport.map((e) =>
        e ? HyExport.toJSON(e) : undefined
      );
    } else {
      obj.hyExport = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHyExportResponse>
  ): QueryAllHyExportResponse {
    const message = {
      ...baseQueryAllHyExportResponse,
    } as QueryAllHyExportResponse;
    message.hyExport = [];
    if (object.hyExport !== undefined && object.hyExport !== null) {
      for (const e of object.hyExport) {
        message.hyExport.push(HyExport.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryHyRecentMarketsizeRequest: object = { name: "", group: "" };

export const QueryHyRecentMarketsizeRequest = {
  encode(
    message: QueryHyRecentMarketsizeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.group !== "") {
      writer.uint32(18).string(message.group);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentMarketsizeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentMarketsizeRequest,
    } as QueryHyRecentMarketsizeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.group = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentMarketsizeRequest {
    const message = {
      ...baseQueryHyRecentMarketsizeRequest,
    } as QueryHyRecentMarketsizeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentMarketsizeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentMarketsizeRequest>
  ): QueryHyRecentMarketsizeRequest {
    const message = {
      ...baseQueryHyRecentMarketsizeRequest,
    } as QueryHyRecentMarketsizeRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    return message;
  },
};

const baseQueryHyRecentMarketsizeResponse: object = { volume: "" };

export const QueryHyRecentMarketsizeResponse = {
  encode(
    message: QueryHyRecentMarketsizeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentMarketsizeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentMarketsizeResponse,
    } as QueryHyRecentMarketsizeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentMarketsizeResponse {
    const message = {
      ...baseQueryHyRecentMarketsizeResponse,
    } as QueryHyRecentMarketsizeResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentMarketsizeResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentMarketsizeResponse>
  ): QueryHyRecentMarketsizeResponse {
    const message = {
      ...baseQueryHyRecentMarketsizeResponse,
    } as QueryHyRecentMarketsizeResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

const baseQueryHyRecentPartnerRequest: object = { buyer: "", seller: "" };

export const QueryHyRecentPartnerRequest = {
  encode(
    message: QueryHyRecentPartnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentPartnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentPartnerRequest,
    } as QueryHyRecentPartnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentPartnerRequest {
    const message = {
      ...baseQueryHyRecentPartnerRequest,
    } as QueryHyRecentPartnerRequest;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentPartnerRequest): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentPartnerRequest>
  ): QueryHyRecentPartnerRequest {
    const message = {
      ...baseQueryHyRecentPartnerRequest,
    } as QueryHyRecentPartnerRequest;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    return message;
  },
};

const baseQueryHyRecentPartnerResponse: object = { volume: "" };

export const QueryHyRecentPartnerResponse = {
  encode(
    message: QueryHyRecentPartnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentPartnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentPartnerResponse,
    } as QueryHyRecentPartnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentPartnerResponse {
    const message = {
      ...baseQueryHyRecentPartnerResponse,
    } as QueryHyRecentPartnerResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentPartnerResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentPartnerResponse>
  ): QueryHyRecentPartnerResponse {
    const message = {
      ...baseQueryHyRecentPartnerResponse,
    } as QueryHyRecentPartnerResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

const baseQueryHyRecentImportRequest: object = { name: "", group: "" };

export const QueryHyRecentImportRequest = {
  encode(
    message: QueryHyRecentImportRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.group !== "") {
      writer.uint32(18).string(message.group);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentImportRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentImportRequest,
    } as QueryHyRecentImportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.group = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentImportRequest {
    const message = {
      ...baseQueryHyRecentImportRequest,
    } as QueryHyRecentImportRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentImportRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentImportRequest>
  ): QueryHyRecentImportRequest {
    const message = {
      ...baseQueryHyRecentImportRequest,
    } as QueryHyRecentImportRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    return message;
  },
};

const baseQueryHyRecentImportResponse: object = { volume: "" };

export const QueryHyRecentImportResponse = {
  encode(
    message: QueryHyRecentImportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentImportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentImportResponse,
    } as QueryHyRecentImportResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentImportResponse {
    const message = {
      ...baseQueryHyRecentImportResponse,
    } as QueryHyRecentImportResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentImportResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentImportResponse>
  ): QueryHyRecentImportResponse {
    const message = {
      ...baseQueryHyRecentImportResponse,
    } as QueryHyRecentImportResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

const baseQueryHyRecentExportRequest: object = { name: "", group: "" };

export const QueryHyRecentExportRequest = {
  encode(
    message: QueryHyRecentExportRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.group !== "") {
      writer.uint32(18).string(message.group);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentExportRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentExportRequest,
    } as QueryHyRecentExportRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.group = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentExportRequest {
    const message = {
      ...baseQueryHyRecentExportRequest,
    } as QueryHyRecentExportRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentExportRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentExportRequest>
  ): QueryHyRecentExportRequest {
    const message = {
      ...baseQueryHyRecentExportRequest,
    } as QueryHyRecentExportRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    return message;
  },
};

const baseQueryHyRecentExportResponse: object = { volume: "" };

export const QueryHyRecentExportResponse = {
  encode(
    message: QueryHyRecentExportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyRecentExportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyRecentExportResponse,
    } as QueryHyRecentExportResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyRecentExportResponse {
    const message = {
      ...baseQueryHyRecentExportResponse,
    } as QueryHyRecentExportResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: QueryHyRecentExportResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyRecentExportResponse>
  ): QueryHyRecentExportResponse {
    const message = {
      ...baseQueryHyRecentExportResponse,
    } as QueryHyRecentExportResponse;
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a HyMarketsize by index. */
  HyMarketsize(
    request: QueryGetHyMarketsizeRequest
  ): Promise<QueryGetHyMarketsizeResponse>;
  /** Queries a list of HyMarketsize items. */
  HyMarketsizeAll(
    request: QueryAllHyMarketsizeRequest
  ): Promise<QueryAllHyMarketsizeResponse>;
  /** Queries a HyPartner by index. */
  HyPartner(
    request: QueryGetHyPartnerRequest
  ): Promise<QueryGetHyPartnerResponse>;
  /** Queries a list of HyPartner items. */
  HyPartnerAll(
    request: QueryAllHyPartnerRequest
  ): Promise<QueryAllHyPartnerResponse>;
  /** Queries a HyImport by index. */
  HyImport(request: QueryGetHyImportRequest): Promise<QueryGetHyImportResponse>;
  /** Queries a list of HyImport items. */
  HyImportAll(
    request: QueryAllHyImportRequest
  ): Promise<QueryAllHyImportResponse>;
  /** Queries a HyExport by index. */
  HyExport(request: QueryGetHyExportRequest): Promise<QueryGetHyExportResponse>;
  /** Queries a list of HyExport items. */
  HyExportAll(
    request: QueryAllHyExportRequest
  ): Promise<QueryAllHyExportResponse>;
  /** Queries a list of HyRecentMarketsize items. */
  HyRecentMarketsize(
    request: QueryHyRecentMarketsizeRequest
  ): Promise<QueryHyRecentMarketsizeResponse>;
  /** Queries a list of HyRecentPartner items. */
  HyRecentPartner(
    request: QueryHyRecentPartnerRequest
  ): Promise<QueryHyRecentPartnerResponse>;
  /** Queries a list of HyRecentImport items. */
  HyRecentImport(
    request: QueryHyRecentImportRequest
  ): Promise<QueryHyRecentImportResponse>;
  /** Queries a list of HyRecentExport items. */
  HyRecentExport(
    request: QueryHyRecentExportRequest
  ): Promise<QueryHyRecentExportResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  HyMarketsize(
    request: QueryGetHyMarketsizeRequest
  ): Promise<QueryGetHyMarketsizeResponse> {
    const data = QueryGetHyMarketsizeRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyMarketsize", data);
    return promise.then((data) =>
      QueryGetHyMarketsizeResponse.decode(new Reader(data))
    );
  }

  HyMarketsizeAll(
    request: QueryAllHyMarketsizeRequest
  ): Promise<QueryAllHyMarketsizeResponse> {
    const data = QueryAllHyMarketsizeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyMarketsizeAll",
      data
    );
    return promise.then((data) =>
      QueryAllHyMarketsizeResponse.decode(new Reader(data))
    );
  }

  HyPartner(
    request: QueryGetHyPartnerRequest
  ): Promise<QueryGetHyPartnerResponse> {
    const data = QueryGetHyPartnerRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyPartner", data);
    return promise.then((data) =>
      QueryGetHyPartnerResponse.decode(new Reader(data))
    );
  }

  HyPartnerAll(
    request: QueryAllHyPartnerRequest
  ): Promise<QueryAllHyPartnerResponse> {
    const data = QueryAllHyPartnerRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyPartnerAll", data);
    return promise.then((data) =>
      QueryAllHyPartnerResponse.decode(new Reader(data))
    );
  }

  HyImport(
    request: QueryGetHyImportRequest
  ): Promise<QueryGetHyImportResponse> {
    const data = QueryGetHyImportRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyImport", data);
    return promise.then((data) =>
      QueryGetHyImportResponse.decode(new Reader(data))
    );
  }

  HyImportAll(
    request: QueryAllHyImportRequest
  ): Promise<QueryAllHyImportResponse> {
    const data = QueryAllHyImportRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyImportAll", data);
    return promise.then((data) =>
      QueryAllHyImportResponse.decode(new Reader(data))
    );
  }

  HyExport(
    request: QueryGetHyExportRequest
  ): Promise<QueryGetHyExportResponse> {
    const data = QueryGetHyExportRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyExport", data);
    return promise.then((data) =>
      QueryGetHyExportResponse.decode(new Reader(data))
    );
  }

  HyExportAll(
    request: QueryAllHyExportRequest
  ): Promise<QueryAllHyExportResponse> {
    const data = QueryAllHyExportRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyExportAll", data);
    return promise.then((data) =>
      QueryAllHyExportResponse.decode(new Reader(data))
    );
  }

  HyRecentMarketsize(
    request: QueryHyRecentMarketsizeRequest
  ): Promise<QueryHyRecentMarketsizeResponse> {
    const data = QueryHyRecentMarketsizeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyRecentMarketsize",
      data
    );
    return promise.then((data) =>
      QueryHyRecentMarketsizeResponse.decode(new Reader(data))
    );
  }

  HyRecentPartner(
    request: QueryHyRecentPartnerRequest
  ): Promise<QueryHyRecentPartnerResponse> {
    const data = QueryHyRecentPartnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyRecentPartner",
      data
    );
    return promise.then((data) =>
      QueryHyRecentPartnerResponse.decode(new Reader(data))
    );
  }

  HyRecentImport(
    request: QueryHyRecentImportRequest
  ): Promise<QueryHyRecentImportResponse> {
    const data = QueryHyRecentImportRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyRecentImport",
      data
    );
    return promise.then((data) =>
      QueryHyRecentImportResponse.decode(new Reader(data))
    );
  }

  HyRecentExport(
    request: QueryHyRecentExportRequest
  ): Promise<QueryHyRecentExportResponse> {
    const data = QueryHyRecentExportRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyRecentExport",
      data
    );
    return promise.then((data) =>
      QueryHyRecentExportResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
