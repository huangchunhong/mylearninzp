<template>
    <div class="progressContainer">  
      <div class="progress1" :style="{width:progress1+'%'}"> </div>  
         <div class="progress" :style="{width:progress+'%'}">  
      </div>  
      
  </div>  
</template>
<script>
    export default {
        data(){
            return{
                progress:30,
                progress1:40,
            }
        },
        created(){
            this.progress1 = this.progress1+ this.progress
        },
    }
</script>
<style>
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
