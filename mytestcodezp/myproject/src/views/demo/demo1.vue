<template>
  <div class="jumbotron">
    <h1>表格组件</h1>
    <table-com1 :userage="theAge"></table-com1>
    <!-- <h1>表格组件</h1>
    <table-com/> -->
  </div>
</template>
<script>
    import table1 from '../../components/table1.vue'
    // import table from '../../components/table.vue'
    export default {
      data () {
        return {
          theAge:"年纪",
          user:[
            { name: "11", age: "25", school: "洛阳理工" },
          { name: "111111", age: "23", school: "桂林电子科技" },
          { name: "111111111", age: "22", school: "江西电子科技" }
          ]
        }
      },
      components: {
        tableCom1: table1,
        // tableCom: table
      }
    }
</script>