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
import { HyAllNamesOf } from "../khidi/hy_all_names_of";

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

export interface QueryHyDomesticMarketShareRequest {
  name: string;
  group: string;
}

export interface QueryHyDomesticMarketShareResponse {
  value: string;
}

export interface QueryHyCompetitionRequest {
  name: string;
  group: string;
}

export interface QueryHyCompetitionResponse {
  value: string;
}

export interface QueryHyTradeDependencyRequest {
  name: string;
  group: string;
}

export interface QueryHyTradeDependencyResponse {
  value: string;
}

export interface QueryHyQualityRequest {
  name: string;
  group: string;
}

export interface QueryHyQualityResponse {
  value: string;
}

export interface QueryHyProtectionismRequest {
  name: string;
  group: string;
}

export interface QueryHyProtectionismResponse {
  value: string;
}

export interface QueryHySuccessRequest {
  name: string;
  group: string;
}

export interface QueryHySuccessResponse {
  value: string;
}

export interface QueryHyAllValuesOfRequest {
  name: string;
  group: string;
}

export interface QueryHyAllValuesOfResponse {
  recentMarketsize: string;
  recentImport: string;
  recentExport: string;
  domesticMarketShare: string;
  competition: string;
  tradeDependency: string;
  quality: string;
  protectionism: string;
  success: string;
}

export interface QueryHyAllNamesOfRequest {
  group: string;
}

export interface QueryHyAllNamesOfResponse {
  HyAllNamesOf: HyAllNamesOf[];
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

const baseQueryHyDomesticMarketShareRequest: object = { name: "", group: "" };

export const QueryHyDomesticMarketShareRequest = {
  encode(
    message: QueryHyDomesticMarketShareRequest,
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
  ): QueryHyDomesticMarketShareRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyDomesticMarketShareRequest,
    } as QueryHyDomesticMarketShareRequest;
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

