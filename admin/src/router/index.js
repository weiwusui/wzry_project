import Vue from 'vue'
import VueRouter from 'vue-router'
import MainA from '../views/MainA.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainA,
    children:[
      {
        path:'/categories/creat',
        component:CategoryEdit
      },
      {
        path:'/categories/edit/:id',
        component:CategoryEdit,
        props:true
      },
      {
        path:'/categories/list',
        component:CategoryList
      },
      {
        path:'/items/creat',
        component:ItemEdit
      },
      {
        path:'/items/edit/:id',
        component:ItemEdit,
        props:true
      },
      {
        path:'/items/list',
        component:ItemList
      },
      {
        path:'/heros/creat',
        component:HeroEdit
      },
      {
        path:'/heros/edit/:id',
        component:HeroEdit,
        props:true
      },
      {
        path:'/heros/list',
        component:HeroList
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
