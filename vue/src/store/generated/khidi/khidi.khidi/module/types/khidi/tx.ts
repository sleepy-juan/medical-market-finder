/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "khidi.khidi";

export interface MsgHyAddMarketsize {
  creator: string;
  name: string;
  year: string;
  group: string;
  volume: string;
}

export interface MsgHyAddMarketsizeResponse {}

export interface MsgHyAddPartner {
  creator: string;
  buyer: string;
  seller: string;
  year: string;
  proportion: string;
}

export interface MsgHyAddPartnerResponse {}

export interface MsgHyAddImport {
  creator: string;
  name: string;
  year: string;
  group: string;
  volume: string;
}

export interface MsgHyAddImportResponse {}

export interface MsgHyAddExport {
  creator: string;
  name: string;
  year: string;
  group: string;
  volume: string;
}

export interface MsgHyAddExportResponse {}

const baseMsgHyAddMarketsize: object = {
  creator: "",
  name: "",
  year: "",
  group: "",
  volume: "",
};

export const MsgHyAddMarketsize = {
  encode(
    message: MsgHyAddMarketsize,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.year !== "") {
      writer.uint32(26).string(message.year);
    }
    if (message.group !== "") {
      writer.uint32(34).string(message.group);
    }
    if (message.volume !== "") {
      writer.uint32(42).string(message.volume);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddMarketsize {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHyAddMarketsize } as MsgHyAddMarketsize;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.year = reader.string();
          break;
        case 4:
          message.group = reader.string();
          break;
        case 5:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHyAddMarketsize {
    const message = { ...baseMsgHyAddMarketsize } as MsgHyAddMarketsize;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = String(object.year);
    } else {
      message.year = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: MsgHyAddMarketsize): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.year !== undefined && (obj.year = message.year);
    message.group !== undefined && (obj.group = message.group);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgHyAddMarketsize>): MsgHyAddMarketsize {
    const message = { ...baseMsgHyAddMarketsize } as MsgHyAddMarketsize;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

const baseMsgHyAddMarketsizeResponse: object = {};

export const MsgHyAddMarketsizeResponse = {
  encode(
    _: MsgHyAddMarketsizeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgHyAddMarketsizeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgHyAddMarketsizeResponse,
    } as MsgHyAddMarketsizeResponse;
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

  fromJSON(_: any): MsgHyAddMarketsizeResponse {
    const message = {
      ...baseMsgHyAddMarketsizeResponse,
    } as MsgHyAddMarketsizeResponse;
    return message;
  },

  toJSON(_: MsgHyAddMarketsizeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgHyAddMarketsizeResponse>
  ): MsgHyAddMarketsizeResponse {
    const message = {
      ...baseMsgHyAddMarketsizeResponse,
    } as MsgHyAddMarketsizeResponse;
    return message;
  },
};

const baseMsgHyAddPartner: object = {
  creator: "",
  buyer: "",
  seller: "",
  year: "",
  proportion: "",
};

export const MsgHyAddPartner = {
  encode(message: MsgHyAddPartner, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.buyer !== "") {
      writer.uint32(18).string(message.buyer);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.year !== "") {
      writer.uint32(34).string(message.year);
    }
    if (message.proportion !== "") {
      writer.uint32(42).string(message.proportion);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddPartner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHyAddPartner } as MsgHyAddPartner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.buyer = reader.string();
          break;
        case 3:
          message.seller = reader.string();
          break;
        case 4:
          message.year = reader.string();
          break;
        case 5:
          message.proportion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHyAddPartner {
    const message = { ...baseMsgHyAddPartner } as MsgHyAddPartner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.year !== undefined && object.year !== null) {
      message.year = String(object.year);
    } else {
      message.year = "";
    }
    if (object.proportion !== undefined && object.proportion !== null) {
      message.proportion = String(object.proportion);
    } else {
      message.proportion = "";
    }
    return message;
  },

  toJSON(message: MsgHyAddPartner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.seller !== undefined && (obj.seller = message.seller);
    message.year !== undefined && (obj.year = message.year);
    message.proportion !== undefined && (obj.proportion = message.proportion);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgHyAddPartner>): MsgHyAddPartner {
    const message = { ...baseMsgHyAddPartner } as MsgHyAddPartner;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = "";
    }
    if (object.proportion !== undefined && object.proportion !== null) {
      message.proportion = object.proportion;
    } else {
      message.proportion = "";
    }
    return message;
  },
};

const baseMsgHyAddPartnerResponse: object = {};

export const MsgHyAddPartnerResponse = {
  encode(_: MsgHyAddPartnerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddPartnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgHyAddPartnerResponse,
    } as MsgHyAddPartnerResponse;
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

  fromJSON(_: any): MsgHyAddPartnerResponse {
    const message = {
      ...baseMsgHyAddPartnerResponse,
    } as MsgHyAddPartnerResponse;
    return message;
  },

  toJSON(_: MsgHyAddPartnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgHyAddPartnerResponse>
  ): MsgHyAddPartnerResponse {
    const message = {
      ...baseMsgHyAddPartnerResponse,
    } as MsgHyAddPartnerResponse;
    return message;
  },
};

