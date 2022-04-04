


import {createWebHistory, createRouter} from 'vue-router'

import Splash from "@/views/intro/Splash.vue"
import MainPage from "@/views/main/MainPage.vue"


var routes = [
  {
    path : '/',
    component : Splash
  },
  {
    path : '/mainpage',
    component : MainPage
  }
]



const history = createWebHistory();


const router = createRouter({
  history,
  routes
});

export default router;
