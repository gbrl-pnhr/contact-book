import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Home from '@/views/Home.vue'

import detailsContacts from '@/views/detailsContacts.vue'

import addContact from '@/views/addContact.vue'

const router = createRouter({

history: createWebHistory(),

routes: [

{ path: '/', name: 'Home', component: Home },

{ path: '/addcontact', name: 'AddContact', component: addContact },

{ path: '/detailscontact/:id', name: 'DetailsContacts', component: detailsContacts},

],

})

createApp(App)

.use(router)

.mount('#app')

