<template>
    <div id="app">
        <div class="bg">
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
                                <div class="form-input"><input type="text" v-model="loginForm.user" placeholder="请输入管理员姓名" maxlength="20"></div>

                            </div>
                            <div class="form-item pwd">
                                <div class="form-input"><input type="text" v-model="loginForm.pwd" placeholder="请输入登录密码" maxlength="20"></div>

                            </div>
                            <div class="form-item rember">
                                <div class="form-input" :class="{active:loginForm.check}" @click="checkrember"><input type="checkbox" v-model="loginForm.check"><span class="checkbox">记住用户名</span></div>

                            </div>
                            <div class="form-item">
                                <button @click="login">登录</button>
                            </div>
                        </div>

                    </div>
                    <p class="copyright">copyright © 2016 包图网 All rights Reserved</p>
                </div>
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
            loginForm: {
                user: '',
                pwd: '',
                check: true
            }

        }
    },
    methods: {
        checkrember () {
            debugger
            if (this.loginForm.check) {
                this.loginForm.check = false
            } else {
                this.loginForm.check = true
            }
        },
        async login () {
            /* let _this = this */
            if (!this.loginForm.user || !this.loginForm.pwd) {
                this.$message({
                    message: '账号或密码不能为空',
                    type: 'warning'
                })
                return
            }
            try {
                await this.$http.get('/login', this.loginForm)
                window.location.href = 'http://wwww.baidu.com'
            } catch (e) {

            }
        }
    },
    computed: {},
    created () {

    },
    async mounted () {

    },
    components: {}
}
</script>

<style lang="scss" scoped>

</style>
