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
    path: '/feed',
    name: 'yourFeed',
    component: GlobalFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
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
    path: '/articles/new',
    name: 'newArticle',
    component: ArticlePage
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: ArticlePage
  },
  {
    path: '/articles/:edit',
    name: 'editArticle',
    component: ArticlePage
  },
  {
    path: '/settings',
    name: 'settings',
    component: UserProfile
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
