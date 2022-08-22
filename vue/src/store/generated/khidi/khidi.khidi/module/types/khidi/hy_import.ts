/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "khidi.khidi";

export interface HyImport {
  index: string;
  name: string;
  year: string;
  group: string;
  volume: string;
}

const baseHyImport: object = {
  index: "",
  name: "",
  year: "",
  group: "",
  volume: "",
};

export const HyImport = {
  encode(message: HyImport, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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

  decode(input: Reader | Uint8Array, length?: number): HyImport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHyImport } as HyImport;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
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

  fromJSON(object: any): HyImport {
    const message = { ...baseHyImport } as HyImport;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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

  toJSON(message: HyImport): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.year !== undefined && (obj.year = message.year);
    message.group !== undefined && (obj.group = message.group);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial(object: DeepPartial<HyImport>): HyImport {
    const message = { ...baseHyImport } as HyImport;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
