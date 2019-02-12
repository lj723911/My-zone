<template>
  <el-container class="main">
    <div class="aside">
      <div class="title block">
        <h2>刘靖</h2>
        <img src="../../assets/photo_lt.png"></div>
      <div class="basic block">

      </div>
      <div class="block">&nbsp</div>
      <div class="selfcommit block">
        <h3>兴趣爱好</h3>
      </div>
    </div>
    <div class="mainArea">
      <div class="experience block">
        <h3>工作经验</h3>
      </div>
      <div class="skill block">
        <h3>专业技能</h3>
      </div>
      <div class="hobby block">
        <h3>自我评价</h3>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'resume',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.main{
  width:100%;
  height:100%;
  padding:0px;
  overflow-y:auto;
  border:1px solid #376956;
}
.aside{
  background-color:#376956;
  padding:65px 20px;
  width:30%;
  min-width:230px;
  height:100%;
  float:left;
}
.mainArea{
  padding:20px 20px;
  width:70%;
  min-width:370px;
  height:100%;
  float:left;
}
.block{
  margin:20px;
}
.title, .selfcommit{
  font-family:'微软雅黑';
  color:#fff;
}
.basic{
  text-align:left;
  color:#fff;
  font-size: 12px;
  font-family:'微软雅黑';
}
.experience, .hobby, .skill, .selfcommit{
  text-align:left;
  font-size: 12px;
  font-family:'微软雅黑';
}
</style>
