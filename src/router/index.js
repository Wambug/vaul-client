import { createRouter, createWebHistory } from 'vue-router'
import Reveal from '../components/RevealSecret.vue'
import Hello from '../components/HelloWorld.vue'
const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/secret/:id',
    name: 'Reveal',
    component: Reveal
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
