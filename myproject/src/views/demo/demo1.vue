<template>
  <div class="jumbotron">
    <h1>表格组件</h1>
    <span class="add-datas" @click="open" >新增数据</span> 
    <input type="text" placeholder="查询" class="search" @input="search">
    <table-com1 username="用户" userage="年龄" userschool="学校"  :ifRemove="remove" :isModifyData="modifyData" :datas="setSlist" ></table-com1>
    <div class="add-data-table"  v-if="addDataShow" >
        <div class="data-wrap"  >
            <h4>新增</h4>
            <div class="label-wrap">
                <label for="name">姓名:</label><input type="text"  id="name" v-model="name"/>
            </div>
            <div class="label-wrap">
                <label for="age">年级:</label><input type="text"  id="age" v-model="age"/>
            </div>
            <div class="label-wrap">
                  <label for="school">学校:</label><input type="text"  id="school" v-model="school"/>
            </div>
            <button class="comfirm-btn" @click="insert">确定</button>
        </div>
    </div>
    <div class="add-data-table"   v-if="xg" >
        <div class="data-wrap" >
            <h4>修改</h4>
            <div class="label-wrap">
                <label for="name">姓名:</label><input type="text"  id="name" v-model="selectedlist.name"/>
            </div>
            <div class="label-wrap">
                <label for="age">年级:</label><input type="text"  id="age" v-model="selectedlist.age"/>
            </div>
            <div class="label-wrap">
                  <label for="school">学校:</label><input type="text"  id="school" v-model="selectedlist.school"/>
            </div>
            <button class="comfirm-btn" @click="comfirmModifyData">确定</button>
        </div>
    </div>
    <div class="progressContainer">  
      
      <div class="progress1" :style="{width:progress1+'%'}"> </div>  
         <div class="progress" :style="{width:progress+'%'}">  
      
      </div>  
  </div>  
    <!-- <h1>表格组件</h1>
    <table-com2/> -->
    <processbar1></processbar1>
    <processbartest></processbartest>
    <!-- element-ui改造的进度条 -->
    <progressbar :percentage="40" :percentage1="40" :text-inside="true" :stroke-width="18" ></progressbar>
  </div>
</template>
<script>
import table1 from "../../components/table1.vue";
import processbar from '../../components/processbar.vue'
import processbartest from '../../components/processbartest.vue'
import progressbar from '../../components/progressbar.vue'
// import table2 from '../../components/table2.vue'
export default {
  data() {
    return {
      progress:30,
      progress1:40,
      theAge: "年纪",
      name:"",
      age:"",
      school:"",
      user: [
        { name: "11", age: "25", school: "洛阳理工" },
        { name: "111111", age: "23", school: "桂林电子科技" },
        { name: "111111111", age: "22", school: "江西电子科技" }
      ],
      addDataShow: false,
      xg: false,
      selectedlist:{},
      selected:"",
      setSlist:""
    };
  },
  components: {
    tableCom1: table1,
    // tableCom2: table2
     processbar1: processbar,
     processbartest: processbartest,
     progressbar: progressbar,
  },
  
  created(){
      
        this.setSlist = this.user;
      this.progress1 = this.progress1+ this.progress
  },
  methods: {
    remove(index) {
      console.log(index);
       //删除数据
            this.setSlist.splice(index, 1);
    },

    modifyData(index) {
      console.log(index);
       this.selected = index; // 修改的位置
        this.selectedlist=this.setSlist[index];
        this.xg = true;
    },
    comfirmModifyData(){
       this.setSlist[this.selected]=this.selectedlist
        this.xg = false;
    },
    // 打开新增窗口,
    open() {
      this.addDataShow = !this.addDataShow;
      
     this.empty();
    },
    empty(){
        this.name = "",
        this.age = "",
        this.school = ""
    },
    insert() {
      //插入数据
      this.setSlist.push({ name: this.name, age: this.age, school: this.school });
      // this.setSlist = this.users;
      this.addDataShow = false;
    },
     search(e) {
        var v = e.target.value,
            self = this;
        self.searchlist = [];
        if (v) {
            var ss = [];

            // 过滤需要的数据
            this.user.forEach(function (item) {
                // 检测用户名
                if (item.name.indexOf(v) > -1) {
                    if (self.searchlist.indexOf(item.name) == -1) {
                        self.searchlist.push(item.name);
                    }
                    ss.push(item);
                } else if (item.age.indexOf(v) > -1) {
                    // 检测邮箱
                    if (self.searchlist.indexOf(item.age) == -1) {
                        self.searchlist.push(item.age);
                    }
                    ss.push(item);
                }else if (item.school.indexOf(v) > -1) {
                    // 检测邮箱
                    if (self.searchlist.indexOf(item.school) == -1) {
                        self.searchlist.push(item.school);
                    }
                    ss.push(item);
                }
            });
            this.setSlist = ss; // 将过滤后的数据给了slist
        } else {
            // 没有搜索内容，则展示全部数据
            this.setSlist=this.user;
        }
    }
  }
};
</script>
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
.add-data-table {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #666666;
  /* opacity: 0.8; */
}
.data-wrap {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 300px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
}
.label-wrap {
  padding-bottom: 20px;
}
.comfirm-btn {
  float: right;
  border-radius: 5px;
  background-color: #1a8fff;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 5px 8px;
}
.search {
  float: right;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #eee;
  text-indent: 20px;
}
.gn-wrap {
  overflow: hidden;
}
.dosm {
  margin-right: 10px;
}

/* 进度条 */
div.progressContainer{  
    height: 20px;  
    width: 96%;  
    border-radius: 10px;  
    background-color: #ddd;  
    margin-left: 2%;  
}  
div.progress{  
    background-color: #1C8DE0;  
    border-radius: 10px;  
    height:20px;  
    line-height: 20px;  
    position: absolute;
}  
div.progress1{  
    background-color: red;  
    border-radius: 10px;  
    height:20px;  
    line-height: 20px;  
    position: absolute;
}  
b{  
    color:#fff;  
    font-weight: 100;  
    font-size: 12px;  
    position:absolute;  
    left:40%;   
 }  
</style>