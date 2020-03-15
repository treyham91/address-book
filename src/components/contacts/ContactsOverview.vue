<template>
    <div>
        <h2>Welcome, {{currentUser}}!</h2>
        <ToolBar>
            <Button v-bind:click="handleCreateContactForm" value="Create Contact"/>
        </ToolBar>
        <ContactList v-bind:contact-list="contacts" />
        <ContactDetails />
        <CreateContact v-bind:close-form="handleCreateContactForm" v-bind:open="showCreateContactForm" />
    </div>
</template>

<script>
    import ContactList from "@/components/contacts/ContactList";
    import ContactDetails from "@/components/contacts/ContactDetails";
    import CreateContact from "@/components/forms/CreateContact";
    import ToolBar from "@/components/tools/ToolBar";
    import Button from "@/components/tools/Button";
    import store from "@/store";

    export default {
        name: "ContactsOverview",
        components: {
            CreateContact,
            ContactList,
            ContactDetails,
            ToolBar,
            Button,
        },
        data () {
            return {
                showCreateContactForm: false
            }
        },
        computed: {
            currentUser() {
                return store.$data.currentUser;
            },
            contacts() {
                return store.$data.contacts;
            }
        },
        methods: {
            handleCreateContactForm: function() {
                switch (this.$data.showCreateContactForm) {
                    case false:
                        this.$data.showCreateContactForm = true;
                        break;
                    case true:
                        this.$data.showCreateContactForm = false;
                        break;
                    default:
                        this.$data.showCreateContactForm = false;
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>