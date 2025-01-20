/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: b9ac2e954376aaf427cfedb42505da40ade8864fbe0dde2c1b753fe05b842769
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
import { options } from "../option";
import { ContentType, HttpClient, RequestParams } from "./HttpClient";
import { LocationType, LocationVoType, ParameterCommandType, ParameterVoType } from "./Types";

export class Location<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;
  private option = options["Location"] || {};

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cancel = (key: string) => {
    this.http.cancelControllers.get(key)?.abort();
    this.http.cancelControllers.delete(key);
  };

  /**
   * No descriptionParameterVoType * * @tags 点位信息管理
   * @name UpdateParameter
   * @summary 更新参数
   * @request PUT:/location/update-parameter
   * @response `200` `ResponseResultDtoParameterVoType` OK
   */
  updateParameter = (data: ParameterCommandType, params: RequestParams = {}) =>
    this.http.request<ParameterVoType, any>({
      path: `/location/update-parameter`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      cancelKey: "updateParameter",
      ...this.option["updateParameter"],
      ...params,
    });
  /**
   * No descriptionLocationVoType * * @tags 点位信息管理
   * @name UpdateChannelId
   * @summary 更新NVR通道
   * @request PUT:/location/update-channel-id
   * @response `200` `ResponseResultDtoLocationVoType` OK
   */
  updateChannelId = (
    query: {
      locationName:
        | "COLD_BED_2_UP_1"
        | "COLD_BED_2_UP_2"
        | "COLD_BED_2_DOWN_1"
        | "COLD_BED_2_DOWN_2"
        | "COLD_BED_3_UP_1"
        | "COLD_BED_3_UP_2"
        | "COLD_BED_3_DOWN_1"
        | "COLD_BED_3_DOWN_2"
        | "COLD_BED_4_UP_1"
        | "COLD_BED_4_UP_2";
      channelId: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<LocationVoType, any>({
      path: `/location/update-channel-id`,
      method: "PUT",
      query: query,
      cancelKey: "updateChannelId",
      ...this.option["updateChannelId"],
      ...params,
    });
  /**
   * No descriptionLocationVoType * * @tags 点位信息管理
   * @name UpdateCameraIp
   * @summary 更新相机ip
   * @request PUT:/location/update-camera-ip
   * @response `200` `ResponseResultDtoLocationVoType` OK
   */
  updateCameraIp = (
    query: {
      locationName:
        | "COLD_BED_2_UP_1"
        | "COLD_BED_2_UP_2"
        | "COLD_BED_2_DOWN_1"
        | "COLD_BED_2_DOWN_2"
        | "COLD_BED_3_UP_1"
        | "COLD_BED_3_UP_2"
        | "COLD_BED_3_DOWN_1"
        | "COLD_BED_3_DOWN_2"
        | "COLD_BED_4_UP_1"
        | "COLD_BED_4_UP_2";
      cameraIp: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<LocationVoType, any>({
      path: `/location/update-camera-ip`,
      method: "PUT",
      query: query,
      cancelKey: "updateCameraIp",
      ...this.option["updateCameraIp"],
      ...params,
    });
  /**
   * No descriptionLocationVoType * * @tags 点位信息管理
   * @name UpdateCameraId
   * @summary 更新相机id
   * @request PUT:/location/update-camera-id
   * @response `200` `ResponseResultDtoLocationVoType` OK
   */
  updateCameraId = (
    query: {
      locationName:
        | "COLD_BED_2_UP_1"
        | "COLD_BED_2_UP_2"
        | "COLD_BED_2_DOWN_1"
        | "COLD_BED_2_DOWN_2"
        | "COLD_BED_3_UP_1"
        | "COLD_BED_3_UP_2"
        | "COLD_BED_3_DOWN_1"
        | "COLD_BED_3_DOWN_2"
        | "COLD_BED_4_UP_1"
        | "COLD_BED_4_UP_2";
      cameraId: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<LocationVoType, any>({
      path: `/location/update-camera-id`,
      method: "PUT",
      query: query,
      cancelKey: "updateCameraId",
      ...this.option["updateCameraId"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 点位信息管理
   * @name Add
   * @summary 新增点位
   * @request POST:/location/add
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  add = (data: LocationType, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/location/add`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "add",
      ...this.option["add"],
      ...params,
    });
  /**
   * No descriptionParameterVoType * * @tags 点位信息管理
   * @name GetParameter
   * @summary 查询参数
   * @request GET:/location/get-parameter
   * @response `200` `ResponseResultDtoParameterVoType` OK
   */
  getParameter = (params: RequestParams = {}) =>
    this.http.request<ParameterVoType, any>({
      path: `/location/get-parameter`,
      method: "GET",
      cancelKey: "getParameter",
      ...this.option["getParameter"],
      ...params,
    });
  /**
   * No descriptionListLocationVoType * * @tags 点位信息管理
   * @name GetAll
   * @summary 查询所有点位信息
   * @request GET:/location/get-all
   * @response `200` `ResponseResultDtoListLocationVoType` OK
   */
  getAll = (params: RequestParams = {}) =>
    this.http.request<LocationVoType[], any>({
      path: `/location/get-all`,
      method: "GET",
      cancelKey: "getAll",
      ...this.option["getAll"],
      ...params,
    });
}
