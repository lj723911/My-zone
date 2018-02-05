<template>
<el-container id="app">
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
    <el-col :xs={span:24,offset:0} :sm={span:20,offset:2} :md={span:16,offset:4} :lg={span:12,offset:6} :xl={span:8,offset:8}><router-view/></el-col>
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
import rightSide from '@/components/pages/rightSide.vue'
export default {
  name: 'app',
  components: { rightSide },
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
              pathway: '/Demos/demo3',
              content: 'demo3'
            }
          ]
        },
        {
          pathway: '/Looks',
          content: 'i LOOK'
        }
      ]
    }
  }
}
</script>

<style>
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
