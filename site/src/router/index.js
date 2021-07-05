import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import Shop from '../views/Shop.vue'
import LegalNotice from '../views/LegalNotice.vue'
import Cgv from '../views/Cgv.vue'

import Connect from '../views/Connect.vue'
import User from '../views/User.vue'
import Basket from '../views/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a-propos',
    name: 'About',
    component: About
  },
  {
    path: '/billeterie',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/gallerie',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/connexion',
    name: 'Connect',
    component: Connect
  },
  {
    path: '/mentions_legales',
    name: 'LegalNotice',
    component: LegalNotice
  },
  {
    path: '/Conditions_generales_de_vente',
    name: 'Cgv',
    component: Cgv
  },
  {
    path: '/pannier',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/profil',
    name: 'User',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
