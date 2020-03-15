<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
  import Login from './components/forms/Login';

  export default {
    name: 'App',
    components: {
      Login
    },
  }
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
