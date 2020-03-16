<template>
    <div id="contact-details">
        <div v-if="contactSelected">
            <ContactDetail />
        </div>
        <div v-else>
            <NoContactDetails />
        </div>
    </div>
</template>

<script>
    import NoContactDetails from "@/components/contacts/NoContactDetails";
    import ContactDetail from "@/components/contacts/ContactDetail";
    export default {
        name: "ContactDetails",
        data () {
            return {
                contactSelected: false
            }
        },
        components: {
            NoContactDetails,
            ContactDetail
        }
    }
</script>

<style lang="sass" scoped>
    #contact-details
        padding: 10px
        border: 1px solid gray

</style>