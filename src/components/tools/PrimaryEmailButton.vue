<template>
    <Button v-bind:click="click" value="Set as primary" />
</template>

<script>
    import Button from "@/components/tools/Button";
    export default {
        name: "PrimaryEmailButton",
        components: {
            Button
        },
        props: {
            click: Function,
        }
    }
</script>

<style scoped>

</style>