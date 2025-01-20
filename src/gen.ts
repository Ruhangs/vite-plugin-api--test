import path from "path";
import fs from "fs-extra";
import ejs from "ejs";
import _ from "lodash";
import { generateApi } from "swagger-typescript-api";
import {
    readFileIfExists,
    saveFile,
    generateFileHash,
    generateFilePrefix,
    axiosFilePrefix,
    Base64,
} from "./utils";

const __filename = new URL(import.meta.url).pathname;

const __dirname = path.dirname(__filename);

// Swagger API 生成配置
const apiGenerationOptions = {
    authorizationToken: `Basic ${Base64.encode("admin:admin")}`,
    templates: path.resolve(__dirname, "../templates"),
    silent: true,
    cleanOutput: true,
    modular: true,
    httpClientType: "axios",
    defaultResponseAsSuccess: false,
    generateClient: true,
    generateResponses: true,
    typeSuffix: "Type",
    prettier: {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: "all",
        parser: "typescript",
    },
    singleHttpClient: true,
    generateUnionEnums: true,
    fixInvalidTypeNamePrefix: "Type",
    fixInvalidEnumKeyPrefix: "Value",
    codeGenConstructs: (constructs) => ({
        ...constructs,
        TypeField: ({ readonly, key, optional, value }) => {
            // 自定义 TypeField 的生成逻辑(调整枚举的问题)
            let temp = value;
            if (value.includes("Enum")) {
                const regex = /(?:\w+Enum\.)?(\w+)/;
                const enums = value.split("|");
                temp = enums
                    .map((i) => (i.match(regex) ? `"${i.match(regex)[1]}"` : null))
                    .join(" | ");
            }
            return _.compact([
                readonly && "readonly ",
                key,
                optional && "?",
                ": ",
                temp,
            ]).join("");
        },
    }),
    hooks: {
        onFormatRouteName: (routeInfo, templateRouteName) => {
            const { pathArgs, route, method } = routeInfo;
            const segments = route.split("/");
            const lastSegment = segments.at(-2);
            const name = pathArgs.length
                ? `${lastSegment.includes(method) ? _.camelCase(lastSegment) + "By" + _.upperFirst(pathArgs[0].name) : method + _.upperFirst(_.camelCase(lastSegment)) + "By" + _.upperFirst(pathArgs[0].name)}`
                : _.camelCase(segments.pop());
            return name;
        },
        onPrepareConfig: (currentConfiguration) => {
            const { config } = currentConfiguration;
            config.fileNames.httpClient = "HttpClient";
            config.fileNames.dataContracts = "Types";
            return { ...currentConfiguration, config };
        },
        onCreateComponent: (component) => { },
        onCreateRoute: (routeData) => { },
    },
};

const handelOptions = (config) => {
    const {
        username,
        password,
        blobResponseTypeNames,
        formatModuleNames,
        formatRouteNames,
        ignoreModuleNames,
        fixTypes,
        requiredTypes,
        ...params
    } = config;
    const options = { ...apiGenerationOptions, ...params };
    if (!config.url || !config.url.length) {
        throw new Error("url 不能为空");
    }
    if (username && password) {
        const token = Base64.encode(`${username}:${password}`);
        options["authorizationToken"] = `Basic ${token}`;
    }
    if (blobResponseTypeNames || ignoreModuleNames || formatModuleNames) {
        options["hooks"]["onCreateRoute"] = (routeData) => {
            const { raw } = routeData;
            if (
                blobResponseTypeNames &&
                blobResponseTypeNames.includes(raw.summary)
            ) {
                routeData.responseBodySchema.contentKind = "BLOB";
            }
            if (ignoreModuleNames && ignoreModuleNames.includes(raw.moduleName)) {
                routeData.namespace = "";
            }
            if (formatModuleNames && formatModuleNames[raw.moduleName]) {
                routeData.namespace = formatModuleNames[raw.moduleName];
            }
            if (formatRouteNames && formatRouteNames[routeData.namespace]?.[routeData.routeName.usage]) {
                routeData.routeName.original = formatRouteNames[routeData.namespace][routeData.routeName.usage]
            }
            return routeData;
        };
    }
    if (fixTypes || requiredTypes) {
        options["hooks"]["onCreateComponent"] = (component) => {
            if (fixTypes[component.typeName]) {
                Object.entries(fixTypes[component.typeName]).forEach(([key, value]) => {
                    component.rawTypeData.properties[key] = value;
                });
            }
            if (requiredTypes[component.typeName]) {
                const requiredArr = component.rawTypeData["required"]
                    ? component.rawTypeData["required"]
                    : [];
                component.rawTypeData["required"] = [
                    ...requiredArr,
                    ...requiredTypes[component.typeName],
                ];
            }
            return component;
        };
    }
    return options;
};

