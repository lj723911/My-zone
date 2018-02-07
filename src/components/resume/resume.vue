<template>
<el-row :gutter="10" class="main">
  <el-col v-for="(item,idx) in articles" :key="idx" :xs={span:24} :sm={span:12} class="block">
      <div class="instruction">
        <h5>{{item.title}}</h5>
      </div>
      <div class="details">
        <div v-for="pr in item.content" class='ltdetail'>
          <p>● {{pr.key}} <b>：</b>{{pr.value}}</p>
        </div>
      </div>
  </el-col>
</el-row>
</template>

<script>
  export default {
    name: 'resume',
    data () {
      return {
        articles: [{
          title: '基本信息',
          content: [{
            key: '姓名',
            value: '刘靖'
          }, {
            key: '性别',
            value: '男'
          }, {
            key: '生日',
            value: '1990-09-11'
          }, {
            key: '学历',
            value: '硕士'
          }, {
            key: '专业',
            value: '生物物理学'
          }]
        }, {
          title: '专业技能',
          content: [{
            key: '熟悉W3C标准及规范',
            value: '熟悉HTML、CSS等页面技术'
          }, {
            key: '熟练掌握JavaScript',
            value: '使用JS框架，如jQuery，Bootstrap等'
          }, {
            key: '熟悉现代前端设计模式',
            value: '如MVC、MVVM，了解Angular1.0，React、Vue的异同，有使用vue的开发经验'
          }, {
            key: '了解前端项目工具',
            value: '如webpack，gulp等'
          }, {
            key: '其他',
            value: '有微信小程序的demo开发经验'
          }]
        }, {
          title: '教育经历',
          content: [{
            key: '2007-2011',
            value: '安徽师范大学'
          }, {
            key: '2012-2016',
            value: '中国科学院大学'
          }]
        }, {
          title: '工作经历',
          content: [{
            key: '2016.4-2016.7',
            value: '上海韵俪实业有限公司 / 运营专员'
          }, {
            key: '2016.7-至今',
            value: '上海贝仪生物信息科技有限公司 / 客户经理，编辑'
          }]
        }, {
          title: '兴趣爱好',
          content: [{
            key: '兴趣',
            value: '神经科学，心理学，机器学习'
          }, {
            key: '爱好',
            value: '篮球、音乐、手绘、数码'
          }]
        }]
      }
    }
  }
</script>

<style scoped>
.main{
  height:600px;
  padding:0 30px;
  overflow-y:auto;
}
.block{
  float:left;
  max-height:280px;
  overflow:auto;
}
.instruction {
  border-bottom:3px solid #2c3e50;
}
.details{
  word-wrap: break-word;
  text-align: left;
  font-size:12px;
}
</style>
