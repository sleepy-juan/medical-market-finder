/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "khidi.khidi";

export interface HyPartner {
  index: string;
  buyer: string;
  seller: string;
  year: string;
  proportion: string;
}

const baseHyPartner: object = {
  index: "",
  buyer: "",
  seller: "",
  year: "",
  proportion: "",
};

export const HyPartner = {
  encode(message: HyPartner, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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

  decode(input: Reader | Uint8Array, length?: number): HyPartner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHyPartner } as HyPartner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
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

  fromJSON(object: any): HyPartner {
    const message = { ...baseHyPartner } as HyPartner;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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

  toJSON(message: HyPartner): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.seller !== undefined && (obj.seller = message.seller);
    message.year !== undefined && (obj.year = message.year);
    message.proportion !== undefined && (obj.proportion = message.proportion);
    return obj;
  },

  fromPartial(object: DeepPartial<HyPartner>): HyPartner {
    const message = { ...baseHyPartner } as HyPartner;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