// 自动生成 API 客户端
export async function autoGenerateApi(config) {
    try {
        console.log("✔️ Starting API client generation...");
        const axiosTemplatePath = path.resolve(__dirname, "../templates/axios.ejs");
        const apiOptionTemplatePath = path.resolve(
            __dirname,
            "../templates/option.ejs"
        );
        const recordFilePath = path.resolve(__dirname, "../records/version.json");
        const outputDir = path.resolve("src/api/module");
        const apiIndexPath = path.resolve("src/api/index.ts");
        const apiOptionPath = path.resolve("src/api/option.ts");

        const previousRecord = readFileIfExists(recordFilePath)
            ? JSON.parse(readFileIfExists(recordFilePath))
            : {};

        const flag = fs.pathExistsSync(path.resolve(__dirname, "../templates"))
        if (!flag) {
            console.warn("✖️ Templates not found. Skipping rendering.");
            return
        }

        // 生成 API 客户端
        const generationResult = await generateApi(handelOptions(config));

        fs.ensureDirSync(outputDir);

        let filePrefix = "";

        for (const {
            fileName,
            fileContent,
            fileExtension,
        } of generationResult.files) {
            if (!previousRecord[fileName]) {
                previousRecord[fileName] = { hash: "", time: "" }; // Initialize hash and time if not set
            }
            const previousHash = previousRecord[fileName].hash || "";
            const newHash = generateFileHash(fileContent);
            if (newHash !== previousHash) {
                console.log(`✔️ The ${fileName} file has changed. Updating...`);
                const newTime = new Date().toLocaleString();
                previousRecord[fileName].hash = newHash;
                previousRecord[fileName].time = newTime;
                filePrefix = generateFilePrefix(newHash, newTime);
                const finalContent = `${filePrefix}${fileContent}`;
                saveFile(
                    path.resolve(outputDir, `${fileName}${fileExtension}`),
                    finalContent
                );
            } else {
                console.log(`✔️ No changes detected in ${fileName} file.`);
            }
        }
        saveFile(recordFilePath, JSON.stringify(previousRecord, null, 4));
        // 渲染 Axios 模板
        if (fs.existsSync(axiosTemplatePath)) {
            console.log("✔️ Rendering Axios template...");
            const templateContent = fs.readFileSync(axiosTemplatePath, "utf8");
            const renderedContent = ejs.render(templateContent, {
                data: generationResult.files,
            });
            saveFile(apiIndexPath, `${axiosFilePrefix}${renderedContent}`);
            console.log(`✔️ Axios template rendered and saved to ${apiIndexPath}`);
        } else {
            console.warn("✖️ Axios template not found. Skipping rendering.");
        }

        if (!fs.existsSync(apiOptionPath) && fs.existsSync(apiOptionTemplatePath)) {
            const templateContent = fs.readFileSync(apiOptionTemplatePath, "utf8");
            saveFile(apiOptionPath, templateContent);
        }

        console.log("✔️ API client generation completed.");
    } catch (error: any) {
        console.error("✖️ Error during API generation:", error.message);
    }
}
