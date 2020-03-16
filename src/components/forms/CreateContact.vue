<template>
    <dialog v-bind:class="open ? 'create-contact-shown': 'create-contact-hidden'">
        <FormBase v-bind:submit="addContact">
            <p id="error" v-if="this.formError">
                {{ errorText }}
            </p>
            <div></div><div id="close" @click="closeForm">X</div>
            <div>
                <label for="photo">Photo</label>
                <input id="photo" type="file" @change="event => inputFileType(event)">
            </div>
            <div>
                <label for="salutation"></label>
                <select id="salutation" v-model="salutation">
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                </select>
            </div>
            <div>
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" v-model="firstName">
            </div>
            <div>
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" v-model="lastName">
            </div>
            <div>
                <label for="companyName">Company Name</label>
                <input id="companyName" type="text" v-model="companyName">
            </div>
            <div id="phone-number-field">
                <label for="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="tel" v-model="phoneNumber">
                <button v-on:click="setPrimaryNumber($event)">Set as primary</button>
            </div>
            <div><button id="add-number" v-on:click="addNewNumber($event)">Add number</button></div>
            <div>
                <input type="submit" value="Create" v-bind:disabled="disableSubmitButton">
            </div>
        </FormBase>
    </dialog>
</template>

<script>
    import FormBase from "@/components/forms/FormBase";

    export default {
        name: "CreateContact",
        components: {
            FormBase,
        },
        data () {
            return {
                photo: "",
                salutation: "",
                firstName: "",
                lastName: "",
                companyName: "",
                phoneNumber: Array(0),
                errorText: "",
                formError: false,
            }
        },
        computed: {
            // Keep the submit button disabled until all inputs have text
            disableSubmitButton() {
                return (!this.salutation.trim() || !this.firstName.trim()
                        || !this.lastName.trim()  || !this.companyName.trim()
                        || !this.phoneNumber.toString().trim());
            },
        },
        props: {
            open: Boolean,
            closeForm: Function,
        },
        methods: {
            addContact: async function() {
                let contactPromise = new Promise(() => {
                    if (!this.salutation.trim() || this.salutation === undefined) {
                        this.errorText = "Please fill in the salutation field";
                        this.formError = true;
                    } else if (!this.firstName.trim() || this.firstName === undefined) {
                        this.errorText = "Please fill in the first name field";
                        this.formError = true;
                    } else if (!this.lastName.trim() || this.lastName === undefined) {
                        this.errorText = "Please fill in the last name field";
                        this.formError = true;
                    } else if (!this.companyName.trim() || this.companyName === undefined) {
                        this.errorText = "Please fill in the company name field";
                        this.formError = true;
                    } else {
                        const phoneNumbers = document.querySelector("input[type='tel']");
                        for (let i = 0; i < phoneNumbers.length; i++) {
                            if (!phoneNumbers[i].value.trim() || phoneNumbers[i].value === undefined
                                || typeof Number.parseInt(phoneNumbers[i].value) != "number") {
                                this.errorText = "Please enter a valid phone number";
                                this.formError = true;
                            }

                            this.phoneNumber.push(phoneNumbers[i].value);
                        }

                        console.log(this.$data);
                        if (!this.formError) this.$root.$data.appData.addContact(this.$data);
                    }
                })

                contactPromise
                    .then(() => console.log("Contact added successfully"))
                    .catch(err => this.errorText = err.msg())
            },
            inputFileType(event) {
                this.$data.photo = event.target.files[0];
            },
            addNewNumber: function (event) {
                if (event) {
                    event.preventDefault();
                }
                let phoneNumberField = document.getElementById("phone-number-field");
                let primaryButton = document.createElement("button");
                const newInputWrapper = document.createElement("div");
                const newInput = document.createElement("input");

                primaryButton.onclick = this.setPrimaryNumber();
                primaryButton.innerText = "Set as primary";
                newInputWrapper.style.padding = "10px";
                newInput.type = "tel";

                newInputWrapper.append(newInput);
                phoneNumberField.append(newInputWrapper);
                newInputWrapper.append(primaryButton);
            },
            setPrimaryNumber(event) {
                if (event) {
                    event.preventDefault();
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    form
        border: 1px solid black
        padding: 10px
        width: 50%
        background-color: white
        margin: 50px auto auto auto
        text-align: center
        display: table
        border-radius: 5px

    #close
        text-align: right
        padding: 5px
        margin: 5px
        display: table-row
        width: 100%
        &:hover
            cursor: pointer

    div
        display: table-row

    input, label
        display: table-cell
        text-align: left
        margin: 10px

    .create-contact-shown
        position: fixed
        display: block
        width: 100%
        height: 100%
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: rgba(0,0,0,0.5)
        z-index: 2

    .create-contact-hidden
        display: none


</style>