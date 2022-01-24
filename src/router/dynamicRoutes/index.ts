import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dome',
    component: Layout,
    redirect: '/dome',
    children: [
      { path: 'dome', name: 'dome', component: () => import('@/views/body/dome/index.vue') }
    ]
  }
]

export default dynamicRoutes
