<template>
    <form @submit="submit">
        <slot></slot>
    </form>
</template>

<script lang="ts">
    export default {
        name: 'FormBase',
        props: {
            submit: Promise,
        }
    };
</script>

<style lang="sass" scoped>

</style>