<template>
    <form v-on:submit="submit" v-bind:method="method" v-bind:action="action">
        <slot></slot>
    </form>
</template>

<script lang="ts">
    export default {
        name: 'FormBase',
        props: {
            submit: Function,
            method: String,
            action: String,
        }
    };
</script>

<style lang="sass" scoped>

</style>