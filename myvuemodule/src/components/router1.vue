<template>
  <div>
      <p>这是路由1</p>
      <el-button type="primary">主要按钮</el-button>
      <el-input v-model="input" placeholder="请输入内容"  clearable>></el-input>
       Count is {{$store.state.showEvent.count}}
        <button @click="increment">+5</button>
        <button @click="decrement">-3</button> 
        <el-select v-model="value" placeholder="请选择">
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >

          </el-option>
        </el-select>
        <p>这是状态{{zt}}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
  //提交状态改变
  methods: mapActions(["increment", "decrement","show"]),
  computed:{
  //  showfn(){
  //       return this.$store.state.showEvent.ifShow;
  //   }
  //  这里的三点叫做 : 扩展运算符 一下写法相当于上面的 注意是（{}） 不是（[]）
      ...mapState({
      zt:state => state.showEvent.zt,
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
</script>s