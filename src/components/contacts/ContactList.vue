<template>
    <table>
        <thead>
            <tr>
                <td>Photo</td>
                <td>Salutation</td>
                <td>Name</td>
                <td>Company</td>
                <td>Phone Number</td>
            </tr>
        </thead>
        <tbody v-if="contactList.length">
            <tr v-for="contact in contactList" :key="contact.name">
                <ContactListItem
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
        data () {
            return {
                contactList: Array(0)
            }
        }
    }
</script>

<style scoped>

</style>