<template>
    <div id="app">
        <div class="login-warper">
            <div class="main-content">
                <div class="login-icon"></div>
                <div class="login-form">
                    <div class="title-warpe">
                        <h3 class="form-title">包图网智能硬件平台</h3>
                        <p class="title-tip">一款让设计更美好的智能AI平台</p>
                    </div>
                    <div class="form-content">
                        <div class="form-item user">
                            <div class="form-input"><input type="text" placeholder="请输入管理员姓名"></div>
                        </div>
                        <div class="form-item pwd">
                            <div class="form-input"><input type="text" placeholder="请输入登录密码"></div>
                        </div>
                        <div class="form-item rember">
                            <span class="checkbox">记住用户名</span>
                        </div>
                        <div class="form-item">
                            <button>登录</button>
                        </div>
                    </div>

                </div>
                <p>copyright © 2016 包图网 All rights Reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
import './index.scss'
export default {
    name: 'App',
    data () {
        return {

        }
    },
    methods: {},
    computed: {},
    created () {

    },
    async mounted () {
        const data = await this.$http.get('/login')
    },
    components: {}
}
</script>

<style lang="scss" scoped>

</style>
