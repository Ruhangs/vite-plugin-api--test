/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: 272520d0163165db32fc48692010d974da5f99c3deea69a71e58076f9d6c4699
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
import { options } from "../option";
import { HttpClient, RequestParams } from "./HttpClient";

export class Healthz<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;
  private option = options["Healthz"] || {};

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  cancel = (key: string) => {
    this.http.cancelControllers.get(key)?.abort();
    this.http.cancelControllers.delete(key);
  };

  /**
   * No descriptionstring * * @tags k8s健康检查
   * @name Healthz
   * @summary 应用健康检查
   * @request GET:/healthz
   * @response `200` `string` 请求成功
   */
  healthz = (params: RequestParams = {}) =>
    this.http.request<string, any>({
      path: `/healthz`,
      method: "GET",
      cancelKey: "healthz",
      ...this.option["healthz"],
      ...params,
    });
}
