import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/:id',
    name: 'About',
    component: Home
  },
  {
    path: '/picture',
    name: 'Picture',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
