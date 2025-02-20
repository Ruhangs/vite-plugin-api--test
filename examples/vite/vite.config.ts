import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import vitePluginAutGenerateApi from '../../dist/index.js'

export default defineConfig({
	plugins: [Vue(), Inspect(), vitePluginAutGenerateApi([{
		url: "http://10.180.34.1:19990/v3/api-docs/api",
		username: "admin",
		password: "admin",
		outputDir: "src/api/module1/modules",
		baseUrl: "/api/module1",
	},{
		url: "http://10.180.34.1:19990/v3/api-docs/api",
		username: "admin",
		password: "admin",
		outputDir: "src/api/module2/modules",
		baseUrl: "/api/module1",
	}])]
})
