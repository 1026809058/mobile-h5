/*
 * @Author: your name
 * @Date: 2021-12-02 11:39:52
 * @LastEditTime: 2022-01-24 14:55:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { setupStore } from './store/index'
//全局组件注册
import globalComponents from './components/globalComponents'
//全局样式
import './scss/global.scss'
//iconfont图标css
import './assets/iconfont/iconfont.css'
;(async () => {
  const app = createApp(App)
  //路由
  app.use(router)
  //全局组件注册
  globalComponents(app)
  //vuex
  setupStore(app)
  app.mount('#app')
})()
