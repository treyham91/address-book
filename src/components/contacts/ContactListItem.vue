<template>
    <div v-bind:class="className">
        <td>{{ this.$props.contactPhoto }}</td>
        <td>{{ this.$props.salutation }}</td>
        <td>{{ this.$props.name }}</td>
        <td>{{ this.$props.companyName }}</td>
        <td>{{ this.$props.phoneNumber }}</td>
    </div>
</template>

<script>
    export default {
        name: "ContactListItem",
        props: {
            contactPhoto: String,
            salutation: String,
            name: String,
            companyName: String,
            phoneNumber: Number,
            className: String,
        }
    }
</script>

<style lang="sass" scoped>
    tr
        padding: 10px

    td
        padding: 5px

</style>