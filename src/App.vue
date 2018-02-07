<template>
<el-container id="app">

  <!--masker部分-->
  <transition name="flapout">
    <el-row class="masker" v-if="ismask">
      <el-col :xs={span:24,offset:0} :sm={span:20,offset:2} :md={span:16,offset:4} :lg={span:12,offset:6} :xl={span:8,offset:8}>
          <div class="extendPage"><resume></resume></div>
      </el-col>
      <div class="closeBtn" @click="closePage">
        <i class="el-icon-close"></i>
      </div>
    </el-row>
  </transition>

  <!--header部分-->

  <el-row class="header">
    <!--顶部-->
    <el-col :xs={span:24,offset:0} :sm={span:16,offset:4}>
      <el-header >Me Myself !</el-header>
    </el-col>

    <!--导航-->
    <el-col :xs={span:24,offset:0} :sm={span:20,offset:2} :md={span:16,offset:4} :lg={span:12,offset:6} :xl={span:8,offset:8}>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  background-color="#2c3e50" text-color="#fff" active-text-color="#ffd04b" router>
        <template v-for="item in items">
          <template v-if="item.subItems">
            <el-submenu :index="item.pathway">
              <template slot="title">{{item.content}}</template>
              <el-menu-item v-for="(subitem,i) in item.subItems" :key="i" :index="subitem.pathway">{{subitem.content}}</el-menu-item>
            </el-submenu>        
          </template>
          <template v-else>
            <el-menu-item :index="item.pathway">
               {{ item.content }}
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>

  <!--中间部分-->

  <el-row class="showarea">
    <el-col :xs={span:24,offset:0} :sm={span:20,offset:2} :md={span:16,offset:4} :lg={span:12,offset:6} :xl={span:8,offset:8}>
    <router-view/></el-col>
  </el-row>

  <!--footer部分-->

  <el-row class="footer">
    <el-col :xs={span:24,offset:0} :sm={span:16,offset:4}>@ 2017 高贵愚兄 黑历史</el-col>
  </el-row>
  
  <!--悬浮组件-->

  <rightSide></rightSide>
</el-container>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import rightSide from '@/components/pages/rightSide.vue'
import resume from '@/components/resume/resume.vue'

export default {
  name: 'app',
  components: {rightSide, resume},
  data () {
    return {
      activeIndex: '1',
      items: [
        {
          pathway: '/Home',
          content: 'i SHOW'
        },
        {
          pathway: '/Demos',
          content: 'i Demos',
          subItems: [
            {
              pathway: '/Demos/vuetodo',
              content: 'vueTodo'
            },
            {
              pathway: '/Demos/lifeclock',
              content: 'lifeclock'
            },
            {
              pathway: '/Demos/calculator',
              content: 'calculator'
            }
          ]
        },
        {
          pathway: '/Looks',
          content: 'i LOOK'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['checkMask']),
    closePage () {
      this.checkMask(false)
    }
  },
  computed: {
    ...mapState(['showMask']),
    ismask () {
      return this.$store.state.showMask
    }
  }
}
</script>

<style>
/* 主样式 */
::-webkit-scrollbar{
  display:none
}
html,body{
  margin:0px;
  padding:0px;
  width:100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*扩展页动画*/
.masker{
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.5);
  position:absolute;
  top:0;
  left:0;
  z-index:+250;
  overflow-y:auto; 
}
.closeBtn{
  width:40px;
  height:40px;
  font-size: 40px;
  position:absolute;
  top:0px;
  right:0px;
  background-color:rgba(0, 0, 0, 0.8);
}
.extendPage{
  width:100%;
  padding:10px 0px;
  margin:50px 0px;
  background: #fff;
  border: 1px solid #cccccc;
  -webkit-box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.1) inset; 
}
.flapout-enter-active{
    animation: extendPages 400ms ease
}
.flapout-leave-active{
    animation: extendPages 400ms ease reverse
}
@keyframes extendPages{
  0% {
    width:10px;
    left:45%;
    opacity:0;
  }
  100% {
    width:100%;
    left:0px;
    opacity:1;;
  }
}
/* 其他 */
.header{
  width:100%;
  height:120px;
  line-height:60px;
  background-color:#2c3e50;
  color:#ffffff;
  font-size:24px;
  z-index: +150;
}
.footer{
  width:100%;
  height:60px;
  line-height:60px;
  background-color:#2c3e50;
  color:#ffffff;
  font-size:12px;
  position:absolute;
  bottom:0;
}
a{
  font-size:16px;
  font-family:"微软雅黑";
  color:#ffffff;
  text-decoration:none;
}
.showarea{
  width:100%;
  position:absolute;
  top:120px;
  bottom:60px;
  overflow:auto;
}
</style>
