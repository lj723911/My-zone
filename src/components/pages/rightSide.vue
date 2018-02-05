<template>
  <div id = 'panel' :style="{width:panelWidth,height:panelHeight}" 
       :class="[doFlow?'flowIn':'flowOut']">
    <div id = "backbtn" v-on:click="hidden" 
         :style="{width:btnWidth,height:btnHeight,top:btnPositionTop,right:btnPositionRight}"
         :class="[doFlow?'moveDown':'moveUp']">
        <i v-if="doFlow" 
           :class="[doFlow?'el-icon-d-arrow-right':'el-icon-d-arrow-left']"></i>
        <img v-else="doFlow" src="../../assets/photo_lt.png">
    </div>
    <div class="ihead"><img src="../../assets/photo_lt.png"></div>
    <div class="ibody">
      <div class="contactpanel">QQ ：<a href="http://wpa.qq.com/msgrd?v=3&uin=3497560136&site=qq&menu=yes" target="_blank">3497560136</a></i></div>
      <div class="contactpanel">Git ：<a href="https://github.com/lj723911" target="_blank">https://github.com/lj723911</a></div>
      <div class="contactpanel" v-on:click="redraw">
        <canvas id="myCanvas" class="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rightSide',
    data () {
      return {
        panelWidth: '350px',
        panelHeight: '100%',
        btnWidth: '40px',
        btnHeight: '40px',
        btnPositionTop: '45%',
        btnPositionRight: '330px',
        doFlow: true
      }
    },
    methods: {
      hidden () {
        this.doFlow = !this.doFlow
        if (this.panelWidth === '350px') {
          this.panelWidth = '0px'
          this.panelHeight = '0px'
          this.btnWidth = '80px'
          this.btnHeight = '80px'
          this.btnPositionTop = '20px'
          this.btnPositionRight = '20px'
        } else {
          this.panelWidth = '350px'
          this.panelHeight = '100%'
          this.btnWidth = '40px'
          this.btnHeight = '40px'
          this.btnPositionTop = '45%'
          this.btnPositionRight = '330px'
        }
      },
      redraw () {
        var canvas = {}
        canvas = document.getElementById('myCanvas')
        canvas.ctx = canvas.getContext('2d')
        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h)
        this.draw()
      },
      draw () {
        var canvas = {}
        var image = {}
        var particles = []
        var count = 1
        var duration = 50
        // 获取canvas元素
        canvas = document.getElementById('myCanvas')

        if (canvas.getContext) {
          // 获取渲染上下文
          canvas.ctx = canvas.getContext('2d')

          // 设置画布大小
          canvas.w = canvas.width = 300
          canvas.h = canvas.height = 300

          // 新建一个image对象
          var img = new Image()
          img.crossOrigin = 'Anonymous'
          img.src = '../../src/assets/222.png'

          // 图像加载完后
          img.onload = function () {
            // 把图像信息保存在image里面
            image.obj = img
            image.w = img.width
            image.h = img.height
            image.x = 7
            image.y = 13

            // 把图像绘制到画布坐标为(x,y)的地方
            canvas.ctx.drawImage(image.obj, image.x, image.y, image.w, image.h)
            image.imageData = canvas.ctx.getImageData(image.x, image.y, image.w, image.h)

            // 计算出符合要求的像素
            calculate()

            // 计算后绘到画布上
            drawpic()
            var timer = requestAnimationFrame(function fn () {
              if (count < duration) {
                drawpic()
                timer = requestAnimationFrame(fn)
              } else {
                cancelAnimationFrame(timer)
              }
            })
          }
        }

        // 计算并保存坐标
        function calculate () {
          // var len = image.imageData.data.length
          // 只保存300行，300列的像素值
          var cols = 280
          var rows = 280
          // 计算像素点之间的间隔
          var swidth = parseInt(image.w / cols)
          var sheight = parseInt(image.h / rows)
          // 数组中的位置
          var pos = 0
          // 像素值数组
          var data = image.imageData.data
          for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
              // 计算(i,j)在数组中的R的坐标值
              pos = (j * sheight * image.w + i * swidth) * 4
              // 判断像素色彩是否符合要求
              if (data[pos] > 0) {
                var particle = {
                  // x,y值都随机一下
                  ex: image.x + i * swidth + (Math.random() - 0.5) * 2,
                  ey: image.y + j * sheight + (Math.random() - 0.5) * 2,
                  sx: image.x + Math.random() * image.w,
                  sy: image.y + Math.random() * image.h,
                  color: convertColor(data[pos], data[pos + 1], data[pos + 2])
                }
                // 符合要求的粒子保存到数组里
                particles.push(particle)
              }
            }
          }
        }
        // 数字转rgb值
        function convertColor (r, g, b) {
          return '#' + r.toString(16) + g.toString(16) + b.toString(16)
        }

        // 绘图案
        function drawpic () {
          // 清空画布
          canvas.ctx.clearRect(0, 0, canvas.w, canvas.h)

          var len = particles.length
          var currParticle = null
          for (var i = 0; i < len; i++) {
            currParticle = particles[i]
            // 设置填充颜色
            canvas.ctx.fillStyle = currParticle.color
            // 获得此刻的坐标
            currParticle.dx = getPositon(currParticle.sx, currParticle.ex)
            currParticle.dy = getPositon(currParticle.sy, currParticle.ey)

            // 绘粒子到画布上
            canvas.ctx.fillRect(currParticle.dx, currParticle.dy, 1, 1)
          }
          count++
        }
        // 获取此刻坐标
        function getPositon (sx, ex) {
          var dx
          if (count < duration) {
            dx = sx + (ex - sx) / duration * count
          } else {
            dx = ex
          }
          return dx
        }
      }
    },
    mounted () {
      this.draw()
    }
  }
