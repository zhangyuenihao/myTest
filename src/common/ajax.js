
import axios from 'axios'
import qs from 'qs'
import { getConfig } from './utils'
const { url } = getConfig()

const defaultConfig = {
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
}

const instance = axios.create(defaultConfig)
// 扩展axios配置
axios.defaults = Object.assign(axios.defaults, {
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
// ajax请求拦截器
instance.interceptors.request.use((config) => {
    // 在发送请求之前做某件事
    if (config.method === 'post' && config.data) {
        var data = config.data
        config.data = qs.stringify(data)
    }
    config.url = url + config.url
    return config
}, (error) => {
    return Promise.reject(error)
})
// 请求响应拦截器
instance.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    /* Message({
        message: error.message,
        type: 'error'
    }) */
    return Promise.reject(error)
})

export const get = (url, params, config = {}) => {
    return instance.get(url, {
        params
    }, { ...defaultConfig, ...config })
}

export const post = (url, params, config = {}) => {
    config = Object.assign(defaultConfig, config)
    return instance.post(url, params, { ...defaultConfig, ...config })
}

export default { get, post }
