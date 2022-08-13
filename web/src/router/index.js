import Vue from 'vue'
import VueRouter from 'vue-router'
import MainA from '../views/MainA.vue'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import HeroView from '../views/HeroView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainA,
    children:[
      {path:'/',name:'homeview',component:HomeView},
      {path:'/articles/:id',name:'articleview',component:ArticleView,props:true}
    ]
  },
  {path:'/heroes/:id', name:'heroview', component:HeroView,props:true},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
