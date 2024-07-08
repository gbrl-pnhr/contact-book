import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Home from '@/views/home.vue'

import detailsContacts from '@/views/detailsContacts.vue'

import addContact from '@/views/addContact.vue'

import editContact from '@/views/editContact.vue'

const router = createRouter({

history: createWebHistory(),

routes: [

{ path: '/', name: 'Home', component: Home },

{ path: '/addcontact', name: 'AddContact', component: addContact },

{ path: '/detailscontact/:id', name: 'DetailsContacts', component: detailsContacts},

{ path: '/editcontact/:id', name: 'EditContacts', component: editContact},


],

})

createApp(App)

.use(router)

.mount('#app')