const baseMsgHyAddImport: object = {
  creator: "",
  name: "",
  year: "",
  group: "",
  volume: "",
};

export const MsgHyAddImport = {
  encode(message: MsgHyAddImport, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.year !== "") {
      writer.uint32(26).string(message.year);
    }
    if (message.group !== "") {
      writer.uint32(34).string(message.group);
    }
    if (message.volume !== "") {
      writer.uint32(42).string(message.volume);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddImport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHyAddImport } as MsgHyAddImport;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.year = reader.string();
          break;
        case 4:
          message.group = reader.string();
          break;
        case 5:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHyAddImport {
    const message = { ...baseMsgHyAddImport } as MsgHyAddImport;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = String(object.year);
    } else {
      message.year = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: MsgHyAddImport): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.year !== undefined && (obj.year = message.year);
    message.group !== undefined && (obj.group = message.group);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgHyAddImport>): MsgHyAddImport {
    const message = { ...baseMsgHyAddImport } as MsgHyAddImport;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

const baseMsgHyAddImportResponse: object = {};

export const MsgHyAddImportResponse = {
  encode(_: MsgHyAddImportResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddImportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHyAddImportResponse } as MsgHyAddImportResponse;
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

  fromJSON(_: any): MsgHyAddImportResponse {
    const message = { ...baseMsgHyAddImportResponse } as MsgHyAddImportResponse;
    return message;
  },

  toJSON(_: MsgHyAddImportResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgHyAddImportResponse>): MsgHyAddImportResponse {
    const message = { ...baseMsgHyAddImportResponse } as MsgHyAddImportResponse;
    return message;
  },
};

const baseMsgHyAddExport: object = {
  creator: "",
  name: "",
  year: "",
  group: "",
  volume: "",
};

export const MsgHyAddExport = {
  encode(message: MsgHyAddExport, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.year !== "") {
      writer.uint32(26).string(message.year);
    }
    if (message.group !== "") {
      writer.uint32(34).string(message.group);
    }
    if (message.volume !== "") {
      writer.uint32(42).string(message.volume);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddExport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHyAddExport } as MsgHyAddExport;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.year = reader.string();
          break;
        case 4:
          message.group = reader.string();
          break;
        case 5:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHyAddExport {
    const message = { ...baseMsgHyAddExport } as MsgHyAddExport;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = String(object.year);
    } else {
      message.year = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    return message;
  },

  toJSON(message: MsgHyAddExport): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.year !== undefined && (obj.year = message.year);
    message.group !== undefined && (obj.group = message.group);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgHyAddExport>): MsgHyAddExport {
    const message = { ...baseMsgHyAddExport } as MsgHyAddExport;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    return message;
  },
};

const baseMsgHyAddExportResponse: object = {};

export const MsgHyAddExportResponse = {
  encode(_: MsgHyAddExportResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgHyAddExportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHyAddExportResponse } as MsgHyAddExportResponse;
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

  fromJSON(_: any): MsgHyAddExportResponse {
    const message = { ...baseMsgHyAddExportResponse } as MsgHyAddExportResponse;
    return message;
  },

  toJSON(_: MsgHyAddExportResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgHyAddExportResponse>): MsgHyAddExportResponse {
    const message = { ...baseMsgHyAddExportResponse } as MsgHyAddExportResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  HyAddMarketsize(
    request: MsgHyAddMarketsize
  ): Promise<MsgHyAddMarketsizeResponse>;
  HyAddPartner(request: MsgHyAddPartner): Promise<MsgHyAddPartnerResponse>;
  HyAddImport(request: MsgHyAddImport): Promise<MsgHyAddImportResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  HyAddExport(request: MsgHyAddExport): Promise<MsgHyAddExportResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  HyAddMarketsize(
    request: MsgHyAddMarketsize
  ): Promise<MsgHyAddMarketsizeResponse> {
    const data = MsgHyAddMarketsize.encode(request).finish();
    const promise = this.rpc.request(
      "khidi.khidi.Msg",
      "HyAddMarketsize",
      data
    );
    return promise.then((data) =>
      MsgHyAddMarketsizeResponse.decode(new Reader(data))
    );
  }

  HyAddPartner(request: MsgHyAddPartner): Promise<MsgHyAddPartnerResponse> {
    const data = MsgHyAddPartner.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Msg", "HyAddPartner", data);
    return promise.then((data) =>
      MsgHyAddPartnerResponse.decode(new Reader(data))
    );
  }

  HyAddImport(request: MsgHyAddImport): Promise<MsgHyAddImportResponse> {
    const data = MsgHyAddImport.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Msg", "HyAddImport", data);
    return promise.then((data) =>
      MsgHyAddImportResponse.decode(new Reader(data))
    );
  }

  HyAddExport(request: MsgHyAddExport): Promise<MsgHyAddExportResponse> {
    const data = MsgHyAddExport.encode(request).finish();
    const promise = this.rpc.request("khidi.khidi.Msg", "HyAddExport", data);
    return promise.then((data) =>
      MsgHyAddExportResponse.decode(new Reader(data))
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
