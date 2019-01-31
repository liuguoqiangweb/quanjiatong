// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Demo05Header from '@/components/Demo05Header'

Vue.config.productionTip = false
// 使能Vuex这个插件
import Vuex from 'vuex'
Vue.use(Vuex)

// 将demo05设置为一个全局组件
Vue.component('myHeader', Demo05Header)
// 为了方便不同的组件直接借助bus来完成通信工作，准备将bus设置为vue全局可访问的变量
Vue.prototype.$bus = new Vue()

// 配置Vuex
const myStore = new Vuex.Store({
  // 定义数据
  state: {
    count:1
  },
  // 定义数据的修改操作
  mutations: {
    modifyCount(state) { 
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: myStore,
  components: { App },
  template: '<App/>'
})
