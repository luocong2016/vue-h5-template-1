import Vue from 'vue'
import 'amfe-flexible'
import App from '@/App'
import http from '@/http'
import store from '@/store'
import router from './router'


Vue.config.productionTip = false

// 第三方库导入 ……&& 注册 
import Vueg from 'vueg';
import {
  Icon,
  Toast,
  Dialog,
  Popup,
  Button,
  Row,
  Col,
  NavBar,
  Tabbar,
  TabbarItem
} from 'vant'

Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Popup)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(TabbarItem)

// 全局方法
// 全局挂载axios
Vue.prototype.$http = http
// 开始加载动画
Vue.prototype.$startLoading = function () {
  Toast.loading({
    mask: false,
    duration: 0,
    forbidClick: true,
    message: '加载中...',
    loadingType: 'spinner'
  })
}
// 结束加载动画
Vue.prototype.$endLoading = function () {
  Toast.clear()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
