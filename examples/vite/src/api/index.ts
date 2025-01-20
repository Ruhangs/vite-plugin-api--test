/**
 * 
 *  THIS FILE WAS GENERATED BY AXIOS.EJS
 *                                                               
 */

import { HttpClient } from "./module/HttpClient";
import { Role } from "./module/Role";
import { Monitor } from "./module/Monitor";
import { Location } from "./module/Location";
import { Account } from "./module/Account";
import { Record } from "./module/Record";
import { Healthz } from "./module/Healthz";
import qs from "qs"
import download from "downloadjs"

class API<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {

   public Role = new Role(this); 
   public Monitor = new Monitor(this); 
   public Location = new Location(this); 
   public Account = new Account(this); 
   public Record = new Record(this); 
   public Healthz = new Healthz(this); 
}

const axiosApi = new API({
    paramsSerializer: (params: any) => qs.stringify(params, { indices: false }),
    baseURL: './' + env.V_API_BASE
});

axiosApi.instance.interceptors.request.use(
    (config: any) => {
        console.log(config);
        return config;
    },
    (error: any) => {
        console.log(error);
    }
);

axiosApi.instance.interceptors.response.use(
    (res: any) => {
        console.log(res)
        if (res.status === 200) {
            const responseType = res.request.responseType
            switch (responseType) {
                case 'blob': {
                    if (res.data.type === "application/json") {
                        const blob = res.data;
                        blob.text().then((text: string) => {
                            res.config.headers['Silent-Tips'] ? console.error(text)
                                : ElNotification({
                                    title: JSON.parse(text).possibleReason,
                                    message: JSON.parse(text).code,
                                    type: 'error',
                                })
                        });
                        return false;
                    }
                    const filename = res.headers['content-disposition'].split("=")[1]
                    download(res.data, decodeURI(filename))
                    break;
                }
                default: {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { success, code, traceId, message, possibleReason, suggestMeasure, data, error } = res.data
                    if (success) {
                        return data
                    } else {
                        res.config.headers['Silent-Tips'] ? console.error(message)
                            : ElNotification({
                                title: possibleReason,
                                message: code,
                                type: 'error',
                            })
                        if (code === "401") {
                            window.location.href = "#/login"
                        }
                        return Promise.reject(new Error(message));
                    }
                }
            }
        } else {
            res.config.headers['Silent-Tips'] ? console.error(res.statusText)
                : ElNotification({
                    title: res.statusText,
                    message: res.status.toString(),
                    type: 'error',
                })
            return Promise.reject(new Error(res.statusText));
        }
    },
    (error: any) => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);

export const axiosInstance = axiosApi.instance

export const roleApi = axiosApi.Role; 
export const monitorApi = axiosApi.Monitor; 
export const locationApi = axiosApi.Location; 
export const accountApi = axiosApi.Account; 
export const recordApi = axiosApi.Record; 
export const healthzApi = axiosApi.Healthz; 
