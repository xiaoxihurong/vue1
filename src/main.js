// 入口文件

import Vue from 'vue'



import './lib/mui/css/mui.min.css'  // 导入 MUI 的样式

import './lib/mui/css/icons-extra.css' // 导入扩展图标样式


import { Header, Swipe, SwipeItem, Button } from 'mint-ui'   // 按需导入 Mint-UI 中的组件 
Vue.component(Header.name, Header)



import app  from './App.vue'      // 导入 App 根组件

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})
