import { resolveComponent, h } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
// import UserProfile from '@/views/UserProfile.vue'
// import ArticlePage from '@/views/ArticlePage.vue'
// import AuthPage from '@/views/AuthPage.vue'
// import McvRegister from '@/views/auth/McvRegister.vue'
// import McvLogin from '@/views/auth/McvLogin.vue'

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
    component: () => import('@/views/auth/AuthPage.vue'),
    redirect: '/auth/register',
    children: [
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/auth/McvRegister.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/McvLogin.vue')
      }
    ]
  },
  {
    path: '/articles',
    name: 'articles',
    component: {
      render: () => h(resolveComponent('router-view'))
    },
    children: [
      {
        path: 'new',
        name: 'newArticle',
        component: () => import('@/views/articles/ArticlePage.vue')
      },
      {
        path: ':slug',
        name: 'article',
        component: () => import('@/views/articles/ArticlePage.vue')
      },
      {
        path: ':edit',
        name: 'editArticle',
        component: () => import('@/views/articles/ArticlePage.vue')
      }
    ]
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/UserProfile.vue')
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: {
      render: () => h(resolveComponent('router-view'))
    },
    children: [
      {
        path: ':slug',
        name: 'userProfile',
        component: () => import('@/views/UserProfile.vue')
      },
      {
        path: ':slug/favorites',
        name: 'userProfileFavorites',
        component: () => import('@/views/UserProfile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
