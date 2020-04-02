<template>
    <div>
        <van-button type="primary" size="large" @click="dataFormSubmit">马上登录</van-button>
    </div>
</template>

<script>
    export default {
        mounted () {
            this.$toast('请先登录')
        },
        methods: {
            dataFormSubmit () {
                const _self = this
                // this.$startLoading()
                _self.$store.commit('setLoginType','是')
                _self.$router.replace({name: 'home'})
            }
        }        
    }
</script>

<style lang="less" scoped>

</style>