<template>
  <div id="app">
      Count is {{$store.state.count}}
        <button @click="increment">+5</button>
        <button @click="decrement">-3</button>      
        <button @click="show">显示</button>      
      这是状态 {{$store.state.ifShow}}
  </div>
</template>
<script>
  import{ mapGetters,mapActions}from 'vuex'
  export default {
    comments:mapGetters([

    ]),
    methods:mapActions([
      'increment',
      'decrement',
      'show'
    ])
  }
</script>