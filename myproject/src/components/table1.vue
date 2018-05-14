<template>
   <div style="padding:20px;" id="app">
       
        <div class="panel panel-primary">
            <!-- <div class="panel-heading">用户管理</div> -->
            <div class="gn-wrap">
                <!-- <span class="add-datas" @click="open" v-if="addDataBtn">新增数据</span>  -->
                <!-- <input type="text" placeholder="查询" class="search" @input="search"> -->
                <!-- <input type="text" placeholder="search" @input="search" list="cars" class="search">
                <datalist id="cars">
                    <option v-for="item in searchlist" :value="item"></option>
                </datalist> -->
            </div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th nowrap>序号</th>
                        <th nowrap>{{username}}</th>
                        <th nowrap>{{userage}}</th>
                        <th nowrap>{{userschool}}</th>
                        <th nowrap>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="(item,index) in datas">
                      <td nowrap>{{index+1}}</td>
                      <td nowrap>{{item.name}}</td>
                      <td nowrap>{{item.age}}</td>
                      <td nowrap>{{item.school}}</td>
                      <td nowrap><a class="dosm" v-if="ifRemove" href="javascript:void(0);" @click="ifRemove(index)">删除</a><a  class="dosm" v-if="isModifyData" href="javascript:void(0);" @click="isModifyData(index)">修改</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <div class="add-data-table"  v-if="addDataShow" >
            <div class="data-wrap"  >
                <h4>新增</h4>
                <div class="label-wrap">
                    <label for="name">{{username}}:</label><input type="text"  id="name" v-model="name"/>
                </div>
                <div class="label-wrap">
                    <label for="age">{{userage}}:</label><input type="text"  id="age" v-model="age"/>
                </div>
                <div class="label-wrap">
                     <label for="school">{{userschool}}:</label><input type="text"  id="school" v-model="school"/>
                </div>
                <button class="comfirm-btn" @click="insert">确定</button>
            </div>
            <div class="data-wrap" v-if="selected>=0" >
                <h4>修改</h4>
                <div class="label-wrap">
                    <label for="name">{{username}}:</label><input type="text"  id="name" v-model="selectedlist.name"/>
                </div>
                <div class="label-wrap">
                    <label for="age">{{userage}}:</label><input type="text"  id="age" v-model="selectedlist.age"/>
                </div>
                <div class="label-wrap">
                     <label for="school">{{userschool}}:</label><input type="text"  id="school" v-model="selectedlist.school"/>
                </div>
                <button class="comfirm-btn" @click="comfirmModifyData(selected)">确定</button>
            </div>
            
        </div> -->
    </div>
</template>

<script>
// 表格组件比较好的
export default {
  name: "hello",
  props:{
      username:{
          type:String,
          default:"用户名"
      },
      userage:{
           type:String,
          default:"年龄"
      },
      userschool:{
           type:String,
          default:"毕业学校"
      },
        datas:{
            type:Array,
            default:[
                 { name: "李磊", age: "25", school: "洛阳理工" },
                { name: "张成", age: "23", school: "桂林电子科技" },
                { name: "炼心", age: "22", school: "江西电子科技" }
            ]
        },
        ifRemove:{
            type:Function,
            default:this.remove
        },
        isModifyData:{
            type:Function,
            default:this.modifyData
        },
        insert:{
            type:Function,
        },
        // addDataBtn:{
        //     type:Boolean,
        //     default:false
        // }


  },
  data() {
    return {
    //   addDataShow: false,
    //   user: { name: "", age: "", school: "" },
    //   name:"",
    //   age:"",
    //   school:"",
    //   users: [
    //     { name: "李磊", age: "25", school: "洛阳理工" },
    //     { name: "张成", age: "23", school: "桂林电子科技" },
    //     { name: "炼心", age: "22", school: "江西电子科技" }
    //   ],
    //   selected:"",
    //   selectedlist:{},
    //   setSlist:"",//显示的数据
    };
  },
//   created(){
      
//         this.setSlist = this.users;
      
       
//   },
//   created(){
      
//         this.setSlist = this.users;
      
       
//   },
  methods: {
    // insert() {
      //插入数据
    //   this.users.push(
    //       { name: this.name, age: this.age, school: this.school }
    //   );
    //   this.setSlist = this.users;
    //   this.addDataShow = false;
      
    // },
    remove(index) {
        // if(this.ifRemove){
        //     //删除数据
        //     this.setSlist.splice(index, 1);
        // }
      
    },
    // 打开新增窗口
    // open(){
    //     this.addDataShow =!this.addDataShow;
    //     this.empty();
    // },
    // empty(){
    //     this.name = "",
    //     this.age = "",
    //     this.school = ""
    // },
    // 修改数据
    modifyData(index) {
        
    },
    // 确认修改
    // comfirmModifyData(index){
    //     this.setSlist[index]=this.selectedlist
    //     this.addDataShow = false;
    // },
    // 搜索
    // search(){
    //     console.log("111111111")
    // }
    // search(e) {
    //     var v = e.target.value,
    //         self = this;
    //     self.searchlist = [];
    //     if (v) {
    //         var ss = [];

    //         // 过滤需要的数据
    //         this.users.forEach(function (item) {
    //             // 检测用户名
    //             if (item.name.indexOf(v) > -1) {
    //                 if (self.searchlist.indexOf(item.name) == -1) {
    //                     self.searchlist.push(item.name);
    //                 }
    //                 ss.push(item);
    //             } else if (item.age.indexOf(v) > -1) {
    //                 // 检测邮箱
    //                 if (self.searchlist.indexOf(item.age) == -1) {
    //                     self.searchlist.push(item.age);
    //                 }
    //                 ss.push(item);
    //             }else if (item.school.indexOf(v) > -1) {
    //                 // 检测邮箱
    //                 if (self.searchlist.indexOf(item.school) == -1) {
    //                     self.searchlist.push(item.school);
    //                 }
    //                 ss.push(item);
    //             }
    //         });
    //         this.setSlist = ss; // 将过滤后的数据给了slist
    //     } else {
    //         // 没有搜索内容，则展示全部数据
    //         this.setSlist=this.users;
    //     }
    // }
  },
  
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
  margin: 20px;
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
  padding-left: 20px;
  line-height: 30px;
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
.search{
    float: right;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #eee;
    text-indent: 20px;
}
.gn-wrap{
    overflow: hidden;
}
.dosm{
    margin-right: 10px;
}
</style>