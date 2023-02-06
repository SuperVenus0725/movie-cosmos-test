/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "movie.movie";

export interface MsgCreateMovie {
  creator: string;
  title: string;
  description: string;
  year: number;
}

export interface MsgCreateMovieResponse {
  id: number;
}

export interface MsgUpdateMovie {
  creator: string;
  id: number;
  title: string;
  description: string;
  year: number;
}

export interface MsgUpdateMovieResponse {}

export interface MsgDeleteMovie {
  creator: string;
  id: number;
}

export interface MsgDeleteMovieResponse {}

const baseMsgCreateMovie: object = {
  creator: "",
  title: "",
  description: "",
  year: 0,
};

export const MsgCreateMovie = {
  encode(message: MsgCreateMovie, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.year !== 0) {
      writer.uint32(32).uint64(message.year);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMovie {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMovie } as MsgCreateMovie;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.year = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMovie {
    const message = { ...baseMsgCreateMovie } as MsgCreateMovie;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = Number(object.year);
    } else {
      message.year = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMovie): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.year !== undefined && (obj.year = message.year);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMovie>): MsgCreateMovie {
    const message = { ...baseMsgCreateMovie } as MsgCreateMovie;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = 0;
    }
    return message;
  },
};

const baseMsgCreateMovieResponse: object = { id: 0 };

export const MsgCreateMovieResponse = {
  encode(
    message: MsgCreateMovieResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMovieResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMovieResponse } as MsgCreateMovieResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMovieResponse {
    const message = { ...baseMsgCreateMovieResponse } as MsgCreateMovieResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMovieResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMovieResponse>
  ): MsgCreateMovieResponse {
    const message = { ...baseMsgCreateMovieResponse } as MsgCreateMovieResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateMovie: object = {
  creator: "",
  id: 0,
  title: "",
  description: "",
  year: 0,
};

export const MsgUpdateMovie = {
  encode(message: MsgUpdateMovie, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.year !== 0) {
      writer.uint32(40).uint64(message.year);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMovie {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMovie } as MsgUpdateMovie;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.year = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMovie {
    const message = { ...baseMsgUpdateMovie } as MsgUpdateMovie;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = Number(object.year);
    } else {
      message.year = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateMovie): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.year !== undefined && (obj.year = message.year);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMovie>): MsgUpdateMovie {
    const message = { ...baseMsgUpdateMovie } as MsgUpdateMovie;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    } else {
      message.year = 0;
    }
    return message;
  },
};

const baseMsgUpdateMovieResponse: object = {};

export const MsgUpdateMovieResponse = {
  encode(_: MsgUpdateMovieResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMovieResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMovieResponse } as MsgUpdateMovieResponse;
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

  fromJSON(_: any): MsgUpdateMovieResponse {
    const message = { ...baseMsgUpdateMovieResponse } as MsgUpdateMovieResponse;
    return message;
  },

  toJSON(_: MsgUpdateMovieResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateMovieResponse>): MsgUpdateMovieResponse {
    const message = { ...baseMsgUpdateMovieResponse } as MsgUpdateMovieResponse;
    return message;
  },
};

const baseMsgDeleteMovie: object = { creator: "", id: 0 };

export const MsgDeleteMovie = {
  encode(message: MsgDeleteMovie, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMovie {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMovie } as MsgDeleteMovie;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMovie {
    const message = { ...baseMsgDeleteMovie } as MsgDeleteMovie;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteMovie): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMovie>): MsgDeleteMovie {
    const message = { ...baseMsgDeleteMovie } as MsgDeleteMovie;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteMovieResponse: object = {};

export const MsgDeleteMovieResponse = {
  encode(_: MsgDeleteMovieResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMovieResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMovieResponse } as MsgDeleteMovieResponse;
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

  fromJSON(_: any): MsgDeleteMovieResponse {
    const message = { ...baseMsgDeleteMovieResponse } as MsgDeleteMovieResponse;
    return message;
  },

  toJSON(_: MsgDeleteMovieResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteMovieResponse>): MsgDeleteMovieResponse {
    const message = { ...baseMsgDeleteMovieResponse } as MsgDeleteMovieResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMovie(request: MsgCreateMovie): Promise<MsgCreateMovieResponse>;
  UpdateMovie(request: MsgUpdateMovie): Promise<MsgUpdateMovieResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteMovie(request: MsgDeleteMovie): Promise<MsgDeleteMovieResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateMovie(request: MsgCreateMovie): Promise<MsgCreateMovieResponse> {
    const data = MsgCreateMovie.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "CreateMovie", data);
    return promise.then((data) =>
      MsgCreateMovieResponse.decode(new Reader(data))
    );
  }

  UpdateMovie(request: MsgUpdateMovie): Promise<MsgUpdateMovieResponse> {
    const data = MsgUpdateMovie.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "UpdateMovie", data);
    return promise.then((data) =>
      MsgUpdateMovieResponse.decode(new Reader(data))
    );
  }

  DeleteMovie(request: MsgDeleteMovie): Promise<MsgDeleteMovieResponse> {
    const data = MsgDeleteMovie.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "DeleteMovie", data);
    return promise.then((data) =>
      MsgDeleteMovieResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
