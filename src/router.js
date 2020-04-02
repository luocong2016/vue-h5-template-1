import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    // 首页
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      meta: {pageTitle: '首页', pageIndex: 3, displayNavBar: true}
    },
    // 分类
    {
      path: '/classification',
      name: 'classification',
      component: () => import('@/views/classification'),
      meta: {pageTitle: '分类', pageIndex: 4, displayNavBar: true}
    },
    // 购物车
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart'),
      meta: {pageTitle: '购物车', pageIndex: 5, displayNavBar: true}
    },
    // 我
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/me'),
      meta: {pageTitle: '我', pageIndex: 6, displayNavBar: true}
    },
    // 登陆
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('@/views/sign/signIn'),
      meta: {pageTitle: '登陆', pageIndex: 2, displayNavBar: false}
    }
  ]
})
// 全局路由导航，动态该表页面标题，实现路由守卫
router.beforeEach((to,from,next) => {
  if (to.meta.pageTitle) document.title = to.meta.pageTitle
  const signType = store.state.loginType ? true : false
  if(to.name === 'signIn' || to.name === 'signOut') next()
  else signType ? next() : next('/signIn')
  next()
})
export default router
