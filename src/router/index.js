import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import shop from '../views/ShopView.vue'
import cont from '../views/ContactView.vue'
import cpanel from '../views/CpanelView.vue'
import acc from '../views/AccountView.vue'
import fav from '../views/FavoriteView.vue'
import cart from '../views/CartView.vue'
import login from '../views/LoginView.vue'
import sup from '../views/SignUpView.vue'
import check from '../views/CheckOut.vue'
import add from '../views/AddProd.vue'
import not from '../views/NotFound.vue'
import update from '../views/Update.vue'
import prod from '../views/Details.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
    
  },
  {
    path: '/contact',
    name: 'cont',
    component: cont
    
  },{
    path: '/cpanel',
    name: 'cpanel',
    component: cpanel
    
  },{
    path: '/account',
    name: 'acc',
    component: acc
    
  },{
    path: '/favorite',
    name: 'fav',
    component: fav
    
  },{
    path: '/cart',
    name: 'cart',
    component: cart
    
  },{
    path: '/login',
    name: 'login',
    component: login
    
  },
  {
    path: '/signup',
    name: 'sup',
    component: sup
    
  },
  {
    path: '/checkout',
    name: 'check',
    component: check
    
  },  {
    path: '/add',
    name: 'add',
    component: add
    
  },{
    path: '/NotFound',
    name: 'not',
    component: not
    
  },{
    path: '/update',
    name: 'update',
    component: update
    
  },{
    path: '/prod',
    name: 'prod',
    component: prod
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
