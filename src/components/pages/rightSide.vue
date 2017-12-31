<template>
  <div id = 'panel' :style="{width:panelWidth,height:panelHeight}" 
       :class="[doFlow?'flowIn':'flowOut']">
    <div id = "backbtn" v-on:click="hidden" 
         :style="{width:btnWidth,height:btnHeight,top:btnPositionTop,right:btnPositionRight}"
         :class="[doFlow?'moveDown':'moveUp']">
        <i v-if="doFlow" 
           :class="[doFlow?'el-icon-d-arrow-right':'el-icon-d-arrow-left']"></i>
        <img v-else="doFlow" src="../../assets/photo.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rightSide',
    data () {
      return {
        panelWidth: '350px',
        panelHeight: '100%',
        btnWidth: '40px',
        btnHeight: '40px',
        btnPositionTop: '45%',
        btnPositionRight: '330px',
        doFlow: true
      }
    },
    methods: {
      hidden () {
        this.doFlow = !this.doFlow
        if (this.panelWidth === '350px') {
          this.panelWidth = '0px'
          this.panelHeight = '0px'
          this.btnWidth = '80px'
          this.btnHeight = '80px'
          this.btnPositionTop = '20px'
          this.btnPositionRight = '20px'
        } else {
          this.panelWidth = '350px'
          this.panelHeight = '100%'
          this.btnWidth = '40px'
          this.btnHeight = '40px'
          this.btnPositionTop = '45%'
          this.btnPositionRight = '330px'
        }
      }
    }
  }
</script>

<style scoped>
  #backbtn img{
    width:60px;
    height:60px;
  }
  #backbtn{
     border-radius:50%;
     position:absolute;
     background-color:#233240;
     box-shadow: 0px 0px 5px #000;
     line-height:40px;
     color:#fff;
     display:flex;
     align-items:center;
     justify-content:center;
  }
  #panel{
     z-index:+200;
     position:absolute;
     top:0;
     right:0;
     background-color:rgba(35, 50, 64, 1);
     box-shadow: -2px 0px 15px #000;
  }
  .flowIn{
     animation-name: flowIn;
     animation-duration: 0.3s;
     animation-timing-function: ease-in-out;
  }
  @keyframes flowIn{
     from { 
       width:0px;
       height:0px;
       background-color:#2c3e50;
       box-shadow: -0px 0px 0px #000;
     }
     to{
       width:350px;
       height:100%;
       background-color:rgba(35, 50, 64, 1);
       box-shadow: -2px 0px 15px #000;
     }
  }
  .flowOut{
     animation-name: flowOut;
     animation-duration: 0.2s;
     animation-timing-function: ease-in-out;
  }
  @keyframes flowOut{
     from { 
       width:350px;
       height:100%;
       background-color:#2c3e50;
       box-shadow: 0px 0px 0px #000;
     }
     to{
       width:0px;
       height:0px;
       background-color:#2c3e50;
       box-shadow: 0px 0px 0px #000;
     }
  }
  .moveUp{
     animation-name: moveUp;
     animation-duration: 0.2s;
     animation-timing-function: ease;
  }
  @keyframes moveUp{
     from { 
       width:40px;
       height:40px;
       top:45%;
       right:330px;
     }
     to{
       width:80px;
       height:80px;
       top:20px;
       right:20px;
     }
  }
  .moveDown{
     animation-name: moveDown;
     animation-duration: 0.5s;
     animation-timing-function: ease-in-out;
  }
  @keyframes moveDown{
     from { 
       width:80px;
       height:80px;
       top:20px;
       right:20px;
     }
     to{
       width:40px;
       height:40px;
       top:45%;
       right:330px;
     }
  }
</style>