</script>

<style scoped>
  #backbtn img{
    width:60px;
    height:60px;
  }
  #backbtn{
     border-radius:50%;
     position:absolute;
     background-color:#233240;
     box-shadow: 0px 0px 5px #000;
     line-height:40px;
     color:#fff;
     display:flex;
     align-items:center;
     justify-content:center;
  }
  #panel{
     z-index:+200;
     position:absolute;
     top:0;
     right:0;
     background-color:rgba(35, 50, 64, 1);
     box-shadow: -2px 0px 15px #000;
  }
  .flowIn{
     animation-name: flowIn;
     animation-duration: 0.3s;
     animation-timing-function: ease-in-out;
  }
  @keyframes flowIn{
     from { 
       width:0px;
       height:0px;
       background-color:#2c3e50;
       box-shadow: -0px 0px 0px #000;
     }
     to{
       width:350px;
       height:100%;
       background-color:rgba(35, 50, 64, 1);
       box-shadow: -2px 0px 15px #000;
     }
  }
  .flowOut{
     animation-name: flowOut;
     animation-duration: 0.2s;
     animation-timing-function: ease-in-out;
  }
  @keyframes flowOut{
     from { 
       width:350px;
       height:100%;
       background-color:#2c3e50;
       box-shadow: 0px 0px 0px #000;
     }
     to{
       width:0px;
       height:0px;
       background-color:#2c3e50;
       box-shadow: 0px 0px 0px #000;
     }
  }
  .moveUp{
     animation-name: moveUp;
     animation-duration: 0.2s;
     animation-timing-function: ease;
  }
  @keyframes moveUp{
     from { 
       width:40px;
       height:40px;
       top:45%;
       right:330px;
     }
     to{
       width:80px;
       height:80px;
       top:20px;
       right:20px;
     }
  }
  .moveDown{
     animation-name: moveDown;
     animation-duration: 0.5s;
     animation-timing-function: ease-in-out;
  }
  @keyframes moveDown{
     from { 
       width:80px;
       height:80px;
       top:20px;
       right:20px;
     }
     to{
       width:40px;
       height:40px;
       top:45%;
       right:330px;
     }
  }
  .ihead{
    width:100px;
    height:100px;
    margin:5% auto;
    background-color:#fff;
    border-radius:50%;
  }
  .ihead img{
    width:100px;
    height:100px;
  }
  .ibody{
    width:90%;
    height:75%;
    margin:5% auto;
    padding:5px;
    background-color:#fff;
    border-radius:5px;
  }
  .contactpanel{
    line-height:30px;
    font-weight:bold;
    margin:5px;
    padding:0 5px;
    border-radius:5px;
    background-color:#f0f0f0;
    text-align:left;
    color:#000;
  }
  .contactpanel:hover{
    background-color:#2c3e50;
    color:#fff;
  }
  .contactpanel:hover a{
    color:#fff;
  }
  a{
    color:#000;
    font-weight:bold;
  }
</style>