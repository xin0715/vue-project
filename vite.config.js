import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: "sass" })
      ],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', // 替换为你的实际 API 地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 确保路径重写符合你的需求
      }
    }
  },
  base: '/vue-project/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      }
    }
  }
})
