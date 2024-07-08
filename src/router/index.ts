import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detailscontact/:id',
      name: 'detailscontact',
      component: () => import('@/views/detailsContacts.vue')
    },
    {
      path: '/addcontact',
      name: 'addcontact',
      component: () => import('@/views/addContact.vue')
    },
    {
      path: '/editcontact/:id',
      name: 'editcontact',
      component: () => import('@/views/editContact.vue')
    }
  ]
})

export default router
