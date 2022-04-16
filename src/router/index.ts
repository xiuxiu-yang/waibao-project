import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/localCache'

const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('@/view/admin/admin.vue'),
    redirect: '/admin/main',
    children: [
      {
        path: 'main',
        component: () => import('@/view/admin/main/main.vue'),
        redirect: '/admin/main/seckillActivity',
        children: [
          {
            path: 'userInfo',
            component: () => import('@/view/admin/main/userInfo/userInfo.vue')
          },
          {
            path: 'primarySelect',
            component: () =>
              import('@/view/admin/main/primarySelect/primarySelect.vue')
          },
          {
            path: 'seckillActivity',
            component: () =>
              import('@/view/admin/main/seckillActivity/seckillActivity.vue')
          },
          {
            path: 'seckillRule',
            component: () =>
              import('@/view/admin/main/seckillRule/seckillRule.vue')
          },
          {
            path: 'violationInfo',
            component: () =>
              import('@/view/admin/main/violationInfo/violationInfo.vue')
          },
          {
            path: 'seckillResult',
            component: () =>
              import('@/view/admin/main/seckillResult/seckillResult.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/view/login/login.vue'),
    redirect: '/login/admin',
    children: [
      {
        path: 'admin',
        component: () => import('@/view/login/admin/admin.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/admin'
  }
]

const router = createRouter({
  history: createWebHistory('/admins/'),
  routes
})

router.beforeEach((to) => {
  const token = localCache.getItem('ad_token')
  const currentPath = to.fullPath
  if (!token && currentPath.includes('/main')) {
    return '/login'
  }
  return true
})

export default router
