<template>
  <div class="table">
    <div class="search-Box">
      <el-input   placeholder="请输入关键字" icon="search"  class="search"  v-model="search"></el-input>
      <el-button type="primary" @click="export2Excel">导出数据</el-button>
    </div>
    
    <el-table  :data="returnTableData" border style="width: 100%">
      <el-table-column  prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column   prop="address"  label="地址"></el-table-column>
    </el-table>
    <router-link to="/router4">router1</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        search: '',  //搜索
        tableData: [
          { date: '2016-05-02',name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          {date: '2016-05-04',name: '章小虎',address: '上海市普陀区金沙江路 1517 弄'},
          {date: '2016-05-01',name: '李小虎',address: '上海市普陀区金沙江路 1519 弄'},
        ]  //表格内容
      }
    },
    computed:{
      returnTableData:function(){
        var search=this.search;
        // var dataNews = this.tableData.name;
        if(search){
          
          return  this.tableData.filter(function(dataNews){
            return Object.keys(dataNews).some(function(key){
              return String(dataNews[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.tableData
      },
           
      
    },
    methods:{
      // 导出table数据 可以查看百度链接 http://blog.csdn.net/linux12a/article/details/77995973
       export2Excel() {
　　　　　　require.ensure([], () => {
　　　　　　　　const { export_json_to_excel } = require('../vendor/Export2Excel');
　　　　　　　　const tHeader = ['日期', '姓名', '地址']; //对应表格输出的title
　　　　　　　　const filterVal = ['date', 'name', 'address']; // 对应表格输出的数据
　　　　　　　　const list = this.tableData;
　　　　　　　　const data = this.formatJson(filterVal, list);
　　　　　　　　export_json_to_excel(tHeader, data, '列表excel'); //对应下载文件的名字
　　　　　　})
　　　　},
　　　　formatJson(filterVal, jsonData) {
　　　　　　return jsonData.map(v => filterVal.map(j => v[j]))
　　　　}
    }
  }
</script>
<style>
  .search{
    width: 200px;
  }
</style>
