# vite-plugin-auto-generate-api

该插件是基于 `swagger-typescript-api` 工具优化后根据后端 `swagger` 文档自动生成前端接口工具，主要支持以下功能：
<br />

## 功能 🦖

- 自定义接口类型或名称
- 支持配置接口字段是否必选
- 支持配置请求取消
- 支持配置数据模拟
- 支持静默错误通知
- 判断 `swagger` 文档是否更新，并自动生成版本注释
  <br />

## 使用方法 🦕

### 安装

```shell
# npm
npm install vite-plugin-auto-generate-api

# pnpm
pnpm install vite-plugin-auto-generate-api
```

### 配置

```javascript
// vite.config.js

import AutoGenerateApi from "vite-plugin-auto-generate-api"
// 该文件具体内容请看使用说明
import { blobResponseTypeNames, formatModuleNames, formatRouteNames, ignoreModuleNames, fixTypes, requiredTypes } from './fixed'
...

export default defineConfig({
    ...other,
    plugins: [
        AutoGenerateApi({
            // 必填项
            url: "",
            // 用于身份验证
            username: "",
            password: "",
            // 其他配置项
            blobResponseTypeNames,
            formatModuleNames,
            formatRouteNames,
            ignoreModuleNames,
            fixTypes,
            requiredTypes
        })
    ]
})

```

### 使用说明

#### 1、接口错误修正或名称修正 ---- fixed.ts (文件名可以自定义)

```typescript
/**
 * 说明：此数组表示哪些请求返回的是文件流形式
 * 具体对应swagger上的中文名称 或者 api方法注释中的 @summary “中文名称”
 */
export const blobResponseTypeNames = ["历史数据导出", "图片下载"];

/**
 * 说明：此对象是对自动生成的后端接口文件重命名
 * 格式如下：
 * 模块名称：'重命名名称'
 *
 * 模块名称：对应swagger请求路径中 `/模块名称/aaaa` 或 `/模块名称` 中的模块名称字段
 * 或者 对应api方法注释中 @request POST:/模块名称/history-export
 */
export const formatModuleNames = {
  monitor: "history",
  record: "system",
};

/**
 * 说明：此对象是对自动生成的后端接口请求方法重命名
 * 格式如下：
 * {
 *     "moduleName": {
 *          "原方法名称"：'重命名名称'
 *      }
 * }
 *
 * moduleName：api文件的文件名的小写
 * 原方法名称：api文件中的方法名称
 */
export const formatRouteNames = {
  history: {
    historyExport: "exportRecord",
  },
};

/**
 * 说明：此数组是对与业务无关的接口进行屏蔽
 *
 * 对应swagger请求路径中 /模块名称/aaaa 或 /模块名称 中的模块名称字段
 * 若已生成，需要手动删除项目中的文件
 */
export const ignoreModuleNames = ["healthz"];

/**
 * 说明：此对象是对后端接口定义修正
 * {
 *     类型名称: {
 *          字段名称：具体类型
 *      }
 * }
 *
 * 类型名称：对应 Types.ts 文件中 export interface RoleCommandType {}, RoleCommandType 去掉Type后的名称
 * 字段名称：对应 Types.ts 文件类型中的具体字段
 * 具体类型格式如下：
 * { type: 'string' }
 * { type: 'number' }
 * { type: 'boolean' }
 * { type: 'array', items: { type: 'string' } }
 * ...
 */
export const fixTypes = {
  RoleVo: {
    authority: { type: "array", items: { type: "string" } },
  },
  RoleCommand: {
    authority: { type: "array", items: { type: "string" } },
  },
  AccountVo: {
    authority: { type: "array", items: { type: "string" } },
    accountList: { type: "array", items: { type: "string" } },
  },
};

/**
 * 说明：此对象是对后端接口自定义必选字段
 * 格式如下：
 * 类型名称：['字段名称']
 * ...
 */
export const requiredTypes = {
  AccountCommand: ["password"],
};
```

#### 2、发起请求

```javascript
// 基本请求 params 为请求参数。option为配置项，下面会列出常用的
const data = await historyApi.getCondition(params, option);
```

#### 3、数据模拟

```javascript
// 前提配置环境变量文件和vite配置文件
// "V_MOCK_BASE": "mock",
// '/mock': {
//     target: 'http://127.0.0.1:4523/m1/5761631-5445089-default/',  // 此处填写mock服务地址
//     rewrite: path => path.replace(/^\/mock/, '')
// }

// 第一种方式，直接在使用的地方设置mock配置项为true
const data = await historyApi.getCondition(params, {
  mock: true,
});

// 第二种方式在api/options.ts文件中修改
export const options = {
  History: {
    getCondition: {
      mock: true,
    },
  },
};
```

#### 4、禁用接口错误信息提示

```javascript
// 第一种方式，直接在使用的地方设置silent配置项为true
const data = await historyApi.getCondition(params, {
  silent: true,
});

// 第二种方式在api/options.ts文件中修改
export const options = {
  History: {
    getCondition: {
      silent: true,
    },
  },
};
```

#### 5、接口取消请求

```javascript
// 第一种方式，直接在使用的地方设置cancel配置项为true
const data = await historyApi.getCondition(params, {
  cancel: true,
});

// 第二种方式在api/options.ts文件中修改
export const options = {
  History: {
    getCondition: {
      cancel: true,
    },
  },
};

// 取消方式
historyApi.cancel("getCondition");
```

<br />

## License

Made with [ruhangs](https://github.com/ruhangs)

Published under [MIT License](./LICENSE).

<br />
