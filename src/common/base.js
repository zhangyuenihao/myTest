import Vue from 'vue'
import ajax from './ajax'
import './console'
import 'assets/style/base.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = ajax
Vue.use(ElementUI)
export default function init (config, root = '#app') {
    /*eslint-disable*/
    new Vue({
        el: root,
        ...config
    })
}
