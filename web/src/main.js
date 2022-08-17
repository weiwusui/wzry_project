import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'

import './assets/scss/style.scss'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from './components/CarD.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

import ListCard1 from './components/ListCard1.vue'
Vue.component('m-list-card1',ListCard1)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  // baseURL:process.env.VUE_APP_API_URL || '/web/api',
  baseURL:'http://localhost:3000/web/api'//URL大写
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
