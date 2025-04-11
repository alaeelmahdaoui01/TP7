import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'
let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        createApp(App).use(router).mount('#app')
    } // to address our problem of the application and the firebase not being in sync here
})