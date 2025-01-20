/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: c96805f75b70e92c9f2522168678334abde849664228d88f694cd66a14a9be03
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
import { options } from "../option";
import { ContentType, HttpClient, RequestParams } from "./HttpClient";
import { PageRoleVoType, RoleCommandType, RoleQueryType, RoleVoType } from "./Types";

export class Role<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;
  private option = options["Role"] || {};

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cancel = (key: string) => {
    this.http.cancelControllers.get(key)?.abort();
    this.http.cancelControllers.delete(key);
  };

  /**
   * No descriptionRoleVoType * * @tags 角色管理
   * @name Update
   * @summary 更新
   * @request PUT:/role/update
   * @response `200` `ResponseResultDtoRoleVoType` OK
   */
  update = (data: RoleCommandType, params: RequestParams = {}) =>
    this.http.request<RoleVoType, any>({
      path: `/role/update`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      cancelKey: "update",
      ...this.option["update"],
      ...params,
    });
  /**
   * No descriptionPageRoleVoType * * @tags 角色管理
   * @name ConditionQuery
   * @summary 根据条件分页查询
   * @request POST:/role/condition-query
   * @response `200` `ResponseResultDtoPageRoleVoType` OK
   */
  conditionQuery = (data: RoleQueryType, params: RequestParams = {}) =>
    this.http.request<PageRoleVoType, any>({
      path: `/role/condition-query`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "conditionQuery",
      ...this.option["conditionQuery"],
      ...params,
    });
  /**
   * No descriptionRoleVoType * * @tags 角色管理
   * @name Add
   * @summary 新增
   * @request POST:/role/add
   * @response `200` `ResponseResultDtoRoleVoType` OK
   */
  add = (data: RoleCommandType, params: RequestParams = {}) =>
    this.http.request<RoleVoType, any>({
      path: `/role/add`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "add",
      ...this.option["add"],
      ...params,
    });
  /**
   * No descriptionRoleVoType * * @tags 角色管理
   * @name GetRoleById
   * @summary 根据id查询
   * @request GET:/role/{id}
   * @response `200` `ResponseResultDtoRoleVoType` OK
   */
  getRoleById = (id: number, params: RequestParams = {}) =>
    this.http.request<RoleVoType, any>({
      path: `/role/${id}`,
      method: "GET",
      cancelKey: "getRoleById",
      ...this.option["getRoleById"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 角色管理
   * @name DeleteRoleById
   * @summary 删除
   * @request DELETE:/role/{id}
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  deleteRoleById = (id: number, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/role/${id}`,
      method: "DELETE",
      cancelKey: "deleteRoleById",
      ...this.option["deleteRoleById"],
      ...params,
    });
  /**
   * No descriptionBooleanType * * @tags 角色管理
   * @name Check
   * @summary 检查角色名是否存在
   * @request GET:/role/check
   * @response `200` `ResponseResultDtoBooleanType` OK
   */
  check = (
    query: {
      /** 角色名称 */
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<boolean, any>({
      path: `/role/check`,
      method: "GET",
      query: query,
      cancelKey: "check",
      ...this.option["check"],
      ...params,
    });
  /**
   * No descriptionListRoleVoType * * @tags 角色管理
   * @name AllQuery
   * @summary 查询所有数据
   * @request GET:/role/all-query
   * @response `200` `ResponseResultDtoListRoleVoType` OK
   */
  allQuery = (params: RequestParams = {}) =>
    this.http.request<RoleVoType[], any>({
      path: `/role/all-query`,
      method: "GET",
      cancelKey: "allQuery",
      ...this.option["allQuery"],
      ...params,
    });
}
