import App from './App.vue'
/* import store from './store'
import router from './router' */
import init from 'common/base'

window.jsLoaded = function () {
    init({
        render: h => h(App)
    })
}
