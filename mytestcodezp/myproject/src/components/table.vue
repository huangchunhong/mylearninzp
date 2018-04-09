<template>
   <div style="padding:20px;" id="app">
       <div class="gn-wrap">
           <div>
               <span class="add-datas" @click="open">新增数据</span> 
           </div>
       </div>
        <div class="panel panel-primary">
            <div class="panel-heading">用户管理</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th nowrap>序号</th>
                        <th nowrap>用户名</th>
                        <th nowrap>年龄</th>
                        <th nowrap>毕业学校</th>
                        <th nowrap>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="(user,index) in users">
                      <td nowrap>{{index+1}}</td>
                      <td nowrap>{{user.name}}</td>
                      <td nowrap>{{user.age}}</td>
                      <td nowrap>{{user.school}}</td>
                      <td nowrap><a href="javascript:void(0);" v-on:click="remove(index)">删除</a></td>
                    </tr>
                    <!-- <tr>
                      <td nowrap></td>
                      <td nowrap><input type="text"  id="name" v-model="user.name"/></td>
                      <td nowrap><input type="text" id="age"v-model="user.age"/></td>
                      <td nowrap><input type="text" id="school"v-model="user.school"/></td>
                      <td nowrap><button @click="insert">insert</button></td>
                    </tr> -->
                </tbody>
            </table>
        </div>
        <div class="add-data-table" v-if="addDataShow">
            <div class="data-wrap">
                <div class="label-wrap">
                    <label for="name">姓名:</label><input type="text"  id="name" v-model="user.name"/>
                </div>
                <div class="label-wrap">
                    <label for="age">年级:</label><input type="text"  id="age" v-model="user.age"/>
                </div>
                <div class="label-wrap">
                     <label for="school">学校:</label><input type="text"  id="school" v-model="user.school"/>
                </div>
                <button class="comfirm-btn" @click="insert">确定</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      addDataShow: false,
      user: { name: "", age: "", school: "" },
      users: [
        { name: "李磊", age: "25", school: "洛阳理工" },
        { name: "张成", age: "23", school: "桂林电子科技" },
        { name: "炼心", age: "22", school: "江西电子科技" }
      ]
    };
  },
  methods: {
    insert() {
      //插入数据
      this.users.push(this.user);
      this.addDataShow = false;
      
    },
    remove(index) {
      //删除数据
      this.users.splice(index, 1);
    },
    // 打开新增窗口
    open(){
        this.addDataShow =!this.addDataShow;
        this.empty();
    },
    empty(){
        this.user.name = "",
        this.user.age = "",
        this.user.school = ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
tr,
th {
  text-align: center;
}
table {
  border-collapse: collapse;
  border: solid 1px #cccccc;
  width: 100%;
}
td,
th {
  background: #fff;
  border: solid 1px #cccccc;
  width: 100px;
  height: 22px;
}
.add-datas {
  float: right;
  cursor: pointer;
}
.add-datas:hover {
  color: #1a8fff;
}
.add-data-table{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #666666;
    /* opacity: 0.8; */
}
.data-wrap{
    position: absolute;
    top: 40%;
    left: 40%;
    width: 300px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
}
.label-wrap{
    padding-bottom: 20px;
}
.comfirm-btn{
    float: right;
    border-radius: 5px;
    background-color: #1a8fff;
    color: #ffffff;
    outline: none;
    border: none;
    padding: 5px 8px;

}
</style>