/*s
=============================
App Navigation
=============================
*/

import { createRouter, createWebHistory } from 'vue-router'
import TheHome from './components/TheHome.vue'
import TheAbout from './components/TheAbout.vue'

const routes = [
  {
    path: '/',
    component: TheHome
  },
  {
    path: '/about',
    component: TheAbout
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes // Short for routes: routes
})
