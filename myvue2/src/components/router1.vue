<template>
  <div>
      <p>这是路由1</p>
      <el-button type="primary">主要按钮</el-button>
      <el-input v-model="input" placeholder="请输入内容"  clearable>></el-input>
      <!-- <p>{{input}}</p> -->
  </div>
</template>
<script>
    export default{
        data(){
            return{
                input:"",
            }
        }
    }
    
</script>s