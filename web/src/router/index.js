import Vue from 'vue'
import VueRouter from 'vue-router'
import MainA from '../views/MainA.vue'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import HeroView from '../views/HeroView.vue'
import StrategyCenter from '../views/StrategyCenter.vue'


Vue.use(VueRouter)
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: MainA,
    children:[
      {path:'/',name:'homeview',component:HomeView},
      {path:'/strategy',name:'strategy',component:StrategyCenter},
      {path:'/articles/:id',name:'articleview',component:ArticleView,props:true}
    ]
  },
  {path:'/heroes/:id', name:'heroview', component:HeroView,props:true},

]

const router = new VueRouter({
  routes
})

export default router
