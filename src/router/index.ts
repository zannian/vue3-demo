import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/home',
      component: MainPage,
      children: [
        {
          path: 'home',
          component: HomePage
        },
        {
          path: 'item1',
          component: () => import('@/views/ItemPage1.vue')
        },
        {
          path: 'item2',
          component: () => import('@/views/ItemPage2.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home'
    },
  ]
})

export default router
