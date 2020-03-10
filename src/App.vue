<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  interface PhoneNumber {
    phone: number;
    primary: boolean;
  }

  interface ContactProps {
    photo: string;
    salutation: string;
    firstName: string;
    lastName: string;
    companyName: string;
    phoneNumber: Array<PhoneNumber>;
  }

  let store = {
    contacts: Array(0),
    currentUser: "",
    favorites: Array(0)
  }

  export default Vue.extend( {
    name: 'App',
    components: {
      HelloWorld
    }
  })
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
