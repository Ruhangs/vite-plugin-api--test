/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: ece6be415f2c93f0fbecf0e7ce5adab19724c6e5a6ad3b61aba5445efbe2d5e8
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
import { options } from "../option";
import { ContentType, HttpClient, RequestParams } from "./HttpClient";
import {
  MonitorForeignDtoIdentifyResultDtoType,
  MonitorQueryType,
  MonitorVoType,
  PageMonitorVoType,
  StatisticsQueryType,
  StatisticsVoType,
} from "./Types";

export class Monitor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;
  private option = options["Monitor"] || {};

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cancel = (key: string) => {
    this.http.cancelControllers.get(key)?.abort();
    this.http.cancelControllers.delete(key);
  };

  /**
   * No descriptionMonitorVoType * * @tags 历史记录
   * @name UpdateCheckStatus
   * @summary 更新复核状态
   * @request PUT:/monitor/update-check-status
   * @response `200` `ResponseResultDtoMonitorVoType` OK
   */
  updateCheckStatus = (
    query: {
      /** @format int32 */
      id: number;
      checkStatus: "NOT_CHECKED" | "CHECKED";
    },
    params: RequestParams = {},
  ) =>
    this.http.request<MonitorVoType, any>({
      path: `/monitor/update-check-status`,
      method: "PUT",
      query: query,
      cancelKey: "updateCheckStatus",
      ...this.option["updateCheckStatus"],
      ...params,
    });
  /**
   * No descriptionMonitorVoType * * @tags 历史记录
   * @name UpdateCheckResult
   * @summary 更新复核结果
   * @request PUT:/monitor/update-check-result
   * @response `200` `ResponseResultDtoMonitorVoType` OK
   */
  updateCheckResult = (
    query: {
      /** @format int32 */
      id: number;
      misreport: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<MonitorVoType, any>({
      path: `/monitor/update-check-result`,
      method: "PUT",
      query: query,
      cancelKey: "updateCheckResult",
      ...this.option["updateCheckResult"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 历史记录
   * @name Test
   * @summary 测试
   * @request POST:/monitor/test
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  test = (data: MonitorForeignDtoIdentifyResultDtoType, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/monitor/test`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "test",
      ...this.option["test"],
      ...params,
    });
  /**
   * No descriptionStatisticsVoType * * @tags 历史记录
   * @name Statistics
   * @summary 统计
   * @request POST:/monitor/statistics
   * @response `200` `ResponseResultDtoStatisticsVoType` OK
   */
  statistics = (data: StatisticsQueryType, params: RequestParams = {}) =>
    this.http.request<StatisticsVoType, any>({
      path: `/monitor/statistics`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "statistics",
      ...this.option["statistics"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 历史记录
   * @name HistoryExport
   * @summary 历史数据导出
   * @request POST:/monitor/history-export
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  historyExport = (data: MonitorQueryType, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/monitor/history-export`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "historyExport",
      ...this.option["historyExport"],
      ...params,
    });
  /**
   * No descriptionPageMonitorVoType * * @tags 历史记录
   * @name GetCondition
   * @summary 根据条件查询
   * @request POST:/monitor/get-condition
   * @response `200` `ResponseResultDtoPageMonitorVoType` OK
   */
  getCondition = (data: MonitorQueryType, params: RequestParams = {}) =>
    this.http.request<PageMonitorVoType, any>({
      path: `/monitor/get-condition`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "getCondition",
      ...this.option["getCondition"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 历史记录
   * @name DownloadPicture
   * @summary 图片下载
   * @request POST:/monitor/download-picture
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  downloadPicture = (data: number[], params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/monitor/download-picture`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      cancelKey: "downloadPicture",
      ...this.option["downloadPicture"],
      ...params,
    });
  /**
   * No descriptionVoidType * * @tags 历史记录
   * @name GetVideo
   * @summary 获取视频
   * @request GET:/monitor/getVideo
   * @response `200` `ResponseResultDtoVoidType` OK
   */
  getVideo = (
    query: {
      /** @format int32 */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<void, any>({
      path: `/monitor/getVideo`,
      method: "GET",
      query: query,
      cancelKey: "getVideo",
      ...this.option["getVideo"],
      ...params,
    });
}