  fromJSON(object: any): QueryHyDomesticMarketShareRequest {
    const message = {
      ...baseQueryHyDomesticMarketShareRequest,
    } as QueryHyDomesticMarketShareRequest;
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

  toJSON(message: QueryHyDomesticMarketShareRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyDomesticMarketShareRequest>
  ): QueryHyDomesticMarketShareRequest {
    const message = {
      ...baseQueryHyDomesticMarketShareRequest,
    } as QueryHyDomesticMarketShareRequest;
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

const baseQueryHyDomesticMarketShareResponse: object = { value: "" };

export const QueryHyDomesticMarketShareResponse = {
  encode(
    message: QueryHyDomesticMarketShareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyDomesticMarketShareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyDomesticMarketShareResponse,
    } as QueryHyDomesticMarketShareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyDomesticMarketShareResponse {
    const message = {
      ...baseQueryHyDomesticMarketShareResponse,
    } as QueryHyDomesticMarketShareResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryHyDomesticMarketShareResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyDomesticMarketShareResponse>
  ): QueryHyDomesticMarketShareResponse {
    const message = {
      ...baseQueryHyDomesticMarketShareResponse,
    } as QueryHyDomesticMarketShareResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryHyCompetitionRequest: object = { name: "", group: "" };

export const QueryHyCompetitionRequest = {
  encode(
    message: QueryHyCompetitionRequest,
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
  ): QueryHyCompetitionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyCompetitionRequest,
    } as QueryHyCompetitionRequest;
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

  fromJSON(object: any): QueryHyCompetitionRequest {
    const message = {
      ...baseQueryHyCompetitionRequest,
    } as QueryHyCompetitionRequest;
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

  toJSON(message: QueryHyCompetitionRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyCompetitionRequest>
  ): QueryHyCompetitionRequest {
    const message = {
      ...baseQueryHyCompetitionRequest,
    } as QueryHyCompetitionRequest;
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

const baseQueryHyCompetitionResponse: object = { value: "" };

export const QueryHyCompetitionResponse = {
  encode(
    message: QueryHyCompetitionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyCompetitionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyCompetitionResponse,
    } as QueryHyCompetitionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyCompetitionResponse {
    const message = {
      ...baseQueryHyCompetitionResponse,
    } as QueryHyCompetitionResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryHyCompetitionResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyCompetitionResponse>
  ): QueryHyCompetitionResponse {
    const message = {
      ...baseQueryHyCompetitionResponse,
    } as QueryHyCompetitionResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryHyTradeDependencyRequest: object = { name: "", group: "" };

export const QueryHyTradeDependencyRequest = {
  encode(
    message: QueryHyTradeDependencyRequest,
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
  ): QueryHyTradeDependencyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyTradeDependencyRequest,
    } as QueryHyTradeDependencyRequest;
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

  fromJSON(object: any): QueryHyTradeDependencyRequest {
    const message = {
      ...baseQueryHyTradeDependencyRequest,
    } as QueryHyTradeDependencyRequest;
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

  toJSON(message: QueryHyTradeDependencyRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyTradeDependencyRequest>
  ): QueryHyTradeDependencyRequest {
    const message = {
      ...baseQueryHyTradeDependencyRequest,
    } as QueryHyTradeDependencyRequest;
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

const baseQueryHyTradeDependencyResponse: object = { value: "" };

export const QueryHyTradeDependencyResponse = {
  encode(
    message: QueryHyTradeDependencyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyTradeDependencyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyTradeDependencyResponse,
    } as QueryHyTradeDependencyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyTradeDependencyResponse {
    const message = {
      ...baseQueryHyTradeDependencyResponse,
    } as QueryHyTradeDependencyResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryHyTradeDependencyResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyTradeDependencyResponse>
  ): QueryHyTradeDependencyResponse {
    const message = {
      ...baseQueryHyTradeDependencyResponse,
    } as QueryHyTradeDependencyResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryHyQualityRequest: object = { name: "", group: "" };

export const QueryHyQualityRequest = {
  encode(
    message: QueryHyQualityRequest,
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

  decode(input: Reader | Uint8Array, length?: number): QueryHyQualityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHyQualityRequest } as QueryHyQualityRequest;
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

  fromJSON(object: any): QueryHyQualityRequest {
    const message = { ...baseQueryHyQualityRequest } as QueryHyQualityRequest;
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

  toJSON(message: QueryHyQualityRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyQualityRequest>
  ): QueryHyQualityRequest {
    const message = { ...baseQueryHyQualityRequest } as QueryHyQualityRequest;
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

const baseQueryHyQualityResponse: object = { value: "" };

export const QueryHyQualityResponse = {
  encode(
    message: QueryHyQualityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryHyQualityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHyQualityResponse } as QueryHyQualityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyQualityResponse {
    const message = { ...baseQueryHyQualityResponse } as QueryHyQualityResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryHyQualityResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyQualityResponse>
  ): QueryHyQualityResponse {
    const message = { ...baseQueryHyQualityResponse } as QueryHyQualityResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryHyProtectionismRequest: object = { name: "", group: "" };

export const QueryHyProtectionismRequest = {
  encode(
    message: QueryHyProtectionismRequest,
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
  ): QueryHyProtectionismRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyProtectionismRequest,
    } as QueryHyProtectionismRequest;
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

  fromJSON(object: any): QueryHyProtectionismRequest {
    const message = {
      ...baseQueryHyProtectionismRequest,
    } as QueryHyProtectionismRequest;
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

  toJSON(message: QueryHyProtectionismRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyProtectionismRequest>
  ): QueryHyProtectionismRequest {
    const message = {
      ...baseQueryHyProtectionismRequest,
    } as QueryHyProtectionismRequest;
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

const baseQueryHyProtectionismResponse: object = { value: "" };

export const QueryHyProtectionismResponse = {
  encode(
    message: QueryHyProtectionismResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyProtectionismResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyProtectionismResponse,
    } as QueryHyProtectionismResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyProtectionismResponse {
    const message = {
      ...baseQueryHyProtectionismResponse,
    } as QueryHyProtectionismResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryHyProtectionismResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyProtectionismResponse>
  ): QueryHyProtectionismResponse {
    const message = {
      ...baseQueryHyProtectionismResponse,
    } as QueryHyProtectionismResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryHySuccessRequest: object = { name: "", group: "" };

export const QueryHySuccessRequest = {
  encode(
    message: QueryHySuccessRequest,
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

  decode(input: Reader | Uint8Array, length?: number): QueryHySuccessRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHySuccessRequest } as QueryHySuccessRequest;
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

  fromJSON(object: any): QueryHySuccessRequest {
    const message = { ...baseQueryHySuccessRequest } as QueryHySuccessRequest;
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

  toJSON(message: QueryHySuccessRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHySuccessRequest>
  ): QueryHySuccessRequest {
    const message = { ...baseQueryHySuccessRequest } as QueryHySuccessRequest;
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

const baseQueryHySuccessResponse: object = { value: "" };

export const QueryHySuccessResponse = {
  encode(
    message: QueryHySuccessResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryHySuccessResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHySuccessResponse } as QueryHySuccessResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHySuccessResponse {
    const message = { ...baseQueryHySuccessResponse } as QueryHySuccessResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryHySuccessResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHySuccessResponse>
  ): QueryHySuccessResponse {
    const message = { ...baseQueryHySuccessResponse } as QueryHySuccessResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryHyAllValuesOfRequest: object = { name: "", group: "" };

export const QueryHyAllValuesOfRequest = {
  encode(
    message: QueryHyAllValuesOfRequest,
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
  ): QueryHyAllValuesOfRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyAllValuesOfRequest,
    } as QueryHyAllValuesOfRequest;
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

  fromJSON(object: any): QueryHyAllValuesOfRequest {
    const message = {
      ...baseQueryHyAllValuesOfRequest,
    } as QueryHyAllValuesOfRequest;
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

  toJSON(message: QueryHyAllValuesOfRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyAllValuesOfRequest>
  ): QueryHyAllValuesOfRequest {
    const message = {
      ...baseQueryHyAllValuesOfRequest,
    } as QueryHyAllValuesOfRequest;
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

const baseQueryHyAllValuesOfResponse: object = {
  recentMarketsize: "",
  recentImport: "",
  recentExport: "",
  domesticMarketShare: "",
  competition: "",
  tradeDependency: "",
  quality: "",
  protectionism: "",
  success: "",
};

export const QueryHyAllValuesOfResponse = {
  encode(
    message: QueryHyAllValuesOfResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.recentMarketsize !== "") {
      writer.uint32(10).string(message.recentMarketsize);
    }
    if (message.recentImport !== "") {
      writer.uint32(18).string(message.recentImport);
    }
    if (message.recentExport !== "") {
      writer.uint32(26).string(message.recentExport);
    }
    if (message.domesticMarketShare !== "") {
      writer.uint32(34).string(message.domesticMarketShare);
    }
    if (message.competition !== "") {
      writer.uint32(42).string(message.competition);
    }
    if (message.tradeDependency !== "") {
      writer.uint32(50).string(message.tradeDependency);
    }
    if (message.quality !== "") {
      writer.uint32(58).string(message.quality);
    }
    if (message.protectionism !== "") {
      writer.uint32(66).string(message.protectionism);
    }
    if (message.success !== "") {
      writer.uint32(74).string(message.success);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyAllValuesOfResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyAllValuesOfResponse,
    } as QueryHyAllValuesOfResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recentMarketsize = reader.string();
          break;
        case 2:
          message.recentImport = reader.string();
          break;
        case 3:
          message.recentExport = reader.string();
          break;
        case 4:
          message.domesticMarketShare = reader.string();
          break;
        case 5:
          message.competition = reader.string();
          break;
        case 6:
          message.tradeDependency = reader.string();
          break;
        case 7:
          message.quality = reader.string();
          break;
        case 8:
          message.protectionism = reader.string();
          break;
        case 9:
          message.success = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyAllValuesOfResponse {
    const message = {
      ...baseQueryHyAllValuesOfResponse,
    } as QueryHyAllValuesOfResponse;
    if (
      object.recentMarketsize !== undefined &&
      object.recentMarketsize !== null
    ) {
      message.recentMarketsize = String(object.recentMarketsize);
    } else {
      message.recentMarketsize = "";
    }
    if (object.recentImport !== undefined && object.recentImport !== null) {
      message.recentImport = String(object.recentImport);
    } else {
      message.recentImport = "";
    }
    if (object.recentExport !== undefined && object.recentExport !== null) {
      message.recentExport = String(object.recentExport);
    } else {
      message.recentExport = "";
    }
    if (
      object.domesticMarketShare !== undefined &&
      object.domesticMarketShare !== null
    ) {
      message.domesticMarketShare = String(object.domesticMarketShare);
    } else {
      message.domesticMarketShare = "";
    }
    if (object.competition !== undefined && object.competition !== null) {
      message.competition = String(object.competition);
    } else {
      message.competition = "";
    }
    if (
      object.tradeDependency !== undefined &&
      object.tradeDependency !== null
    ) {
      message.tradeDependency = String(object.tradeDependency);
    } else {
      message.tradeDependency = "";
    }
    if (object.quality !== undefined && object.quality !== null) {
      message.quality = String(object.quality);
    } else {
      message.quality = "";
    }
    if (object.protectionism !== undefined && object.protectionism !== null) {
      message.protectionism = String(object.protectionism);
    } else {
      message.protectionism = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = String(object.success);
    } else {
      message.success = "";
    }
    return message;
  },

  toJSON(message: QueryHyAllValuesOfResponse): unknown {
    const obj: any = {};
    message.recentMarketsize !== undefined &&
      (obj.recentMarketsize = message.recentMarketsize);
    message.recentImport !== undefined &&
      (obj.recentImport = message.recentImport);
    message.recentExport !== undefined &&
      (obj.recentExport = message.recentExport);
    message.domesticMarketShare !== undefined &&
      (obj.domesticMarketShare = message.domesticMarketShare);
    message.competition !== undefined &&
      (obj.competition = message.competition);
    message.tradeDependency !== undefined &&
      (obj.tradeDependency = message.tradeDependency);
    message.quality !== undefined && (obj.quality = message.quality);
    message.protectionism !== undefined &&
      (obj.protectionism = message.protectionism);
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyAllValuesOfResponse>
  ): QueryHyAllValuesOfResponse {
    const message = {
      ...baseQueryHyAllValuesOfResponse,
    } as QueryHyAllValuesOfResponse;
    if (
      object.recentMarketsize !== undefined &&
      object.recentMarketsize !== null
    ) {
      message.recentMarketsize = object.recentMarketsize;
    } else {
      message.recentMarketsize = "";
    }
    if (object.recentImport !== undefined && object.recentImport !== null) {
      message.recentImport = object.recentImport;
    } else {
      message.recentImport = "";
    }
    if (object.recentExport !== undefined && object.recentExport !== null) {
      message.recentExport = object.recentExport;
    } else {
      message.recentExport = "";
    }
    if (
      object.domesticMarketShare !== undefined &&
      object.domesticMarketShare !== null
    ) {
      message.domesticMarketShare = object.domesticMarketShare;
    } else {
      message.domesticMarketShare = "";
    }
    if (object.competition !== undefined && object.competition !== null) {
      message.competition = object.competition;
    } else {
      message.competition = "";
    }
    if (
      object.tradeDependency !== undefined &&
      object.tradeDependency !== null
    ) {
      message.tradeDependency = object.tradeDependency;
    } else {
      message.tradeDependency = "";
    }
    if (object.quality !== undefined && object.quality !== null) {
      message.quality = object.quality;
    } else {
      message.quality = "";
    }
    if (object.protectionism !== undefined && object.protectionism !== null) {
      message.protectionism = object.protectionism;
    } else {
      message.protectionism = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = "";
    }
    return message;
  },
};

const baseQueryHyAllNamesOfRequest: object = { group: "" };

export const QueryHyAllNamesOfRequest = {
  encode(
    message: QueryHyAllNamesOfRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.group !== "") {
      writer.uint32(10).string(message.group);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyAllNamesOfRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyAllNamesOfRequest,
    } as QueryHyAllNamesOfRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyAllNamesOfRequest {
    const message = {
      ...baseQueryHyAllNamesOfRequest,
    } as QueryHyAllNamesOfRequest;
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    return message;
  },

  toJSON(message: QueryHyAllNamesOfRequest): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyAllNamesOfRequest>
  ): QueryHyAllNamesOfRequest {
    const message = {
      ...baseQueryHyAllNamesOfRequest,
    } as QueryHyAllNamesOfRequest;
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    return message;
  },
};

const baseQueryHyAllNamesOfResponse: object = {};

export const QueryHyAllNamesOfResponse = {
  encode(
    message: QueryHyAllNamesOfResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.HyAllNamesOf) {
      HyAllNamesOf.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryHyAllNamesOfResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHyAllNamesOfResponse,
    } as QueryHyAllNamesOfResponse;
    message.HyAllNamesOf = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.HyAllNamesOf.push(
            HyAllNamesOf.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHyAllNamesOfResponse {
    const message = {
      ...baseQueryHyAllNamesOfResponse,
    } as QueryHyAllNamesOfResponse;
    message.HyAllNamesOf = [];
    if (object.HyAllNamesOf !== undefined && object.HyAllNamesOf !== null) {
      for (const e of object.HyAllNamesOf) {
        message.HyAllNamesOf.push(HyAllNamesOf.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryHyAllNamesOfResponse): unknown {
    const obj: any = {};
    if (message.HyAllNamesOf) {
      obj.HyAllNamesOf = message.HyAllNamesOf.map((e) =>
        e ? HyAllNamesOf.toJSON(e) : undefined
      );
    } else {
      obj.HyAllNamesOf = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHyAllNamesOfResponse>
  ): QueryHyAllNamesOfResponse {
    const message = {
      ...baseQueryHyAllNamesOfResponse,
    } as QueryHyAllNamesOfResponse;
    message.HyAllNamesOf = [];
    if (object.HyAllNamesOf !== undefined && object.HyAllNamesOf !== null) {
      for (const e of object.HyAllNamesOf) {
        message.HyAllNamesOf.push(HyAllNamesOf.fromPartial(e));
      }
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
  /** Queries a list of HyDomesticMarketShare items. */
  HyDomesticMarketShare(
    request: QueryHyDomesticMarketShareRequest
  ): Promise<QueryHyDomesticMarketShareResponse>;
  /** Queries a list of HyCompetition items. */
  HyCompetition(
    request: QueryHyCompetitionRequest
  ): Promise<QueryHyCompetitionResponse>;
  /** Queries a list of HyTradeDependency items. */
  HyTradeDependency(
    request: QueryHyTradeDependencyRequest
  ): Promise<QueryHyTradeDependencyResponse>;
  /** Queries a list of HyQuality items. */
  HyQuality(request: QueryHyQualityRequest): Promise<QueryHyQualityResponse>;
  /** Queries a list of HyProtectionism items. */
  HyProtectionism(
    request: QueryHyProtectionismRequest
  ): Promise<QueryHyProtectionismResponse>;
  /** Queries a list of HySuccess items. */
  HySuccess(request: QueryHySuccessRequest): Promise<QueryHySuccessResponse>;
  /** Queries a list of HyAllValuesOf items. */
  HyAllValuesOf(
    request: QueryHyAllValuesOfRequest
  ): Promise<QueryHyAllValuesOfResponse>;
  /** Queries a list of HyAllNamesOf items. */
  HyAllNamesOf(
    request: QueryHyAllNamesOfRequest
  ): Promise<QueryHyAllNamesOfResponse>;
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

  HyDomesticMarketShare(
    request: QueryHyDomesticMarketShareRequest
  ): Promise<QueryHyDomesticMarketShareResponse> {
    const data = QueryHyDomesticMarketShareRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyDomesticMarketShare",
      data
    );
    return promise.then((data) =>
      QueryHyDomesticMarketShareResponse.decode(new Reader(data))
    );
  }

  HyCompetition(
    request: QueryHyCompetitionRequest
  ): Promise<QueryHyCompetitionResponse> {
    const data = QueryHyCompetitionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyCompetition",
      data
    );
    return promise.then((data) =>
      QueryHyCompetitionResponse.decode(new Reader(data))
    );
  }

  HyTradeDependency(
    request: QueryHyTradeDependencyRequest
  ): Promise<QueryHyTradeDependencyResponse> {
    const data = QueryHyTradeDependencyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyTradeDependency",
      data
    );
    return promise.then((data) =>
      QueryHyTradeDependencyResponse.decode(new Reader(data))
    );
  }

  HyQuality(request: QueryHyQualityRequest): Promise<QueryHyQualityResponse> {
    const data = QueryHyQualityRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyQuality", data);
    return promise.then((data) =>
      QueryHyQualityResponse.decode(new Reader(data))
    );
  }

  HyProtectionism(
    request: QueryHyProtectionismRequest
  ): Promise<QueryHyProtectionismResponse> {
    const data = QueryHyProtectionismRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyProtectionism",
      data
    );
    return promise.then((data) =>
      QueryHyProtectionismResponse.decode(new Reader(data))
    );
  }

  HySuccess(request: QueryHySuccessRequest): Promise<QueryHySuccessResponse> {
    const data = QueryHySuccessRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HySuccess", data);
    return promise.then((data) =>
      QueryHySuccessResponse.decode(new Reader(data))
    );
  }

  HyAllValuesOf(
    request: QueryHyAllValuesOfRequest
  ): Promise<QueryHyAllValuesOfResponse> {
    const data = QueryHyAllValuesOfRequest.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Query",
      "HyAllValuesOf",
      data
    );
    return promise.then((data) =>
      QueryHyAllValuesOfResponse.decode(new Reader(data))
    );
  }

  HyAllNamesOf(
    request: QueryHyAllNamesOfRequest
  ): Promise<QueryHyAllNamesOfResponse> {
    const data = QueryHyAllNamesOfRequest.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Query", "HyAllNamesOf", data);
    return promise.then((data) =>
      QueryHyAllNamesOfResponse.decode(new Reader(data))
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
