<template>
    <div id="toolbar-container">
        <nav>
            <slot></slot>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "ToolBar"
    }
</script>

<style lang="sass" scoped>
    #toolbar-container
        padding: 5px
</style>