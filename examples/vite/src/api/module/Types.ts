/**
 * 
 *  THIS FILE WAS GENERATED SWAGGER-TYPESCRIPT-API
 *
 *  VERSION_HASH: 0b6a7d942139706a5d0f42a17d52f8c113f9654f031bff125c7e3910e37cfd87
 * 
 *  LAST_MODIFIED: 2025/1/20 14:44:56                                                                        
 */
  
export interface RoleCommandType {
  /** @format int32 */
  id?: number;
  name?: string;
  roleType?: "SUPER_ADMINISTRATOR" | "ADMINISTRATOR" | "ORDINARY_USER";
  authority?: string;
}

export interface ResponseResultDtoRoleVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: RoleVoType;
  error?: object;
}

export interface RoleVoType {
  /** @format int32 */
  id?: number;
  name?: string;
  roleType?: "SUPER_ADMINISTRATOR" | "ADMINISTRATOR" | "ORDINARY_USER";
  authority?: string;
  /** @format date-time */
  gmtCreate?: string;
  /** @format date-time */
  gmtModify?: string;
}

/** 历史记录返回结果 */
export interface MonitorVoType {
  /**
   * id
   * @format int32
   */
  id?: number;
  /**
   * 开始时间
   * @format date-time
   */
  accTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 板坯号 */
  slabNumber?: string;
  /** 设备点位 */
  location?:
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
  /** 识别结果 */
  result?: "NORMAL" | "ABNORMAL" | "UNIDENTIFIED";
  /**
   * 偏移夹角
   * @format double
   */
  angle?: number;
  /**
   * 中心线距辊道边
   * @format double
   */
  centerLineDistance?: number;
  /**
   * 头部距辊道入口
   * @format double
   */
  headDistance?: number;
  /** 复核状态 */
  checkStatus?: "NOT_CHECKED" | "CHECKED";
  /** 视频状态 */
  videoStatus?: "NOT_GET" | "GETTING" | "GATED";
  /** 视频地址 */
  videoUrl?: string;
  /** 图片地址 */
  pictureUrl?: string;
  /** 复核结果 */
  misreport?: boolean;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreate?: string;
  /**
   * 修改时间
   * @format date-time
   */
  gmtModify?: string;
}

export interface ResponseResultDtoMonitorVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: MonitorVoType;
  error?: object;
}

/** 阈值参数入参 */
export interface ParameterCommandType {
  /**
   * 2号冷床偏移夹角
   * @format double
   */
  coldBedAngle2Threshold?: number;
  /**
   * 3号冷床偏移夹角
   * @format double
   */
  coldBedAngle3Threshold?: number;
  /**
   * 4号冷床偏移夹角
   * @format double
   */
  coldBedAngle4Threshold?: number;
}

/** 阈值参数返回结果 */
export interface ParameterVoType {
  /**
   * 2号冷床偏移夹角
   * @format double
   */
  coldBedAngle2Threshold?: number;
  /**
   * 3号冷床偏移夹角
   * @format double
   */
  coldBedAngle3Threshold?: number;
  /**
   * 4号冷床偏移夹角
   * @format double
   */
  coldBedAngle4Threshold?: number;
}

export interface ResponseResultDtoParameterVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: ParameterVoType;
  error?: object;
}

/** 点位返回结果 */
export interface LocationVoType {
  /**
   * id
   * @format int32
   */
  id?: number;
  /** 点位名称 */
  locationName?:
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
  /** 相机id */
  cameraId?: string;
  /** 相机ip */
  cameraIp?: string;
  /** NVR通道 */
  channelId?: string;
  /** 算法id */
  algorithmId?: string;
}

export interface ResponseResultDtoLocationVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: LocationVoType;
  error?: object;
}

export interface OrderItemType {
  column?: string;
  asc?: boolean;
}

export interface RoleQueryType {
  /** @format int32 */
  currPage?: number;
  /** @format int32 */
  pageSize?: number;
  orderItemList?: OrderItemType[];
}

export interface PageRoleVoType {
  records?: RoleVoType[];
  /** @format int64 */
  total?: number;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  current?: number;
  /** @deprecated */
  orders?: OrderItemType[];
  /** @deprecated */
  optimizeCountSql?: boolean;
  /** @deprecated */
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  /**
   * @deprecated
   * @format int64
   */
  maxLimit?: number;
  /** @deprecated */
  countId?: string;
  /** @format int64 */
  pages?: number;
}

export interface ResponseResultDtoPageRoleVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: PageRoleVoType;
  error?: object;
}

export interface IdentifyResultDtoType {
  measureLists?: MeasureType[];
  /** @format int32 */
  measureTotal?: number;
  steelType?: string;
}

export interface MeasureType {
  measure_values?: MeasureValueType;
}

export interface MeasureValueType {
  /** @format double */
  data?: number;
  /** @format double */
  headValue?: number;
  /** @format double */
  midValue?: number;
  /** @format double */
  tailValue?: number;
  identifyResult?: string;
}

export interface MonitorForeignDtoIdentifyResultDtoType {
  algorithmId?: string;
  cameraId?: string;
  /** @format int64 */
  accTime?: number;
  /** @format int32 */
  alarmType?: number;
  url?: string;
  originImageUrl?: string;
  maskImageUrl?: string;
  originImageUrlList?: string[];
  thumbnailImageUrlList?: string[];
  data?: IdentifyResultDtoType;
}

