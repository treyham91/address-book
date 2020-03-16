<template>
    <div>
        <div class="photo-container">
            <img v-bind:src="photo" alt="No Contact Photo" />
            <p>{{salutation}}</p>
            <p>{{firstName}} {{lastName}}</p>
            <p>{{companyName}}</p>
            <div v-if="phoneNumbers.length > 1">
                <p v-for="phoneNumber in this.phoneNumbers" :key="phoneNumber.phoneNumber">{{phoneNumber}}</p>
            </div>
            <div v-else>{{phoneNumbers[0]}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactDetail",
        props: {
            photo: String,
            salutation: String,
            firstName: String,
            lastName: String,
            companyName: String,
            phoneNumbers: Array
        }
    }
</script>

<style scoped>

</style>