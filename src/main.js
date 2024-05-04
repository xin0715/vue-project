import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 定义懒加载插件

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
