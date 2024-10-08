import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/view/login/index.vue'),
  },
  {
    path: '/login/serviceAgree',
    component: () => import('@/view/login/serviceAgree.vue'),
  },
  {
    path: '/login/privacyPolicy',
    component: () => import('@/view/login/privacyPolicy.vue'),
  },
  {
    path: '/task',
    component: () => import('@/view/task/index.vue'),
  },
  {
    path: '/task/search',
    component: () => import('@/view/task/search.vue'),
  },
  {
    path: '/task/details/:id',
    component: () => import('@/view/task/details.vue'),
  },
  {
    path: '/task/companySource/:id',
    component: () => import('@/view/task/companySource.vue'),
  },
  {
    path: '/contract',
    component: () => import('@/view/contract/index.vue'),
  },
  {
    path: '/contract/details/:id',
    component: () => import('@/view/contract/details.vue'),
  },
  {
    path: '/contract/progress/:id',
    component: () => import('@/view/contract/progress.vue'),
  },
  {
    path: '/message',
    component: () => import('@/view/message/index.vue'),
  },
  {
    path: '/message/systemList',
    component: () => import('@/view/message/systemList.vue'),
  },
  {
    path: '/message/systemDetails/:id',
    component: () => import('@/view/message/systemDetails.vue'),
  },
  {
    path: '/message/talk',
    component: () => import('@/view/message/talk.vue'),
  },
  {
    path: '/my',
    component: () => import('@/view/my/index.vue'),
  },
  {
    path: '/my/user',
    component: () => import('@/view/my/index.vue'),
  },
  {
    path: '/my/user/authReal',
    component: () => import('@/view/my/user/authReal.vue'),
  },
  {
    path: '/my/user/certified',
    component: () => import('@/view/my/user/certified.vue'),
  },
  {
    path: '/my/user/identitySwitch',
    component: () => import('@/view/my/user/identitySwitch.vue'),
  },
  {
    path: '/my/set',
    component: () => import('@/view/my/set/index.vue'),
  },
  {
    path: '/my/feedback',
    component: () => import('@/view/my/feedback/index.vue'),
  },
  {
    path: '/my/account',
    component: () => import('@/view/my/account/index.vue'),
  },
  {
    path: '/my/account/advance',
    component: () => import('@/view/my/account/advance.vue'),
  },
  {
    path: '/my/account/coinExchange',
    component: () => import('@/view/my/account/coinExchange.vue'),
  },
  {
    path: '/my/account/depositExplain',
    component: () => import('@/view/my/account/depositExplain.vue'),
  },
  {
    path: '/my/collect',
    component: () => import('@/view/my/collect/index.vue'),
  },
  {
    path: '/talent',
    component: () => import('@/view/talent/index.vue'),
  },
  {
    path: '/talent/details/:id',
    component: () => import('@/view/talent/details.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
