import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import vitePluginAutGenerateApi from '../../dist/index.js'

export default defineConfig({
	plugins: [Vue(), Inspect(), vitePluginAutGenerateApi({
		url: "http://10.180.34.1:19990/v3/api-docs/api",
		username: "admin",
		password: "admin",
	})]
})
