import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


//全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        console.log(el, binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {//當前所監聽的布林值
                console.log(isIntersecting)
                if (isIntersecting) {
                    // 進入視線區
                    el.src = binding.value
                }

            },
        )
    }
})
// export const lazyPlugin = {
//     install(app) {
//         // 懒加载指令逻辑
//         app.directive('img-lazy', {
//             mounted(el, binding) {
//                 // el: 指令绑定的那个元素 img
//                 // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
//                 console.log(el, binding.value)
//                 const { stop } = useIntersectionObserver(
//                     el,
//                     ([{ isIntersecting }]) => {
//                         console.log(isIntersecting)
//                         if (isIntersecting) {
//                             // 进入视口区域
//                             el.src = binding.value
//                             stop()
//                         }
//                     },
//                 )
//             }
//         })
//     }
// }