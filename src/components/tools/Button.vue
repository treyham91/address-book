<template>
    <button @click="click">{{ value }}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            click: Function,
            value: String,
        }
    }
</script>

<style scoped>

</style>