import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Live from './views/Live.vue'
import Table from './views/Table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },    
    {
      path: '/live',
      name: 'Live',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Live
    },
    {
      path: '/table',
      name: 'Table',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Table
    },   
  ]
})
