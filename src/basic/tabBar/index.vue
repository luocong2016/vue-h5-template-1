<template>
    <van-tabbar v-model="active" :active-color="tabBarActiveColor" @change="changeActive">
      <van-tabbar-item v-for="(item,index) of data"  :key="index" :icon="item.icon" :to="item.path" :name="item.name">{{item.label}}</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            // ...mapState(
            //     ["tabBarActive"]
            // )
            active: {
               get () {
                    return this.$store.state.tabBarActive
               },
            //    这里之所以写set是因为不屑要报错
               set (val) {}
            }
        },
        props: {
            data: {
                type: Array,
                default: []
            },
            tabBarActiveColor: {
                type: String,
                default: '#e43130'
            }
            
        },
        methods: {
            changeActive (active) {
                this.$emit('changeActive',active)
            }
        }
    }
</script>

