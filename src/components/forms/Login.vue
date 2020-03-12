<template>
    <div>
        <form-base class="form-base-container" v-bind:submit="login(username, password)">
            <h2>Accudress</h2>
            <p>Enter any username or password to login</p>
            <p style="font-style:italic;">* indicates a required field</p>
            <div>
                <label for="username">Username</label>
                <input
                        id="username"
                        type="text"
                        v-model="username"
                        placeholder="Username"
                        @change="event => handleUsernameInput(event.target.value)"
                >
            </div>
            <div>
                <label for="password">* Password</label>
                <input
                        id="password"
                        type="password"
                        v-model="password"
                        placeholder="Password"
                        @change="event => handlePasswordInput(event.target.value)"
                >
            </div>
            <input type="submit" value="Submit" @submit="login(username, password)" v-bind:disabled="disableSubmitButton()">
        </form-base>
    </div>
</template>

<script>
    import FormBase from "@/components/forms/FormBase";

    export default {
        name: "Login",
        data () {
            return {
                username: "",
                password: "",
                errorText: "",
                formError: false,
            };
        },
        components: {
            'form-base': FormBase
        },
        methods: {
            login: async function (username, password) {

                let loginPromise = new Promise(() => {
                    setTimeout(() => {
                        if (!username.trim() || username === undefined) {
                            this.errorText = "Please fill in a username field";
                            this.formError = true;
                        } else if (!password.trim() || password === undefined) {
                            this.errorText = "Please fill in a password field";
                            this.formError = true;
                        } else {
                            // we will only need to store the username
                            this.username = username;
                        }
                    }, 1000);
                })

                return await loginPromise;
            },
            handleUsernameInput(value) {
                this.$data.username = value;
                console.log(this.$data.username);
            },
            handlePasswordInput(value) {
                this.$data.password = value;
                console.log(this.$data.password);
            },
            disableSubmitButton() {
                return (!this.$data.username.trim() || !this.$data.password.trim());
            }
        }
    };
</script>

<!--<style lang="sass" scoped>-->

<!--</style>-->

<style lang="sass" scoped>
    input
        padding: 5px
        margin: 5px
        display: table-cell

    label
        text-align: left

    .form-base-container
        border: 1px solid black
        width: 50%
        margin: auto
        border-radius: 5px
        padding: 10px
        display: table

    .form-base-container div
        display: table-row
</style>
