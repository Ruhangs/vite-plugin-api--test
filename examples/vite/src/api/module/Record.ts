/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: 0fda5261b1d7ea57c4c3525d52e232d2bba1e42f2b340644aa427a6dd438bc54
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
import { options } from "../option";
import { HttpClient, RequestParams } from "./HttpClient";

export class Record<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;
  private option = options["Record"] || {};

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cancel = (key: string) => {
    this.http.cancelControllers.get(key)?.abort();
    this.http.cancelControllers.delete(key);
  };

  /**
   * No descriptionLongType * * @tags 系统和登录接口
   * @name ServerTime
   * @summary 获取服务器当前时间
   * @request GET:/record/server-time
   * @response `200` `ResponseResultDtoLongType` OK
   */
  serverTime = (params: RequestParams = {}) =>
    this.http.request<number, any>({
      path: `/record/server-time`,
      method: "GET",
      cancelKey: "serverTime",
      ...this.option["serverTime"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 系统和登录接口
   * @name OpenDebug
   * @summary 调试日志开关
   * @request GET:/record/open-debug
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  openDebug = (
    query?: {
      ifDebug?: boolean;
      /** @format double */
      rate?: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/record/open-debug`,
      method: "GET",
      query: query,
      cancelKey: "openDebug",
      ...this.option["openDebug"],
      ...params,
    });
  /**
   * No descriptionStringType * * @tags 系统和登录接口
   * @name Logout
   * @summary 登出
   * @request GET:/record/logout
   * @response `200` `ResponseResultDtoStringType` OK
   */
  logout = (params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/record/logout`,
      method: "GET",
      cancelKey: "logout",
      ...this.option["logout"],
      ...params,
    });
  /**
   * No descriptionStringType * * @tags 系统和登录接口
   * @name DoLogin
   * @summary 用户登录
   * @request GET:/record/doLogin
   * @response `200` `ResponseResultDtoStringType` OK
   */
  doLogin = (
    query: {
      account: string;
      password: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<string, any>({
      path: `/record/doLogin`,
      method: "GET",
      query: query,
      cancelKey: "doLogin",
      ...this.option["doLogin"],
      ...params,
    });
}
