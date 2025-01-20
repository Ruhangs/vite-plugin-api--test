import type { Plugin } from 'vite'
import { createPluginName } from './shared/create'
import { GenerateApiParams } from 'swagger-typescript-api'
import { autoGenerateApi } from './gen'

interface fixType {
	type: string
	item?: {
		type: string
	}
}

interface cutomeOption {
	url: string,
	username?: string,
	password?: string
	blobResponseTypeNames?: string[],
	formatModuleNames?: Record<string, string>,
	ignoreModuleNames?: string[],
	fixTypes?: Record<string, Record<string, fixType>>,
	requiredTypes?: Record<string, string[]>
}

interface ApiInstanceOptionItem {
	mock?: boolean,
	silennt?: boolean,
	cancel?: boolean
}

export type ApiInstanceOption = Record<string, Record<string, ApiInstanceOptionItem>>

export type GenerateApiOption = GenerateApiParams & cutomeOption

const useName = createPluginName(false)

const AutoGenerateApi = (options?: Partial<GenerateApiOption>): Plugin => {
	return {
		name: useName('auto-generate-api'),
		enforce: "pre",
		apply: "serve",
		buildStart() {
			autoGenerateApi(options).catch((error) => {
				console.error(error)
			})
		}
	}
}

export default AutoGenerateApi
export { AutoGenerateApi }