export interface ResponseResultDtoVoidType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: object;
  error?: object;
}

/** 统计查询 */
export interface StatisticsQueryType {
  /** 开始时间 yyyy-MM-dd HH:mm:ss */
  startTime?: string;
  /** 结束时间 yyyy-MM-dd HH:mm:ss */
  endTime?: string;
  /** 设备点位 */
  location?:
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
}

export interface ResponseResultDtoStatisticsVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: StatisticsVoType;
  error?: object;
}

/** 统计返回结果 */
export interface StatisticsVoType {
  /**
   * 总数
   * @format int64
   */
  total?: number;
  /**
   * 正常数
   * @format int64
   */
  normalTotal?: number;
  /**
   * 异常数
   * @format int64
   */
  abnormalTotal?: number;
  /**
   * 未识别数
   * @format int64
   */
  unidentifiedTotal?: number;
}

/** 历史记录查询 */
export interface MonitorQueryType {
  /**
   * Results page you want to retrieve (1..N)
   * @format int32
   * @example 1
   */
  currPage?: number;
  /**
   * Number of records per page
   * @format int32
   * @example 1000
   */
  pageSize?: number;
  /** 开始时间 yyyy-MM-dd HH:mm:ss */
  startTime?: string;
  /** 结束时间 yyyy-MM-dd HH:mm:ss */
  endTime?: string;
  /** 板坯号 */
  slabNumber?: string;
  /** 设备点位 */
  location?:
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
  /** 识别结果 */
  result?: "NORMAL" | "ABNORMAL" | "UNIDENTIFIED";
  /** 复核状态 */
  checkStatus?: "NOT_CHECKED" | "CHECKED";
  /** 复核结果 */
  misreport?: boolean;
  /**
   * 排序字段
   * @example ""orderItemList":[{"column":"gmt_create","asc":true}]"
   */
  orderItemList?: OrderItemType[];
}

export interface PageMonitorVoType {
  records?: MonitorVoType[];
  /** @format int64 */
  total?: number;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  current?: number;
  /** @deprecated */
  orders?: OrderItemType[];
  /** @deprecated */
  optimizeCountSql?: boolean;
  /** @deprecated */
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  /**
   * @deprecated
   * @format int64
   */
  maxLimit?: number;
  /** @deprecated */
  countId?: string;
  /** @format int64 */
  pages?: number;
}

export interface ResponseResultDtoPageMonitorVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: PageMonitorVoType;
  error?: object;
}

export interface LocationType {
  /** @format int32 */
  id?: number;
  locationName?:
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
  cameraId?: string;
  cameraIp?: string;
  channelId?: string;
  algorithmId?: string;
  /** @format date-time */
  gmtCreate?: string;
  /** @format date-time */
  gmtModify?: string;
}

export interface AccountCommandType {
  /** @format int32 */
  id?: number;
  account?: string;
  password?: string;
  /** @format int32 */
  roleId?: number;
  name?: string;
  phone?: string;
  status?: "ACTIVATED" | "DISABLED";
  accountList?: string[];
}

export interface AccountVoType {
  /** @format int32 */
  id?: number;
  account?: string;
  password?: string;
  /** @format int32 */
  roleId?: number;
  roleName?: string;
  name?: string;
  phone?: string;
  status?: "ACTIVATED" | "DISABLED";
  accountList?: string;
  authority?: string;
  /** @format date-time */
  gmtCreate?: string;
  /** @format date-time */
  gmtModify?: string;
}

export interface ResponseResultDtoAccountVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: AccountVoType;
  error?: object;
}

export interface AccountQueryType {
  /** @format int32 */
  currPage?: number;
  /** @format int32 */
  pageSize?: number;
  modTimeBegin?: string;
  modTimeEnd?: string;
  status?: "ACTIVATED" | "DISABLED";
  /** @format int32 */
  roleId?: number;
  name?: string;
  orderItemList?: OrderItemType[];
}

export interface PageAccountVoType {
  records?: AccountVoType[];
  /** @format int64 */
  total?: number;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  current?: number;
  /** @deprecated */
  orders?: OrderItemType[];
  /** @deprecated */
  optimizeCountSql?: boolean;
  /** @deprecated */
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  /**
   * @deprecated
   * @format int64
   */
  maxLimit?: number;
  /** @deprecated */
  countId?: string;
  /** @format int64 */
  pages?: number;
}

export interface ResponseResultDtoPageAccountVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: PageAccountVoType;
  error?: object;
}

export interface ResponseResultDtoBooleanType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: boolean;
  error?: object;
}

export interface ResponseResultDtoListRoleVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: RoleVoType[];
  error?: object;
}

export interface ResponseResultDtoLongType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  /** @format int64 */
  data?: number;
  error?: object;
}

export interface ResponseResultDtoStringType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: string;
  error?: object;
}

export interface ResponseResultDtoListLocationVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: LocationVoType[];
  error?: object;
}

export interface ResponseResultDtoListAccountVoType {
  success?: boolean;
  code?: string;
  message?: string;
  traceId?: string;
  possibleReason?: string;
  suggestMeasure?: string;
  data?: AccountVoType[];
  error?: object;
}
