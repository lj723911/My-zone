<template>
  <div class="frame">
    <h1>假如青春能燃烧到60岁</h1>
    <div class="timer-group">
      <div class="timer second">
        <div class="hand"><span v-bind:class='{secondDuration:cirDuration}'></span></div>
        <div class="hand"><span v-bind:class='{secondDuration:cirDuration}'></span></div>
      </div>
      <div class="timer life">
        <h4>你的青春还剩</h4>
        <p><span class="num">{{time}}</span>%</p>
        <p>{{resSecond}}秒</p>
        <div class="mask" v-bind:style='{height:timeGo}'>
          <h4>你的青春还剩</h4>
          <P><span class="num">{{time}}</span>%</P>
          <P>{{resSecond}}秒</P>
        </div>
      </div>
    </div>
    <div>
      <h4>请输入你的生日：</h4>
      <div class="chooseDate">
        <el-date-picker
          v-model="birthday"
          type="date"
          class="picker"
          placeholder="选择日期" v-bind:disabled='btnabled?true:false'>
        </el-date-picker>
        <el-button 
          class="startCount" 
          @click="startTimer" 
          v-bind:disabled='btnabled?true:false'>
        <i class="el-icon-success"></i></el-button>
      </div>
      <h3 v-show="btnabled">青春只有一次，开始了就不能回头或者停下</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lifeclock',
    data () {
      return {
        time: '',
        birthday: '',
        cirDuration: false,
        resSecond: '',
        timeGo: '',
        btnabled: false,
        timer: null
      }
    },
    methods: {
      startTimer () {
        if (this.birthday !== '') {
          this.cirDuration = 'ture'
          var time1 = this.birthday.getTime()
          var time2 = Date.now()
          var time3 = 60 * 365 * 24 * 60 * 60 * 1000
          var resTime = (time1 - time2 + time3) / 1000
          var percentResTime = (time1 - time2 + time3) * 100 / time3
          this.resSecond = resTime.toFixed(0)
          this.time = percentResTime.toFixed(3)
          this.timeGo = 100 - percentResTime.toFixed(3) + '%'
          this.btnabled = 'true'

          this.timer = setInterval(() => {
            if (this.resSecond > 0) {
              this.resSecond--
              this.time = percentResTime.toFixed(3)
              this.timeGo = 100 - percentResTime.toFixed(3) + '%'
            } else {
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      }
    }
  }
</script>

<style scoped>
.frame{
  width:400px;
  margin:20px auto;
}
.timer-group{
  width:400px;
  height:400px;
  margin:0px auto;
  position:relative;
}
.timer{
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
}
.timer.second {
  background: #2c3e50;
  box-shadow:0px 0px 15px #2c3e50;
  height: 340px;
  left: 30px;
  width: 340px;
  top: 30px;
  z-index:0;
}
.timer.second .hand {
  float: left;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 50%;
}
.timer.second .hand:first-child {
  transform: rotate(180deg);
}
.timer.second .hand span {
  border: 50px solid #2c3e50;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-color: #ffffff;
  border-right-color: #ffffff;
  border-radius: 50%;
  display: block;
  height: 0;
  width: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(225deg);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-width: 170px;
  margin:0px;
}
.secondDuration{
  animation-duration: 60s;
}
.timer .hand:first-child span {
  animation-name: spin1;
}
.timer .hand:last-child span {
  animation-name: spin2; 
}
@keyframes spin1 {
  0% {
    transform: rotate(225deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
@keyframes spin2 {
  0% {
    transform: rotate(225deg);
  }
  50% {
    transform: rotate(405deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
.timer.life{
  width:300px;
  height:300px;
  line-height:60px;
  font-size:20px;
  color:#ffffff;
  top:50px;
  left:50px;
  box-shadow:0px 0px 15px gray;
  background-color: #2c3e50;
  z-index:+10;
}
.timer.life .mask{
  height: 0%;
  overflow: hidden;
  width: 100%;
  line-height:60px;
  font-size:20px;
  color:#2c3e50;
  background-color:#ffffff;
  position: absolute;
  top:0px;
  left:0px;
  z-index:+12;
}
.lifeDuration{
  animation-duration: 60s;
}
.num{
  font-size:80px;
}
.chooseDate{
  width:80%;
  margin:10px auto;
  display:flex;
  justify-content:center;
}
.startCount{
  width:40px;
  height:40px;
  line-height:40px;
  font-size:30px;
  padding:0px;
  float:left;
  border-radius:50%;
  border:none;
}
.picker{
  width:250px;
  float:left;
}
</style>
