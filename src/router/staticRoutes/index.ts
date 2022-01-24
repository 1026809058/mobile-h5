/*
 * @Author: your name
 * @Date: 2022-01-24 15:18:08
 * @LastEditTime: 2022-01-24 15:18:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \移动端h5\src\router\invisible\index.ts
 */
import { RouteRecordRaw } from 'vue-router'

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/error/notFound.vue')
  }
]

export default staticRoutes
