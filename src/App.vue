<template>
  <div id="app">
    <transition :name="transition_name">
      <router-view class="child-view"></router-view>
    </transition>
    <m-tab-bar :data="tabBarData" v-if="$route.meta.displayNavBar" @changeActive="changeTabBarActive"></m-tab-bar>
  </div>
</template>

<script>
  import MTabBar from '@/basic/tabBar'
  export default {
    data () {
      return {
        tabBarData: [
          {label: '首页', name: 'home', icon: 'wap-home', path: '/home'},
          {label: '分类', name: 'classification', icon: 'smile-comment', path: '/classification'},
          {label: '购物车', name: 'cart', icon: 'shopping-cart', path: '/cart'},
          {label: '我', name: 'me', icon: 'manager', path: '/me'}
        ],
        transition_name: ''
      }
    },
    watch: {
      $route (to, from) {
        if (to.meta.pageIndex > from.meta.pageIndex) this.transition_name = "van-slide-left";
        else this.transition_name = "van-slide-right";
      }
    },
    components: {
      MTabBar,
    },
    methods: {
      // 监听tabBar变化，派发给store，以此避免刷新tabBarActive初始化问题
      changeTabBarActive (active) {
        if (active) this.$store.commit('setTabBarActive',active)
        
      }
    }
  }
</script>

<style lang="less">
#app {
  font-size: 16px;
  min-height: 100vh;
  position: relative;
}

.child-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
