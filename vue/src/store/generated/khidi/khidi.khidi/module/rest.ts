/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface KhidiHyAllNamesOf {
  name?: string;
  recentMarketsize?: string;
  recentImport?: string;
  recentExport?: string;
  domesticMarketShare?: string;
  competition?: string;
  tradeDependency?: string;
  quality?: string;
  protectionism?: string;
  success?: string;
}

export interface KhidiHyExport {
  index?: string;
  name?: string;
  year?: string;
  group?: string;
  volume?: string;
}

export interface KhidiHyImport {
  index?: string;
  name?: string;
  year?: string;
  group?: string;
  volume?: string;
}

export interface KhidiHyMarketsize {
  index?: string;
  name?: string;
  year?: string;
  group?: string;
  volume?: string;
}

export interface KhidiHyPartner {
  index?: string;
  buyer?: string;
  seller?: string;
  year?: string;
  proportion?: string;
}

export type KhidiMsgHyAddExportResponse = object;

export type KhidiMsgHyAddImportResponse = object;

export type KhidiMsgHyAddMarketsizeResponse = object;

export type KhidiMsgHyAddPartnerResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type KhidiParams = object;

export interface KhidiQueryAllHyExportResponse {
  hyExport?: KhidiHyExport[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface KhidiQueryAllHyImportResponse {
  hyImport?: KhidiHyImport[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface KhidiQueryAllHyMarketsizeResponse {
  hyMarketsize?: KhidiHyMarketsize[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface KhidiQueryAllHyPartnerResponse {
  hyPartner?: KhidiHyPartner[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface KhidiQueryGetHyExportResponse {
  hyExport?: KhidiHyExport;
}

export interface KhidiQueryGetHyImportResponse {
  hyImport?: KhidiHyImport;
}

export interface KhidiQueryGetHyMarketsizeResponse {
  hyMarketsize?: KhidiHyMarketsize;
}

export interface KhidiQueryGetHyPartnerResponse {
  hyPartner?: KhidiHyPartner;
}

export interface KhidiQueryHyAllNamesOfResponse {
  HyAllNamesOf?: KhidiHyAllNamesOf[];
}

export interface KhidiQueryHyAllValuesOfResponse {
  recentMarketsize?: string;
  recentImport?: string;
  recentExport?: string;
  domesticMarketShare?: string;
  competition?: string;
  tradeDependency?: string;
  quality?: string;
  protectionism?: string;
  success?: string;
}

export interface KhidiQueryHyCompetitionResponse {
  value?: string;
}

export interface KhidiQueryHyDomesticMarketShareResponse {
  value?: string;
}

export interface KhidiQueryHyProtectionismResponse {
  value?: string;
}

export interface KhidiQueryHyQualityResponse {
  value?: string;
}

export interface KhidiQueryHyRecentExportResponse {
  volume?: string;
}

export interface KhidiQueryHyRecentImportResponse {
  volume?: string;
}

export interface KhidiQueryHyRecentMarketsizeResponse {
  volume?: string;
}

export interface KhidiQueryHyRecentPartnerResponse {
  volume?: string;
}

export interface KhidiQueryHySuccessResponse {
  value?: string;
}

export interface KhidiQueryHyTradeDependencyResponse {
  value?: string;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface KhidiQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: KhidiParams;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title khidi/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryHyAllNamesOf
   * @summary Queries a list of HyAllNamesOf items.
   * @request GET:/khidi/khidi/hy_all_names_of/{group}
   */
  queryHyAllNamesOf = (group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyAllNamesOfResponse, RpcStatus>({
      path: `/khidi/khidi/hy_all_names_of/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyAllValuesOf
   * @summary Queries a list of HyAllValuesOf items.
   * @request GET:/khidi/khidi/hy_all_values_of/{name}/{group}
   */
  queryHyAllValuesOf = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyAllValuesOfResponse, RpcStatus>({
      path: `/khidi/khidi/hy_all_values_of/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyCompetition
   * @summary Queries a list of HyCompetition items.
   * @request GET:/khidi/khidi/hy_competition/{name}/{group}
   */
  queryHyCompetition = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyCompetitionResponse, RpcStatus>({
      path: `/khidi/khidi/hy_competition/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyDomesticMarketShare
   * @summary Queries a list of HyDomesticMarketShare items.
   * @request GET:/khidi/khidi/hy_domestic_market_share/{name}/{group}
   */
  queryHyDomesticMarketShare = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyDomesticMarketShareResponse, RpcStatus>({
      path: `/khidi/khidi/hy_domestic_market_share/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyExportAll
   * @summary Queries a list of HyExport items.
   * @request GET:/khidi/khidi/hy_export
   */
  queryHyExportAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<KhidiQueryAllHyExportResponse, RpcStatus>({
      path: `/khidi/khidi/hy_export`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyExport
   * @summary Queries a HyExport by index.
   * @request GET:/khidi/khidi/hy_export/{index}
   */
  queryHyExport = (index: string, params: RequestParams = {}) =>
    this.request<KhidiQueryGetHyExportResponse, RpcStatus>({
      path: `/khidi/khidi/hy_export/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyImportAll
   * @summary Queries a list of HyImport items.
   * @request GET:/khidi/khidi/hy_import
   */
  queryHyImportAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<KhidiQueryAllHyImportResponse, RpcStatus>({
      path: `/khidi/khidi/hy_import`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyImport
   * @summary Queries a HyImport by index.
   * @request GET:/khidi/khidi/hy_import/{index}
   */
  queryHyImport = (index: string, params: RequestParams = {}) =>
    this.request<KhidiQueryGetHyImportResponse, RpcStatus>({
      path: `/khidi/khidi/hy_import/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyMarketsizeAll
   * @summary Queries a list of HyMarketsize items.
   * @request GET:/khidi/khidi/hy_marketsize
   */
  queryHyMarketsizeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<KhidiQueryAllHyMarketsizeResponse, RpcStatus>({
      path: `/khidi/khidi/hy_marketsize`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyMarketsize
   * @summary Queries a HyMarketsize by index.
   * @request GET:/khidi/khidi/hy_marketsize/{index}
   */
  queryHyMarketsize = (index: string, params: RequestParams = {}) =>
    this.request<KhidiQueryGetHyMarketsizeResponse, RpcStatus>({
      path: `/khidi/khidi/hy_marketsize/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyPartnerAll
   * @summary Queries a list of HyPartner items.
   * @request GET:/khidi/khidi/hy_partner
   */
  queryHyPartnerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<KhidiQueryAllHyPartnerResponse, RpcStatus>({
      path: `/khidi/khidi/hy_partner`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyPartner
   * @summary Queries a HyPartner by index.
   * @request GET:/khidi/khidi/hy_partner/{index}
   */
  queryHyPartner = (index: string, params: RequestParams = {}) =>
    this.request<KhidiQueryGetHyPartnerResponse, RpcStatus>({
      path: `/khidi/khidi/hy_partner/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyProtectionism
   * @summary Queries a list of HyProtectionism items.
   * @request GET:/khidi/khidi/hy_protectionism/{name}/{group}
   */
  queryHyProtectionism = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyProtectionismResponse, RpcStatus>({
      path: `/khidi/khidi/hy_protectionism/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyQuality
   * @summary Queries a list of HyQuality items.
   * @request GET:/khidi/khidi/hy_quality/{name}/{group}
   */
  queryHyQuality = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyQualityResponse, RpcStatus>({
      path: `/khidi/khidi/hy_quality/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyRecentExport
   * @summary Queries a list of HyRecentExport items.
   * @request GET:/khidi/khidi/hy_recent_export/{name}/{group}
   */
  queryHyRecentExport = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyRecentExportResponse, RpcStatus>({
      path: `/khidi/khidi/hy_recent_export/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyRecentImport
   * @summary Queries a list of HyRecentImport items.
   * @request GET:/khidi/khidi/hy_recent_import/{name}/{group}
   */
  queryHyRecentImport = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyRecentImportResponse, RpcStatus>({
      path: `/khidi/khidi/hy_recent_import/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyRecentMarketsize
   * @summary Queries a list of HyRecentMarketsize items.
   * @request GET:/khidi/khidi/hy_recent_marketsize/{name}/{group}
   */
  queryHyRecentMarketsize = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyRecentMarketsizeResponse, RpcStatus>({
      path: `/khidi/khidi/hy_recent_marketsize/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyRecentPartner
   * @summary Queries a list of HyRecentPartner items.
   * @request GET:/khidi/khidi/hy_recent_partner/{buyer}/{seller}
   */
  queryHyRecentPartner = (buyer: string, seller: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyRecentPartnerResponse, RpcStatus>({
      path: `/khidi/khidi/hy_recent_partner/${buyer}/${seller}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHySuccess
   * @summary Queries a list of HySuccess items.
   * @request GET:/khidi/khidi/hy_success/{name}/{group}
   */
  queryHySuccess = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHySuccessResponse, RpcStatus>({
      path: `/khidi/khidi/hy_success/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHyTradeDependency
   * @summary Queries a list of HyTradeDependency items.
   * @request GET:/khidi/khidi/hy_trade_dependency/{name}/{group}
   */
  queryHyTradeDependency = (name: string, group: string, params: RequestParams = {}) =>
    this.request<KhidiQueryHyTradeDependencyResponse, RpcStatus>({
      path: `/khidi/khidi/hy_trade_dependency/${name}/${group}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/khidi/khidi/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<KhidiQueryParamsResponse, RpcStatus>({
      path: `/khidi/khidi/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
