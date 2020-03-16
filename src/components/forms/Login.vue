<template>
    <div>
        <form-base action="contact-list" class="form-base-container" v-bind:submit="login">
            <h2>Accudress Book</h2>
            <p>Enter any username or password to login</p>
            <p style="font-style:italic; font-size: 13px;">* indicates a required field</p>
            <p id="error" v-if="this.$data.formError">
            {{ errorText }}
        </p>
            <div>
                <label for="username">* Username</label>
                <input
                        id="username"
                        type="text"
                        v-model="username"
                        placeholder="Username"
                        v-on:change="handleUsernameInput($event.target.value)"
                >
            </div>
            <div>
                <label for="password">* Password</label>
                <input
                        id="password"
                        type="password"
                        v-model="password"
                        placeholder="Password"
                        v-on:change="handlePasswordInput($event.target.value)"
                >
            </div>
            <input type="submit" v-bind:value="this.$data.loading ? 'Logging in...' : 'Login'" v-bind:disabled="disableSubmitButton">
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
                loading: false,
            };
        },
        components: {
            'form-base': FormBase
        },
        computed: {
            // Keep the submit button disabled until both inputs have text
            disableSubmitButton() {
                return (!this.$data.username.trim() || !this.$data.password.trim());
            }
        },
        methods: {
            login: function () {
                // The button will be disabled until text is recognized in both
                // inputs, but will add form validation for added security
                    if (!this.username.trim() || this.username === undefined) {
                        this.errorText = "Please fill in a username field";
                        this.formError = true;
                    }

                    if (!this.password.trim() ||this.password === undefined) {
                        this.errorText = "Please fill in a password field";
                        this.formError = true;
                    }

                    this.$root.$data.appData.username = this.username;
                },
            // Change events
            handleUsernameInput(value) {
                this.$data.username = value;
            },
            handlePasswordInput(value) {
                this.$data.password = value;
            },
        }
    };
</script>

<style lang="sass" scoped>
    input
        padding: 5px
        margin: 5px
        display: table-cell

    label
        text-align: left

    #error
         color: red

    .form-base-container
        border: 1px solid black
        width: 50%
        margin: auto
        border-radius: 5px
        padding: 10px
        display: table

    .form-base-container div
        display: table-row
        width: 50%
</style>
