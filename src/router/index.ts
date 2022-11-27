import { resolveComponent, h } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/feed/FeedLayout.vue'),
    children: [
      {
        path: '',
        name: 'globalFeed',
        component: () => import('@/views/feed/GlobalFeed.vue')
      },
      {
        path: 'feed',
        name: 'yourFeed',
        component: () => import('@/views/feed/YourFeed.vue')
      },
      {
        path: 'tags/:slug',
        name: 'tag',
        component: () => import('@/views/feed/TagFeed.vue')
      },
    ]
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
        component: () => import('@/views/articles/CreateArticle.vue')
      },
      {
        path: ':slug',
        name: 'article',
        component: () => import('@/views/articles/ArticlePage.vue')
      },
      {
        path: 'edit/:slug',
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
