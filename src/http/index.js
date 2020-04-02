import store from '../store'
import axios from 'axios'
import router from '../router'
import {Toast,Dialog} from 'vant'

axios.defaults.timeout = 0
// axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_BASEURL

let loading

// http请求拦截器
axios.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers['token'] = store.state.token
    }
    return config
}, error => {

    alert('加载超时')
    return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
        const status = data.data.Code;
        if (status == 0) {
            Dialog.alert({
                title: '提示',
                message: data.data.Msg,
                beforeClose: (action,done) => {
                    done(false)
                    Toast.clear()
                    Dialog.close()
                }
            })
            return Promise
        } else if (status == 401) {
            Dialog.alert({
                title: '提示',
                confirmButtonText: '去登陆',
                message: 'token无效，请重新登录',
                showConfirmButton: true,
                beforeClose: (action,done) => {
                    done(false)
                    Toast.clear()
                    store.commit('setLogin',null)
                    store.commit('setToken',null)
                    store.commit('setUserInfo',null)
                    router.replace({name: 'login'})
                    Dialog.close()
                }

            })
            return Promise
        }
        return data.data
    },
    // 500 400相关写这里
    error => {
        console.log('error',error);
    })

export default axios