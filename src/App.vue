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
    data () {
      return {
        store: {
            contacts: Array(0),
            currentUser: "",
            favorites: Array(0)
          }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
