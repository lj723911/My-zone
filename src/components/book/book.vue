<template>
  <figure class='book'>
        <!-- 封面 -->
        <ul class="coverFront">
          <li>
            <div class="coverDesign">
              <h2>i</h2>
              <p>Introduction</p>
            </div>
          </li>
          <li></li>
        </ul>

        <!-- 页面 -->
        <ul class="page">
          <li v-for="page in pages">
            <div v-if="page.page === '6'" @click = "setExtend">              
              <img src="../../assets/logo.png">
              <div><h1>-- 戳！--</h1></div>
            </div>
          </li>
        </ul>

        <!-- 后封 -->
        <ul  class='coverBack'>
          <li></li>
        </ul>
  </figure>
</template>

<script>
  export default {
    name: 'book',
    data () {
      return {
        pages: [
          {
            page: '1'
          }, {
            page: '2'
          }, {
            page: '3'
          }, {
            page: '4'
          }, {
            page: '5'
          }, {
            page: '6'
          }, {
            page: '7'
          }, {
            page: '8'
          }, {
            page: '9'
          }
        ]
      }
    },
    methods: {
      setExtend () {
        this.$emit('receive')
      }
    }
  }
</script>

<style scoped>
/*书的整体*/
ul {
  margin: 0px;
  padding: 0;
  list-style: none;
}
.book{
  position:relative;
  margin:0px auto;
  height:280px;
  width:260px;
}
.page img{
  margin:2px;
}
/*初始颜色样式*/
.coverFront li:first-child{
  background-color:#2c3e50;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.coverFront li:last-child{
  background-color:#2c3e50;
}
.coverBack li:fist-child{
  background-color:#2c3e50;
}
.coverBack li:last-child {
  background: #2c3e50;
}
.page > li {
  background-color: #ffffff;
  box-shadow: inset 0px 0px 2px rgba(50, 50, 50, 0.5), inset -1px 0px 1px rgba(150, 150, 150, 0.5);
  border-radius: 0px 5px 5px 0px;
}

/*初始3D角度*/
.coverFront{
  -webkit-transform: rotateY(-36deg) translateZ(8px);
  -moz-transform: rotateY(-36deg) translateZ(8px);
  transform: rotateY(-36deg) translateZ(8px);
  z-index: +100;
}
.coverFront li:first-child {

  -webkit-transform: translateZ(2px);
  -moz-transform: translateZ(2px);
  transform: translateZ(2px);
}
.page li:nth-child(1) {
  -webkit-transform: rotateY(-23deg);
  -moz-transform: rotateY(-23deg);
  transform: rotateY(-23deg);
}
.page li:nth-child(2) {
  -webkit-transform: rotateY(-24deg);
  -moz-transform: rotateY(-24deg);
  transform: rotateY(-24deg);
}

.page li:nth-child(3) {
  -webkit-transform: rotateY(-25deg);
  -moz-transform: rotateY(-25deg);
  transform: rotateY(-25deg);
}

.page li:nth-child(4) {
  -webkit-transform: rotateY(-26deg);
  -moz-transform: rotateY(-26deg);
  transform: rotateY(-26deg);
}
.page li:nth-child(5) {
  -webkit-transform: rotateY(-27deg);
  -moz-transform: rotateY(-27deg);
  transform: rotateY(-27deg);
}
.page li:nth-child(6) {
  -webkit-transform: rotateY(-28deg);
  -moz-transform: rotateY(-28deg);
  transform: rotateY(-28deg);
}

.page li:nth-child(7) {
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
  transform: rotateY(-30deg);
}

.page li:nth-child(8) {
  -webkit-transform: rotateY(-32deg);
  -moz-transform: rotateY(-32deg);
  transform: rotateY(-32deg);
}

.page li:nth-child(9) {
  -webkit-transform: rotateY(-34deg);
  -moz-transform: rotateY(-34deg);
  transform: rotateY(-34deg);
}
.coverBack{
  -webkit-transform: rotateY(-22deg) translateZ(-4px);
  -moz-transform: rotateY(-22deg) translateZ(-4px);
  transform: rotateY(-22deg) translateZ(-4px);
}
/*初始位置*/
.coverFront,
.coverBack,
.coverFront li,
.coverBack li{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.coverFront,
.coverBack {
  -webkit-transform-origin: 0% 100%;
  -moz-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}

.coverFront{
  -webkit-transition: all 0.8s ease, z-index 0.6s;
  -moz-transition: all 0.8s ease, z-index 0.6s;
  transition: all 0.8s ease, z-index 0.6s;
}
/*封面样式*/
.coverDesign {
  background-color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.coverDesign h2 {
  color: #fff;
  font-size: 80px;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 20% 0 0 0;
  text-shadow: -1px -1px 0 rgba(0,0,0,0.1);
}

.coverDesign p {
  color: #f8f8f8;
  font-size: 32px;
  text-align: center;
  text-shadow: -1px -1px 0 rgba(0,0,0,0.1);
}
/*pages的样式*/
.page,
.page > li {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.page {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

.page > li {
  width: 100%;
  height: 100%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition-property: transform;
  -moz-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  transition-timing-function: ease;
}

.page > li:nth-child(6) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

.page > li:nth-child(7) {
  -webkit-transition-duration: 0.6s;
  -moz-transition-duration: 0.6s;
  transition-duration: 0.6s;
}

.page > li:nth-child(8) {
  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.page > li:nth-child(9) {
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

/*动作*/
.book:hover > .coverFront {
  -webkit-transform: rotateY(-145deg) translateZ(0);
  -moz-transform: rotateY(-145deg) translateZ(0);
  transform: rotateY(-145deg) translateZ(0);
  z-index: 0;
}

.book:hover > .page li:nth-child(5) {
  -webkit-transform: rotateY(-30deg);
  -moz-transform: rotateY(-30deg);
  transform: rotateY(-30deg);
  -webkit-transition-duration: 1.5s;
  -moz-transition-duration: 1.5s;
  transition-duration: 1.5s;
}

.book:hover > .page li:nth-child(6) {
  -webkit-transform: rotateY(-35deg);
  -moz-transform: rotateY(-35deg);
  transform: rotateY(-35deg);
  -webkit-transition-duration: 1.8s;
  -moz-transition-duration: 1.8s;
  transition-duration: 1.8s;
}

.book:hover > .page li:nth-child(7) {
  -webkit-transform: rotateY(-118deg);
  -moz-transform: rotateY(-118deg);
  transform: rotateY(-118deg);
  -webkit-transition-duration: 1.6s;
  -moz-transition-duration: 1.6s;
  transition-duration: 1.6s;
}

.book:hover > .page li:nth-child(8) {
  -webkit-transform: rotateY(-130deg);
  -moz-transform: rotateY(-130deg);
  transform: rotateY(-130deg);
  -webkit-transition-duration: 1.4s;
  -moz-transition-duration: 1.4s;
  transition-duration: 1.4s;
}

.book:hover > .page li:nth-child(9) {
  -webkit-transform: rotateY(-140deg);
  -moz-transform: rotateY(-140deg);
  transform: rotateY(-140deg);
  -webkit-transition-duration: 1.2s;
  -moz-transition-duration: 1.2s;
  transition-duration: 1.2s;
}
</style>
