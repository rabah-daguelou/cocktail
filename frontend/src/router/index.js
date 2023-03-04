// Fichier du router


import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public/index.js'
import * as Admin from '@/views/admin/index.js'

import Login from '@/views/auth/login.vue'

import authGaurd from '@/_helpers/auth-guard.js'


const routes = [
  // Partie public
  {
    path: '/',
    name: 'PublicLayout',
    component: Public.PublicLayout,
    children: [
      { path: '/', name: 'Home', component: Public.Home, },
      { path: '/cocktail', name: 'Cocktail', component: Public.Cocktail, },
      { path: '/contact', name: 'Contact', component: Public.Contact, },
    ],
  },

  // Partie Admin
  {
    path:'/admin', 
    name:'admin',
    component: Admin.AdminLayout,
    children: [
      {path:'dashboard', name:'Dashboard', component: Admin.Dashboard},
      
      {path:'users/index', name:'usersList', component: Admin.UserIndex},
      {path:'users/add', name:'userAdd', component: Admin.UserAdd},
      {path:'users/edit/:id(\\d+)', name:'userEdit', component: Admin.UserEdit, props: true},
      
    //  {path:'cocktails/add', name:'cocktailAdd', component: Admin.CocktailAdd},
      
      {path:'cocktails/list', name:'cocktailsList', component: Admin.CocktailList},
      {path:'cocktails/edit/:id(\\d+)?', name:'cocktailEdit', component: Admin.CocktailEdit, props: true},
      
    ] 
  },

  // Authentification
  {
    path: '/login', name: Login, component: Login
  },

  // Route 404
  {
    path: '/:pathMatch(.*)*', redirect: '/',
    
    name: 'NotFound',
    component: Public.NotFound,
    },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Fermeture des routes Admin
router.beforeEach((to, from, next) => {
  
  if (to.matched[0].name == 'admin') {
    console.log (' Vous êtes sur:  '+ to.path)
    authGaurd()
  }
  next()
})

export default router
