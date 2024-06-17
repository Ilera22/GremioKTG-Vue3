import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  
  {
    path: '/:catchAll(.*)', // Ruta de catch-all para manejar 404
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
