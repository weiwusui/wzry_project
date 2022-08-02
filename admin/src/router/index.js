import Vue from 'vue'
import VueRouter from 'vue-router'
import MainA from '../views/MainA.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'


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
      },
      {
        path:'/articles/creat',
        component:ArticleEdit
      },
      {
        path:'/articles/edit/:id',
        component:ArticleEdit,
        props:true
      },
      {
        path:'/articles/list',
        component:ArticleList
      },
      {
        path:'/ads/creat',
        component:AdEdit
      },
      {
        path:'/ads/edit/:id',
        component:AdEdit,
        props:true
      },
      {
        path:'/ads/list',
        component:AdList
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
