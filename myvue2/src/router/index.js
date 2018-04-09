import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import router1 from '@/components/router1'
import router2 from '@/components/router2'
import router3 from '@/components/router3'
import router4 from '@/components/router4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },{
      path:'/router1',
      name:'router1',
      component:router1,
    },{
      path:'/router2',
      name:'router2',
      component:router2,
    },{
      path:'/router3',
      name:'router3',
      component:router3
    },{
      path:'/router4',
      name:'router4',
      component:router4
    }
  ]
})
