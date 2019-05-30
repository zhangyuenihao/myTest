import App from './App.vue'
import init from 'common/base'
/* import store from './store' */
import router from './router'
init({
    router,
    render: h => h(App)
})
console.log(Math.random())
