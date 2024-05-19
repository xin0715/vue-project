import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@//views/Member/components/UserOrder.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'category/:id',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo,
            },
            {
              path: 'order',
              component: UserOrder,
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
  scrollBehavior() {
    //url切換自動滾動到頁面上方
    return {
      top: 0
    }
  }
})

export default router
