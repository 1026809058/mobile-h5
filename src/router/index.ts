/*
 * @Author: your name
 * @Date: 2021-12-02 15:18:45
 * @LastEditTime: 2021-12-22 14:25:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import staticRoutes from '@/router/staticRoutes/index'
import dynamicRoutes from '@/router/dynamicRoutes/index'

const routes: Array<RouteRecordRaw> = [...staticRoutes, ...dynamicRoutes]
console.log('routes----', routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
