import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/user',
    redirect: '/user/main',
    component: () => import('@/view/user/user.vue'),
    children: [
      {
        path: 'main',
        component: () => import('../view/user/main/main.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/view/admin/admin.vue'),
    redirect: '/admin/main',
    children: [
      {
        path: 'main',
        component: () => import('@/view/admin/main/main.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/view/login/login.vue'),
    redirect: '/login/user',
    children: [
      {
        path: 'user',
        component: () => import('@/view/login/user/user.vue')
      },
      {
        path: 'admin',
        component: () => import('@/view/login/admin/admin.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
