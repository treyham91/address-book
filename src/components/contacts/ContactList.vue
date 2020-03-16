<template>
    <table>
        <thead>
            <tr>
                <th>Photo</th>
                <th>Salutation</th>
                <th>Name</th>
                <th>Company</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody id="contact-list-body" v-if="contacts">
            <tr v-for="(contact, index) in contacts" :key="contact.name">
                <ContactListItem
                        v-bind:class-name="index + 1 % 2 === 0 ? 'even-item' : 'odd-item'"
                        v-bind:contact-photo="contact.contactPhoto"
                        v-bind:salutation="contact.salutation"
                        v-bind:name="contact.name"
                        v-bind:company-name="contact.companyName"
                        v-bind:phone-number="contact.phoneNumber"/>
            </tr>
        </tbody>
        <tbody v-else><NoContacts /></tbody>
    </table>
</template>

<script>
    import ContactListItem from "@/components/contacts/ContactListItem";
    import NoContacts from "@/components/contacts/NoContacts";

    export default {
        name: "ContactList",
        components: {
            ContactListItem,
            NoContacts
        },
        computed: {
            contacts() {
                return this.$root.$data.contacts;
            }
        }
    }
</script>

<style lang="sass" scoped>
    table
        border: 1px solid lightgray
        text-align: left

    td, th
        padding: 10px

    .even-item
        background-color: lightgray

    .odd-item
        background-color: white
</style>