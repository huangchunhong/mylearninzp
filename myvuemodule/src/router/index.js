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
  mode:'history',
  routes: [
   {
      path:'/router1/:useId',
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
      component:router4,
      children:[
        {
          path:'list',//路由嵌套 不用加/ 加/会被当做根路径
          // 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
          component:list,
        }
      ]
    }
  ]
})
