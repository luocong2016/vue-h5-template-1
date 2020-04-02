<template>
    <van-button
        :type="btnType"
        :url="btnUrl"
        :size="btnSize"
        :round="btnRound"
        :block="btnBlock"
        :plain="btnPlain"
        :loading="btnLoading"
        :disabled="btnDisabled"
        :loading-text="loadingText"
        @click="clickBtn"
        >
        {{btnText}}
    </van-button>
</template>

<script>
    export default {
        props: {
            // 按钮文字内容
            btnText: {
                type: String,
                default: '按钮文本'
            },
            btnUrl: {
                type: String,
                default: ''
            },
            // 按钮大小，分为:mini/small/large
           btnSize: {
               type: String,
               default: 'normal'
           },
            // 按钮类型，分为:primary/info/danger/warning/default
            btnType: {
                type: String,
                default: 'default'
            },
            // 是否为块级按钮
            btnBlock: {
                type: Boolean,
                default: false
            },
            // 是否开启圆角按钮
            btnRound: {
                type: Boolean,
                default: false
            },
            // 是否为朴素按钮(就是没有背景色的按钮)
            btnPlain: {
                type: Boolean,
                default: false
            },
            // 是否开启按钮Loading
            btnLoading: {
                type: Boolean,
                default: false
            },
            // 是否禁用按钮
            btnDisabled: {
                type: Boolean,
                default: false
            },
            // 加载状态下是否显示文字
            loadingText: {
                type: String,
                default: 'loading...'
            }
        },
        methods: {
            // 点击按钮向外部组件暴露事件，方便外部操作/取值等等
            clickBtn () {
                this.$emit('clickBtn')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>