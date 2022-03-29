import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/gitclone',
    name: 'GitClone',
    component: () => import(/* webpackChunkName: "about" */ '../views/Github/GitClone.vue')
  }
  ,
  {
    path: '/gitpage',
    name: 'Gitpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Github/Gitpage.vue')
  }
  ,
  {
    path: '/localtogithub',
    name: 'LocalToGithub',
    component: () => import(/* webpackChunkName: "about" */ '../views/Github/LocalToGithub.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
