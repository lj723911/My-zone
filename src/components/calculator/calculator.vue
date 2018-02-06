<template>
<div class="calculator">
    <button @click="changeModeEvent" class="toggle-button">
      <p v-if="changeMode">基本模式 &nbsp; &nbsp; &#9864;</p>
      <p v-else>科学模式 &nbsp; &nbsp; &#9862;</p>
    </button>
    <div class="results">
      <input class="input" v-model="current" />
    </div>
    <div class="mode" v-if="changeMode">
      <button v-for="(index,item) in simple" class="button" @click="press">{{index}}</button>
      <button class="button equal-sign" @click="press">=</button>  
    </div>
    <div class="mode" v-else>
      <button v-for="(index,item) in extend" class="button" @click="press">{{index}}</button>            
      <button class="button equal-sign" @click="press">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calcultor',
  data () {
    return {
      current: '',
      changeMode: true,
      simple: ['7', '8', '9', '*', '<=', 'C', '4', '5', '6', '/', '(', ')', '1', '2', '3', '-', 'x²', '±', '0', '.', '%', '+'],
      extend: ['sin', 'cos', 'tan', 'x^', '<=', 'C', 'log', 'ln', 'e', '∘', 'rad', '√', '7', '8', '9', '/', 'x²', 'x!', '4', '5', '6', '*', '(', ')', '1', '2', '3', '-', '%', '±', '0', '.', 'π', '+']
    }
  },
  methods: {
    press: function (event) {
      var me = this
      var key = event.target.textContent
      if (key !== '=' && key !== 'C' && key !== '*' && key !== '/' && key !== '√' && key !== 'x²' && key !== '%' && key !== '<=' && key !== '±' && key !== 'sin' && key !== 'cos' && key !== 'tan' && key !== 'log' && key !== 'ln' && key !== 'x^' && key !== 'x!' && key !== 'π' && key !== 'e' && key !== 'rad' && key !== '∘') {
        me.current += key
      } else if (key === '=') {
        if (me.current.indexOf('^') > -1) {
          var base = me.current.slice(0, me.current.indexOf('^'))
          var exponent = me.current.slice(me.current.indexOf('^') + 1)
          me.current = Math.pow(base, exponent)
        } else {
          me.current = me.current
        }
      } else if (key === 'C') {
        me.current = ''
      } else if (key === '*') {
        me.current += '*'
      } else if (key === '/') {
        me.current += '/'
      } else if (key === '+') {
        me.current += '+'
      } else if (key === '-') {
        me.current += '-'
      } else if (key === '±') {
        if (me.current.charAt(0) === '-') {
          me.current = me.current.slice(1)
        } else {
          me.current = '-' + me.current
        }
      } else if (key === '<=') {
        me.current = me.current.substring(0, me.current.length - 1)
      } else if (key === '%') {
        me.current = me.current / 100
      } else if (key === 'π') {
        me.current = me.current * Math.PI
      } else if (key === 'x²') {
        me.current = me.current * me.current
      } else if (key === '√') {
        me.current = Math.sqrt(me.current)
      } else if (key === 'sin') {
        me.current = Math.sin(me.current)
      } else if (key === 'cos') {
        me.current = Math.cos(me.current)
      } else if (key === 'tan') {
        me.current = Math.tan(me.current)
      } else if (key === 'log') {
        me.current = Math.log10(me.current)
      } else if (key === 'ln') {
        me.current = Math.log(me.current)
      } else if (key === 'x^') {
        me.current += '^'
      } else if (key === 'x!') {
        if (me.current === 0) {
          me.current = '1'
        } else if (me.current < 0) {
          me.current = NaN
        } else {
          var _number = 1
          for (var i = me.current; i > 0; i--) {
            _number *= i
          }
          me.current = _number
        }
      } else if (key === 'e') {
        me.current = Math.exp(me.current)
      } else if (key === 'rad') {
        me.current = me.current * (Math.PI / 180)
      } else if (key === '∘') {
        me.current = me.current * (180 / Math.PI)
      }
    },
    changeModeEvent: function () {
      var me = this
      me.changeMode = !me.changeMode
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: '微软雅黑';
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-item: center;
}

.calculator {
  width: 380px;
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  font-size: 16px;
  background-color: #2c3e50;
}

.input {
  width: 340px;
  height: 50px;
  border-radius: 0px;
  border: 1px solid black;
  background-color: #d9d9d9;
  color: #000000;
  padding: 0 5px 0 5px;
  margin: 0 0px 10px 0px;
  font-size: 30px;
}

.input:focus,
.input:active {
  border-color: #03a9f4;
  box-shadow: 0 0 4px #03A9F4;
  outline: none 0;
}

.button {
  margin: 3px;
  width: 55px;
  border: 1px solid #0d0d0d;
  height: 30px;
  border-radius: 4px;
  color: #d9d9d9;
  background-color: #1a1a1a;
  cursor: pointer;
  outline: none;
}

.mode {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.equal-sign {
  background-color: green;
  width: 115px;
}

.toggle-button {
  border: none;
  background-color: #2c3e50;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-family:'微软雅黑';
  color: #fff;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.35);
}

p {
  margin-top: 0;
}

button::-moz-focus-inner {
  border-color: transparent;
}
</style>
