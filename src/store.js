const store = {
    contacts: Array(0),
    currentUser: "",
    favorites: Array(0),

    setUser(username) {
        store.currentUser = username;
    },

    addContact(contact) {
        store.contacts.concat(contact);
    }
}

export default store;
