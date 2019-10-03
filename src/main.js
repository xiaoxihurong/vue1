// 入口文件

import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)


import './lib/mui/css/mui.min.css'  // 导入 MUI 的样式

import './lib/mui/css/icons-extra.css' // 导入扩展图标样式

// 按需导入 Mint-UI 中的组件 
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


import app  from './App.vue'      // 导入 App 根组件
import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
