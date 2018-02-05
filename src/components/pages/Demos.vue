<template>
<el-row :gutter="10" class="main">
  <el-col :xs={span:24} :sm={span:5} class="instruction">
      <h4>INSTRUCTION</h4>
      <div></div>
      <h2>{{msg}}</h2>
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
        msg: ''
      }
    },
    methods: {
      fetchMsg () {
        var hash = this.$route.path
        console.log(hash)
        switch (hash) {
          case '/Demos/vuetodo': this.msg = 'TodoList'; break
          case '/Demos/lifeclock': this.msg = 'LifeClock'; break
        }
      }
    },
    created () {
      this.fetchMsg()
    },
    watch: {
      '$route': 'fetchMsg'
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
