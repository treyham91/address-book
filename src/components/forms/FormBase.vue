<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue'
    const FormBase = new Vue({
        name: 'form-base',
        methods: {
            submit (): void {
                return;
            }
        }
    });

    export default FormBase;
</script>

<style lang="sass" scoped>

</style>