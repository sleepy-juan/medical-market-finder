/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "khidi.khidi";

export interface HyAllNamesOf {
  name: string;
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

const baseHyAllNamesOf: object = {
  name: "",
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

export const HyAllNamesOf = {
  encode(message: HyAllNamesOf, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.recentMarketsize !== "") {
      writer.uint32(18).string(message.recentMarketsize);
    }
    if (message.recentImport !== "") {
      writer.uint32(26).string(message.recentImport);
    }
    if (message.recentExport !== "") {
      writer.uint32(34).string(message.recentExport);
    }
    if (message.domesticMarketShare !== "") {
      writer.uint32(42).string(message.domesticMarketShare);
    }
    if (message.competition !== "") {
      writer.uint32(50).string(message.competition);
    }
    if (message.tradeDependency !== "") {
      writer.uint32(58).string(message.tradeDependency);
    }
    if (message.quality !== "") {
      writer.uint32(66).string(message.quality);
    }
    if (message.protectionism !== "") {
      writer.uint32(74).string(message.protectionism);
    }
    if (message.success !== "") {
      writer.uint32(82).string(message.success);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): HyAllNamesOf {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHyAllNamesOf } as HyAllNamesOf;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.recentMarketsize = reader.string();
          break;
        case 3:
          message.recentImport = reader.string();
          break;
        case 4:
          message.recentExport = reader.string();
          break;
        case 5:
          message.domesticMarketShare = reader.string();
          break;
        case 6:
          message.competition = reader.string();
          break;
        case 7:
          message.tradeDependency = reader.string();
          break;
        case 8:
          message.quality = reader.string();
          break;
        case 9:
          message.protectionism = reader.string();
          break;
        case 10:
          message.success = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HyAllNamesOf {
    const message = { ...baseHyAllNamesOf } as HyAllNamesOf;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
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

  toJSON(message: HyAllNamesOf): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
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

  fromPartial(object: DeepPartial<HyAllNamesOf>): HyAllNamesOf {
    const message = { ...baseHyAllNamesOf } as HyAllNamesOf;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
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
