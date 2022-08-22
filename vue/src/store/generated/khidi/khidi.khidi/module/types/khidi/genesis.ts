/* eslint-disable */
import { Params } from "../khidi/params";
import { HyMarketsize } from "../khidi/hy_marketsize";
import { HyPartner } from "../khidi/hy_partner";
import { HyImport } from "../khidi/hy_import";
import { HyExport } from "../khidi/hy_export";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "khidi.khidi";

/** GenesisState defines the khidi module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  hyMarketsizeList: HyMarketsize[];
  hyPartnerList: HyPartner[];
  hyImportList: HyImport[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  hyExportList: HyExport[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hyMarketsizeList) {
      HyMarketsize.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hyPartnerList) {
      HyPartner.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hyImportList) {
      HyImport.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.hyExportList) {
      HyExport.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.hyMarketsizeList = [];
    message.hyPartnerList = [];
    message.hyImportList = [];
    message.hyExportList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.hyMarketsizeList.push(
            HyMarketsize.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.hyPartnerList.push(HyPartner.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hyImportList.push(HyImport.decode(reader, reader.uint32()));
          break;
        case 5:
          message.hyExportList.push(HyExport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.hyMarketsizeList = [];
    message.hyPartnerList = [];
    message.hyImportList = [];
    message.hyExportList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.hyMarketsizeList !== undefined &&
      object.hyMarketsizeList !== null
    ) {
      for (const e of object.hyMarketsizeList) {
        message.hyMarketsizeList.push(HyMarketsize.fromJSON(e));
      }
    }
    if (object.hyPartnerList !== undefined && object.hyPartnerList !== null) {
      for (const e of object.hyPartnerList) {
        message.hyPartnerList.push(HyPartner.fromJSON(e));
      }
    }
    if (object.hyImportList !== undefined && object.hyImportList !== null) {
      for (const e of object.hyImportList) {
        message.hyImportList.push(HyImport.fromJSON(e));
      }
    }
    if (object.hyExportList !== undefined && object.hyExportList !== null) {
      for (const e of object.hyExportList) {
        message.hyExportList.push(HyExport.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.hyMarketsizeList) {
      obj.hyMarketsizeList = message.hyMarketsizeList.map((e) =>
        e ? HyMarketsize.toJSON(e) : undefined
      );
    } else {
      obj.hyMarketsizeList = [];
    }
    if (message.hyPartnerList) {
      obj.hyPartnerList = message.hyPartnerList.map((e) =>
        e ? HyPartner.toJSON(e) : undefined
      );
    } else {
      obj.hyPartnerList = [];
    }
    if (message.hyImportList) {
      obj.hyImportList = message.hyImportList.map((e) =>
        e ? HyImport.toJSON(e) : undefined
      );
    } else {
      obj.hyImportList = [];
    }
    if (message.hyExportList) {
      obj.hyExportList = message.hyExportList.map((e) =>
        e ? HyExport.toJSON(e) : undefined
      );
    } else {
      obj.hyExportList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.hyMarketsizeList = [];
    message.hyPartnerList = [];
    message.hyImportList = [];
    message.hyExportList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.hyMarketsizeList !== undefined &&
      object.hyMarketsizeList !== null
    ) {
      for (const e of object.hyMarketsizeList) {
        message.hyMarketsizeList.push(HyMarketsize.fromPartial(e));
      }
    }
    if (object.hyPartnerList !== undefined && object.hyPartnerList !== null) {
      for (const e of object.hyPartnerList) {
        message.hyPartnerList.push(HyPartner.fromPartial(e));
      }
    }
    if (object.hyImportList !== undefined && object.hyImportList !== null) {
      for (const e of object.hyImportList) {
        message.hyImportList.push(HyImport.fromPartial(e));
      }
    }
    if (object.hyExportList !== undefined && object.hyExportList !== null) {
      for (const e of object.hyExportList) {
        message.hyExportList.push(HyExport.fromPartial(e));
      }
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
