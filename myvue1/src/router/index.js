import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'
import router1 from '@/components/router1'
import router2 from '@/components/router2'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'router1',
      component: router1
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/router1',
      name: 'router1',
      component: router1
    },
    {
      path: '/router2',
      name: 'router2',
      component: router2
    }
  ]
})
