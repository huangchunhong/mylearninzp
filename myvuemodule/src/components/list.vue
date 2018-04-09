<template>
  <div>
    <img class="wc-preview-img" :src="url"  @click="$preview($event)">
      <button @click="show">显示</button>
      <!-- 这个和上面效果一样 -->
      <!-- <button @click="$store.dispatch('show')">显示</button> -->
      <p> 这是状态{{showfn}}</p>
           Count is {{$store.state.showEvent.count}}
        <button @click="increment">+5</button>
        <button @click="decrement">-3</button> 
      <ul v-if="showfn">
          <li v-for="(list,index) in listData" :key="index">{{list.text}}</li>
      </ul>
      <br>
      <router-link to="/router1/1"> 路由1</router-link>
      <router-link to="/router2"> 路由2</router-link>
      <router-link to="/router3"> 路由3</router-link>
      <router-link to="/router4/list"> 路由4</router-link>
      <router-view></router-view>
      
  </div>
</template>
<script>
import { mapGetters, mapActions,mapState } from "vuex";//底下有用到 这个要引入
export default {
  data() {
    return {
      url:"http://imgcbt.oss-cn-hangzhou.aliyuncs.com/WAPIMG/share/cbt_mjcf01.jpg",
      listData: [
        { text: "第一个list" },
        { text: "第二个list" },
        { text: "第三个list" }
      ]
    };
  },
  // mapActions，mapMutations在 methods 中
  // mapState 在computed中 监听状态
  comments: mapGetters([]),
  //提交状态改变
  methods: mapActions(["increment", "decrement","show"]),
  // 上面相当于下面这样
  // methods:{
  //     increment(){
  //       this.$store.dispatch("increment")
  //     },
      
  //     decrement(){
  //       this.$store.dispatch("decrement")
  //     },
  //     show(){
  //       this.$store.dispatch("show")
  //     },
  // },
  computed:{
  //  showfn(){
  //       return this.$store.state.showEvent.ifShow;
  //   }
  //  这里的三点叫做 : 扩展运算符 一下写法相当于上面的 注意是（{}） 不是（[]）
      ...mapState({
      showfn:state => state.showEvent.ifShow,
    }),
    // 一下写法是错误的不是（[]） 然后有模块时要加上 模块 比如这里是showEvent模块
    // ...mapState([
    //   ifShow:state=>state.ifShow
    // ]),
    // ...mapState({
    //   ifShow,
    // })
  }
};
</script>