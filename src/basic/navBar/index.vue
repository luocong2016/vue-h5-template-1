<template>
  <van-nav-bar :title="$route.meta.title" v-bind="$attrs" v-on="$listeners">
    <template v-if="!rightText" #right>
      <van-icon :name="rightIcon" :size="rightIconSize" right-text="搜索" />
    </template>
  </van-nav-bar>
</template>

<script>
  export default {
    props: {
      // 标题
      title: {
        type: String,
        default: '标题名'
      },
      // 是否固定在顶部
      isFixed: {
        type: Boolean,
        default: false,
      },
      // 是否显示左侧箭头
      isLeftArrow: {
        type: Boolean,
        default: false,
      },
      // 左侧文字
      leftText: {
        type: String,
        default: ''
      },
      // 右侧文字-有值显示文字，无值显示图标
      rightText: {
        type: String,
        default: ''
      },
      // 右侧图标
      rightIcon: {
        type: String,
        default: '  '
      },
      // 右侧图标大小
      rightIconSize: {
        type: String,
        default: '18'
      },
    },
    methods: {
      // 点击左侧事件
      clickLeft () {
        this.$emit('clickLeft')
      },
      // 点击右侧事件
      clickRight () {
        this.$emit('click-right')
      }
    }
  }

</script>

<style lang="less" scoped>

</style>
