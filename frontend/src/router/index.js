// Fichier du router


import { createRouter, createWebHistory } from 'vue-router'


import * as Public from '@/views/public/index.js'
import * as Admin from '@/views/admin/index.js'

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
    name:'AdminLayout',
    component: Admin.AdminLayout,
    children: [
      {path:'dashboard', name:'Dashboard', component: Admin.Dashboard},
      {path:'users/index', name:'UserIndex', component: Admin.UserIndex},
      {path:'users/add', name:'UserAdd', component: Admin.UserAdd},
      {path:'users/edit/:id', name:'UserEdit', component: Admin.UserEdit},
      
      {path:'cocktails/edit/:id', name:'CocktailEdit', component: Admin.CocktailEdit},
      {path:'cocktails/index', name:'CocktailIndex', component: Admin.CocktailIndex},
    ]
  },

  // Route 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Public.NotFound,
    },
  
]
  
  
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
