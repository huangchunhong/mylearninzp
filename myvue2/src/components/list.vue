<template>
  <div>
      <button @click="$store.commit('show')">显示</button>
      <p> 这是状态{{$store.state.ifShow}}</p>
      <ul v-if="ifShow">
          <li v-for="(list,index) in listData" :key="index">{{list.text}}</li>
      </ul>
      <router-link to="/router1"> 路由1</router-link>
      <router-link to="/router2"> 路由2</router-link>
      <router-link to="/router3"> 路由3</router-link>
      <router-link to="/router4"> 路由4</router-link>
      <router-view></router-view>
      
  </div>
</template>
<script>
import { mapGetters, mapActions,mapState } from "vuex";
export default {
  data() {
    return {
      listData: [
        { text: "第一个list" },
        { text: "第二个list" },
        { text: "第三个list" }
      ]
    };
  },
  comments: mapGetters([]),
  methods: mapActions(["increment", "decrement","show"]),
  computed:{
  //  showfn(){
  //       return this.$store.state.ifShow;
  //   }
  //  这里的三点叫做 : 扩展运算符
      ...mapState([
      'ifShow'
    ]),
    // ...mapState([
    //   ifShow:state=>state.ifShow
    // ]),
  }
};
</script>