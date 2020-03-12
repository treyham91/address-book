<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Login />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Login from './components/forms/Login';

  // let store = {
  //   contacts: Array(0),
  //   currentUser: "",
  //   favorites: Array(0)
  // }

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Login
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
