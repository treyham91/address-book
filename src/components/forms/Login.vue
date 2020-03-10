<template>
    <form>
        <p v-if="this.formError">{{ errorText }}</p>
        <label for="username">Username</label>
        <input id="username" type="text" v-model="this.username">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="this.password">
        <input type="button" v-on:click="login">
    </form>
</template>

<script lang="ts">
    import Vue from 'vue'
    //import FormBase from './FormBase'

    interface UserLogin {
        username: string;
        password: string;
    }

    const Login = Vue.extend({
        name: 'Login',
        data () {
            return {
                formError: false,
                errorText: "",
                username: "",
                password: "",
                state: {
                    formLoading: false,
                }
            }
        },
        // components: {
        //     FormBase
        // },
        methods: {
            login: async function (username: string, password: string): Promise<any> {

                let loginPromise = new Promise(() => {
                    setTimeout(() => {
                        if (username === "" || username == undefined) {
                            this.errorText = "Please fill in a username field";
                            this.formError = true;
                        } else if (password === "" || password == undefined) {
                            this.errorText = "Please fill in a password field";
                            this.formError = true;
                        } else {
                            // we will only need to store the username
                            this.username = username;
                        }
                    }, 1000);
                })

                let success = await loginPromise;
                return success;
            }
        }
    });

    export default Login;
</script>

<style lang="sass" scoped>

</style>