<template>
<div>
  <el-row class="ishow">
    <transition name="flapout">
      <el-col :span="24" v-if="isShow" class="extendPage">
          <resume></resume>
          <div class="closeBtn" @click="closePage"><i class="el-icon-circle-close"></i></div>
      </el-col>
    </transition>
    <el-col class="left" :xs={span:24} :sm={span:13} >
      <book v-on:receive="extendPage" v-bind:style="{'pointer-events': isHover}"></book>
    </el-col>
    <el-col :xs={span:20,push:2} :sm={span:8} class="right" v-if="!isShow">
        <p>{{msg}}</p>
        <p>{{msgOrigin}}</p>
    </el-col>
  </el-row>
  <el-row class="timeAxis">
    <el-col :span="24" class="axisHeader"><i class="el-icon-loading"></i>&nbsp&nbsp&nbsp时光轴</el-col>
    <el-col :span="24" class="axisContent">
      <lifeaxis></lifeaxis>
    </el-col>
  </el-row>
</div>
</template>

<script>
import resume from '@/components/resume/resume.vue'
import book from '@/components/book/book.vue'
import lifeaxis from '@/components/lifeaxis/lifeaxis.vue'
export default {
  name: 'home',
  components: { resume, book, lifeaxis },
  data () {
    return {
      msg: 'Life is Like a Box of Chocolates：You never Know What You’re Gonna Get.',
      msgOrigin: '——" Agam"',
      isShow: false,
      isHover: 'auto'
    }
  },
  methods: {
    extendPage () {
      this.isShow = true
      this.isHover = 'none'
    },
    closePage () {
      this.isShow = false
      this.isHover = 'auto'
    }
  }
}
</script>

<style scoped>
/*最外层布局*/
.ishow{
  width:100%;
  margin:5% 0px 0px 0px;
  padding-top:40px;
  padding-bottom:20px;
  border-radius:5px;
  position:relative;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.right{
  font-size:24px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-flow:column;
}
.left{
  height:280px;
}
.closeBtn{
  width:20px;
  height:20px;
  font-size: 20px;
  position:absolute;
  top:10px;
  right:10px;
  background-color:#ffffff;
}
/*扩展页动画*/
.extendPage{
  position:absolute;
  top:2%;
  left:2%;
  width:96%;
  height:350px;
  padding:10px 2%;
  z-index:+102;
  -webkit-transform: rotateY(0deg) translateZ(12px);
  -moz-transform: rotateY(0deg) translateZ(12px);
  transform: rotateY(0deg) translateZ(12px);
  background: #fff;
  border: 1px solid #2c3e50;
  -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1) inset;
  -webkit-border-bottom-right-radius: 60px 50px;   
}
.extendPage:before{
    content:'';    
    width: 25px;
    height: 20px;
    position: absolute;
    bottom:0;
    right:0;
    -webkit-border-bottom-right-radius: 30px;
    -webkit-box-shadow: -2px -2px 2px #2c3e50;
    -webkit-transform:
    rotate(-20deg)
    skew(-40deg,-3deg)
    translate(-13px,-13px);
}
.flapout-enter-active{
    animation: extendPages 1000ms ease
}
.flapout-leave-active{
    animation: extendPages 1000ms ease reverse
}
@keyframes extendPages{
  0% {
    top:8%;
    left:25%;
    width:260px;
    height:280px;
    transform: rotateY(-35deg) translateZ(12px);
    opacity:0;
  }
  30% {
    top:8%;
    left:25%;
    width:260px;
    height:280px;
    transform: rotateY(-35deg) translateZ(12px);
    opacity:1;
  }
  100% {
    width:96%;
    height:350px;
    top:2%;
    left:2%;
    transform: rotateY(0deg) translateZ(12px);
    opacity:1;;
  }
}
/*时光轴*/
.timeAxis{
  width:100%;
  margin:5% 0px 0px 0px;
  border-top:5px solid #2c3e50;
}
.axisHeader{
  width:100%;
  height:50px;
  line-height:50px;
  background-color:#2c3e50;
  color:#ffffff;
  font-size:18px;
  text-align:left;
  padding-left:20px;
}
.axisContent{
  width:100%;
}
</style>
