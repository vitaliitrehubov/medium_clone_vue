import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthPage from '@/views/AuthPage.vue'
import McvRegister from '@/views/McvRegister.vue'
import McvLogin from '@/views/McvLogin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/register',
    children: [
      {
        path: 'register',
        name: 'register',
        component: McvRegister
      },
      {
        path: 'login',
        name: 'login',
        component: McvLogin
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
