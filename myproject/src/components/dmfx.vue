<template>
<div class="creatgoods-container" v-if="creatgoods">
  <h5 class="title" id="1" @click="clickfun(1)">{{creatgoods.title.title1}}</h5>
  <div class="steps" v-if="isShowArr == 1" >
    <div class="steps-text">
      <p>{{creatgoods.steps1.text}}</p>
    </div>
    <img :src="creatgoods.steps1.imgSrc1" alt="">
    <img :src="creatgoods.steps1.imgSrc2" alt="">
  </div>
  <h5 class="title" id="2" @click="clickfun(2)">{{creatgoods.title.title2}}</h5>
  <div class="steps" v-if="isShowArr == 2">
    <div class="steps-text">
      <p class="tips-text-wrap"> <span class="tips_icons"><img :src="creatgoods.iconImg" alt=""></span>
      <span v-html="creatgoods.steps2.text1"></span></p>
      <div v-for="item in creatgoods.steps2.texts">
        <p v-html="item.text"></p>
      </div>
    </div>
      <img :src="creatgoods.steps2.imgSrc" alt="">
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      isShowArr:[true,false],
      creatgoods:""
     
    };
  },
  created() {
    this.$store.dispatch("getBlock", "WAP_CREATE_GOODS").then(res => {
      console.log(res.data.htmlText);
      this.creatgoods =  JSON.parse(res.data.htmlText);
    });
    this.$store.commit("SET_TITLE", "如何创建商品");
  },
  methods: {
    clickfun(index) {
      if (index == 1) {
        // vue要改变数组的值，对某一项进行赋值，效果没有更新！！！
        this.isShowArr[0] = !this.isShowArr[0];
        
        this.isShowArr.splice(this.isShowArr.length,0);
      }
    }
  }
};
</script>