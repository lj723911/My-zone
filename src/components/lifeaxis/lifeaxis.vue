<template>
<el-row :gutter="10">
  <!--输入框-->
  <el-col :span="24" class="inputing">
    <el-row>
      <el-col :span="20">
        <ul class="contentNav">
          <li v-for="navbtn in navbtns" 
              class='navbtn' 
              :class="[navbtn.choosed?'choosed':'']"
              @click="chooseContent(navbtn)">
              {{navbtn.name}}
          </li>
        </ul>
        <textarea class="textarea" placeholder="请输入内容" v-model="textarea"></textarea>
      </el-col>
      <el-col :span="4">
        <el-button class='add' @click="addLife">上传</el-button>
      </el-col>
    </el-row>
  </el-col>

  <!--时间轴列表-->
  <el-col :span="24" class="timelist">
    <ul>
      <li v-for="topic in curData" class="topicPanel">
          <el-row>
            <el-col :span="23"><p>{{topic.content}}</p></el-col>
            <el-col :span="1"><button @click="deleteTopic(topic)"><i class="el-icon-close"></i></button></el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="topicDate"><p>{{topic.date}}</p></el-col>
          </el-row>
      </li>
    </ul>
  </el-col>
</el-row>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  // 获取日期
  function date () {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()
    return year + '-' + month + '-' + day
  }

  // 产生随机数
  function MathRand () {
    var Num = ''
    for (var i = 0; i < 10; i++) {
      Num += Math.floor(Math.random() * 10)
    }
    return Num
  }

  export default {
    name: 'lifeaxis',
    created () {
      this.$api.get('result', null, r => {
        this.setLifedata(r.data)
        this.curData = r.data.sentence
      })
    },
    data () {
      return {
        // 输入框的值
        textarea: '',
        // 当前分类下的数据
        curData: [],
        // 当前的分类
        curCategory: 'sentence',
        // 分类导航按钮
        navbtns: [
          {
            name: '一句',
            choosed: true,
            category: 'sentence'
          }, {
            name: '一词',
            choosed: false,
            category: 'lyric'
          }, {
            name: '一感',
            choosed: false,
            category: 'thought'
          }, {
            name: '一日记',
            choosed: false,
            category: 'diary'
          }
        ]
      }
    },
    methods: {
      ...mapMutations(['setLifedata', 'fixLifedata']),
      addLife: function () {
        if (this.textarea !== '') {
          var ievent = {
            content: this.textarea,
            category: this.curCategory,
            picUrl: '',
            id: MathRand(),
            date: date()
          }
          var arr = this.$store.state.lifeData[this.curCategory]
          arr.unshift(ievent)
          this.fixLifedata(arr)
          this.textarea = ''
        }
      },
      deleteTopic: function (item) {
        var index = this.$store.state.lifeData[item.category].indexOf(item)
        var arr = this.$store.state.lifeData[item.category].splice(index, 1)
        this.fixLifedata(arr)
      },
      chooseContent: function (item) {
        if (item.choosed === false) {
          this.navbtns.map(function (item) {
            item.choosed = false
          })
          item.choosed = true
          this.curCategory = item.category
          this.curData = this.lifeData[item.category]
        }
      }
    },
    computed: {
      ...mapState(['lifeData'])
    }
  }
</script>

<style scoped>
/*基础样式*/
button:hover{
  cursor:pointer;
}
button:focus{
  outline:none;
}
ul {
  margin: 0px;
  padding: 0;
  list-style: none;
}
/*小导航*/
.contentNav{
  width:100%;
  height:25px;
  display:flex;
  flex-direction: row;
}
.navbtn{
  height:25px;
  line-height:25px;
  font-size:14px;
  font-family:'微软雅黑';
  width:20%;
  box-sizing:border-box;
  padding:0px;
  border-left:1px solid #2c3e50;
  background-color:#2c3e50;
  color:#fff;
}
.navbtn:hover{
  cursor:pointer
}
.choosed{
  background-color: #fff;
  color:#2c3e50;
  flex-grow:1;
  font-weight:bold;
}
.contentNav li:last-child{
  border-right:1px solid #2c3e50;
}
/*输入框*/
.textarea{
  width:100%;
  height:65px;
  padding:10px;
  box-sizing:border-box;
  border:1px solid #2c3e50;
  border-top:none;
  border-bottom-left-radius:5px;
}
.textarea:focus{
  outline:none;
}
.add{
  width:100%;
  height:90px;
  color: #2c3e50;
  border:1px solid #2c3e50;
  border-radius:0px;
  border-bottom-right-radius:5px;
  border-left:none;
  border-top:none;
  font-family: '微软雅黑';
}
.inputing{
  width: 100%;
  margin-top: 0px;
}
.timelist{
  margin:5px 0px;
}
.topicPanel{
  width:100%;
  background-color: #ffffff;
  padding:5px 15px;
  box-sizing:border-box;
  border-left:5px solid #2c3e50;
  text-align:left;
  font-size:14px;
  position:relative;
}
.topicPanel:before{
  content:"";
  width:20px;
  height:20px;
  line-height:20px;
  border-radius:50%;
  background-color: #2c3e50;
  color: #ffffff;
  text-align:center;
  font-weight:bold;
  position:absolute;
  top:14px;
  left:-13px;
}
.topicPanel button{
  border:none;
  background-color: #ffffff;
  margin:10px 0px;
}
.topicPanel p{
  margin:10px 0px;
}
.topicDate p{
  display:inline-block;
  color:#fff;
  background-color:#2c3e50;
  border-radius:50px;
  padding:0 10px;
}
</style>
