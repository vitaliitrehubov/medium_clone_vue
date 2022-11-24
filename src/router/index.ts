import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
import UserProfile from '@/views/UserProfile.vue'
import ArticlePage from '@/views/ArticlePage.vue'
import AuthPage from '@/views/AuthPage.vue'
import McvRegister from '@/views/McvRegister.vue'
import McvLogin from '@/views/McvLogin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
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
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: ArticlePage
  },
  {
    path: '/user-profile/:slug',
    name: 'userProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
