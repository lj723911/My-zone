<template>
  <el-container class="main">
    <div class="aside">
      <div class="title block">
        <h2>刘靖</h2>
        <h4>职位意向<br><br>前端工程师，交互设计师</h4>
        <img src="../../assets/photo_lt.png"></div>
      <div class="basic block">
        <p>学历：硕士</p>
        <p>生日：1990-09</p>
        <p>QQ：3497560136</p>
        <p>邮箱：3497560136@qq.com</p>
        <p>专业：生物物理学</p>
        <p>院校：中科院</p>
      </div>
      <div class="block">&nbsp</div>
      <div class="selfcommit block">
        <h3>兴趣爱好</h3>
        <p>兴趣 ：<br>神经科学，心理学，机器学习</p>
        <p>爱好 ：<br>篮球、音乐、手绘、数码</p>
      </div>
    </div>
    <div class="mainArea">
      <div class="experience block">
        <h3>工作经验</h3>
        <p>2016.7-至今 ：上海贝仪生物信息科技有限公司 / 客户经理，编辑</p>
        <i class="el-icon-location"></i>&nbsp&nbsp网站编辑：技术文章内容审核、修改、批复<br>
        <i class="el-icon-location"></i>&nbsp&nbsp网页设计：静态网页编辑，邮件EDM的设计，广告banner的创意和设计<br>
        <i class="el-icon-location"></i>&nbsp&nbsp客户经理：网站推广服务的销售及售后服务，共维护99个企业会员<br>
        <i class="el-icon-location"></i>&nbsp&nbsp媒体记者：通过直面采访、书面采访等方式进行企业新品及售后服务进行专题报道并撰写原创稿件，专注科研仪器的售后服务领域</p>
      </div>
      <div class="skill block">
        <h3>专业技能</h3>
        <p><i class="el-icon-location"></i>&nbsp&nbsp熟悉W3C标准及规范 ：熟悉HTML、CSS等页面技术<br>
        <i class="el-icon-location"></i>&nbsp&nbsp熟练掌握JavaScript ：使用JS框架，如jQuery，Bootstrap等<br>
        <i class="el-icon-location"></i>&nbsp&nbsp熟悉现代前端设计模式 ：如MVC、MVVM，了解Angular1.0，React、Vue的异同，有使用vue的开发经验<br>
        <i class="el-icon-location"></i>&nbsp&nbsp了解前端项目工具 ：如webpack，gulp等<br>
        <i class="el-icon-location"></i>&nbsp&nbsp其他 ：有微信小程序的demo开发经验</p>
      </div>
      <div class="hobby block">
        <h3>自我评价</h3>
        <p>学习能力<el-progress :percentage='90' :show-text="false"></el-progress></p>
        <p>曾跨专业自学量子化学顺利取得硕士学位，近期自学前端技术，包括HTML5、CSS3、JavaScript、React、Vue等</p>
        <p>倾听意愿<el-progress :percentage='90' :show-text="false"></el-progress></p>
        <p>与人沟通善于倾听，能从对方的角度去了解对方（客户）的真正需求和意见，降低主观情绪对判断的影响</p>
        <p>团队意识<el-progress :percentage='80' :show-text="false"></el-progress></p>
        <p>深谙团队管理的重要性，注重团队信息的沟通与反馈，任务的轻重缓急与取舍，具有配合意识和效率意识</p>
        <p>工匠精神<el-progress percentage='80' :show-text="false"></el-progress></p>  
        <p>追求精致，对于自己能够意识到的细节不容许敷衍了事</p>
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
