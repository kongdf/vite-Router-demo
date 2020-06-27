import Home from './views/home.vue'
import {
  createRouter,
  createWebHistory
} from 'vue-router'

export let router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ './views/about.vue')
    },
  ],
})

