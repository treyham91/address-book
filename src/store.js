import Vue from 'vue';

let store = new Vue({
    data: {
        contacts: Array(0),
        currentUser: "",
        favorites: Array(0),
    },
});

export default store;