import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { routes } from 'vue-router/auto-routes'

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
      component: () => import('../views/detailsContacts.vue'),
      props: route => ({params: route.params.id})
    },
    {
      path: '/addcontact',
      name: 'addcontact',
      component: () => import('@/views/addContact.vue')
    }
  ]
})

export default router
