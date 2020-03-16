import Vue from 'vue'
import App from './App.vue'
import Login from "@/components/forms/Login";
import ContactsOverview from "@/components/contacts/ContactsOverview";
import store from "@/store";

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/login': Login,
  '/contact-list': ContactsOverview
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    appData: store
  },
  computed: {
    AppComponent () {
      return routes[this.currentRoute];
    }
  },
  render (h) {
    return h(this.AppComponent)
  }
})
