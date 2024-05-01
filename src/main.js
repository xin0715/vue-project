import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 定义懒加载插件

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
