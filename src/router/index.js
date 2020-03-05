import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Helloworld from '@/components/Helloworld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Helloworld
    }
    // {
    //   name: "login",
    //   path: "/login",
    //   component: Login
    // },
    // {
    //   name: "register",
    //   path: "/register",
    //   component: Register
    // },
  ]
})
