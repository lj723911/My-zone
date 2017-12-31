<template>
<el-row :gutter="10" class="main">
  <el-col :xs={span:24} :sm={span:5} class="instruction">
      <h4>INSTRUCTION</h4>
      <div></div>
      <p>{{msg}}</p>
  </el-col>
  <el-col :xs={span:24} :sm={span:18} class="demopanel">
      <router-view/>
  </el-col>
</el-row>
</template>

<script>
  export default {
    name: 'Demos',
    data () {
      return {
        msg: this.$store.state.msg
      }
    }
  }
</script>

<style scoped>
.instruction div{
  border:1px solid #2c3e50;
}
.instruction p{
  word-wrap: break-word;
  text-align: left;
}
</style>
