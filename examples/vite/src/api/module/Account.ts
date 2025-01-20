/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: f3990b24402f3f31b92fdf9eefefaa5563f9c667486083acbd12074fe51e3698
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
import { options } from "../option";
import { ContentType, HttpClient, RequestParams } from "./HttpClient";
import { AccountCommandType, AccountQueryType, AccountVoType, PageAccountVoType } from "./Types";

export class Account<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;
  private option = options["Account"] || {};

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cancel = (key: string) => {
    this.http.cancelControllers.get(key)?.abort();
    this.http.cancelControllers.delete(key);
  };

  /**
   * No descriptionAccountVoType * * @tags 用户管理
   * @name Update
   * @summary 更新用户信息
   * @request POST:/account/update
   * @response `200` `ResponseResultDtoAccountVoType` OK
   */
  update = (data: AccountCommandType, params: RequestParams = {}) =>
    this.http.request<AccountVoType, any>({
      path: `/account/update`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "update",
      ...this.option["update"],
      ...params,
    });
  /**
   * No descriptionAccountVoType * * @tags 用户管理
   * @name UpdateStatus
   * @summary 更新用户状态
   * @request POST:/account/update-status
   * @response `200` `ResponseResultDtoAccountVoType` OK
   */
  updateStatus = (
    query: {
      /** @format int32 */
      id: number;
      status: "ACTIVATED" | "DISABLED";
    },
    params: RequestParams = {},
  ) =>
    this.http.request<AccountVoType, any>({
      path: `/account/update-status`,
      method: "POST",
      query: query,
      cancelKey: "updateStatus",
      ...this.option["updateStatus"],
      ...params,
    });
  /**
   * No descriptionAccountVoType * * @tags 用户管理
   * @name Register
   * @summary 新增用户
   * @request POST:/account/register
   * @response `200` `ResponseResultDtoAccountVoType` OK
   */
  register = (data: AccountCommandType, params: RequestParams = {}) =>
    this.http.request<AccountVoType, any>({
      path: `/account/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "register",
      ...this.option["register"],
      ...params,
    });
  /**
   * No descriptionPageAccountVoType * * @tags 用户管理
   * @name ConditionQuery
   * @summary 根据条件分页查询用户
   * @request POST:/account/condition-query
   * @response `200` `ResponseResultDtoPageAccountVoType` OK
   */
  conditionQuery = (data: AccountQueryType, params: RequestParams = {}) =>
    this.http.request<PageAccountVoType, any>({
      path: `/account/condition-query`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "conditionQuery",
      ...this.option["conditionQuery"],
      ...params,
    });
  /**
   * No descriptionAccountVoType * * @tags 用户管理
   * @name CurrentUser
   * @summary 获取当前登录用户
   * @request GET:/account/current-user
   * @response `200` `ResponseResultDtoAccountVoType` OK
   */
  currentUser = (params: RequestParams = {}) =>
    this.http.request<AccountVoType, any>({
      path: `/account/current-user`,
      method: "GET",
      cancelKey: "currentUser",
      ...this.option["currentUser"],
      ...params,
    });
  /**
   * No descriptionBooleanType * * @tags 用户管理
   * @name Check
   * @summary 检查用户名是否存在
   * @request GET:/account/check
   * @response `200` `ResponseResultDtoBooleanType` OK
   */
  check = (
    query: {
      /** 用户名称 */
      account: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<boolean, any>({
      path: `/account/check`,
      method: "GET",
      query: query,
      cancelKey: "check",
      ...this.option["check"],
      ...params,
    });
  /**
   * No descriptionListAccountVoType * * @tags 用户管理
   * @name All
   * @summary 获取所有用户
   * @request GET:/account/all
   * @response `200` `ResponseResultDtoListAccountVoType` OK
   */
  all = (params: RequestParams = {}) =>
    this.http.request<AccountVoType[], any>({
      path: `/account/all`,
      method: "GET",
      cancelKey: "all",
      ...this.option["all"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 用户管理
   * @name Delete
   * @summary 删除某个用户
   * @request DELETE:/account/delete
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  delete = (
    query: {
      /** @format int32 */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/account/delete`,
      method: "DELETE",
      query: query,
      cancelKey: "delete",
      ...this.option["delete"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 用户管理
   * @name BatchDelete
   * @summary 批量删除用户
   * @request DELETE:/account/batch-delete
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  batchDelete = (
    query: {
      ids: number[];
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/account/batch-delete`,
      method: "DELETE",
      query: query,
      cancelKey: "batchDelete",
      ...this.option["batchDelete"],
      ...params,
    });
}
