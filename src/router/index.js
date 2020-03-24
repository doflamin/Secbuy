import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Search from '@/pages/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
