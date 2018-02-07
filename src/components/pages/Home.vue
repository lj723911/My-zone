<template>
<div>
  <el-row class="ishow">
    <el-col class="left" :xs={span:24} :sm={span:13} >
      <book v-on:receive="extendPage" v-bind:style="{'pointer-events': isHover}"></book>
    </el-col>
    <el-col :xs={span:20,push:2} :sm={span:8} class="right" >
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
import {mapMutations, mapState} from 'vuex'
import book from '@/components/book/book.vue'
import lifeaxis from '@/components/lifeaxis/lifeaxis.vue'

export default {
  name: 'home',
  components: { book, lifeaxis },
  data () {
    return {
      msg: 'Life is Like a Box of Chocolates：You never Know What You’re Gonna Get.',
      msgOrigin: '——" Agam"',
      isHover: 'auto'
    }
  },
  methods: {
    ...mapMutations(['checkMask']),
    extendPage () {
      this.checkMask(true)
    }
  },
  computed: {
    ...mapState(['showMask'])
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
