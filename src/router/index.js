import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Temperate from '../views/Temperate.vue'
import Humid from '../views/Humid.vue'
import Fire from '../views/Fire.vue'
import Light from '../views/Light.vue'
import ElecticPower from '../views/ElecticPower.vue'
import Water from '../views/Water.vue'
import Dust from '../views/Dust.vue'
import Co2 from '../views/Co2.vue'
import Setting from '../views/Setting.vue'
import Loginpage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Loginpage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },  
  {
    path: '/temperate',
    name: 'temperate',
    component: Temperate
  },
  {
    path: '/humid',
    name: 'humid',
    component: Humid
  },
  {
    path: '/fire',
    name: 'fire',
    component: Fire
  },{
    path: '/light',
    name: 'light',
    component: Light
  },{
    path: '/electicpower',
    name: 'electicpower',
    component: ElecticPower
  },{
    path: '/water',
    name: 'water',
    component: Water
  },{
    path: '/dust',
    name: 'dust',
    component: Dust
  },{
    path: '/co2',
    name: 'co2',
    component: Co2
  },{
    path: '/setting',
    name: 'setting',
    component: Setting
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
