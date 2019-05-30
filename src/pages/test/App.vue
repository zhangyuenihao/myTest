<template>
    <div id="app">
        <div class="test-warp">
            <p>我愛北京天安門</p>
        </div>
    </div>
</template>

<script>
import api from 'services/index'
export default {
    name: 'App',
    data () {
        return {}
    },
    methods: {
        async login () {
            try {
                const data = await api.login({})
                console.log(data)
            } catch (e) {
                alert(e.message)
            }
        }
    },
    computed: {},
    created () {
    },
    mounted () {
        this.login()
    },
    components: {}
}
</script>

<style lang="scss" scoped>
    @import "~assets/style/variable.scss";
 .test-warp{
     margin: 10px auto;
     background:$background;
 }
</style>
