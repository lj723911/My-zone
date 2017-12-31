<template>
  <div class="main">
    <div class="lt-header">
      <h1>TodoList</h1>
      <form v-on:submit.prevent="getTask">
        <input v-model="newTask" placeholder="What needs to be done?"/>
      </form>   
    </div>
    <lists v-bind:lists="filterList"></lists>
    <div class="lt-footer">
          <span>{{filterList.length}} left</span>
          <ul class="filter">
            <li v-for='btn in btns' :class="[shown===btn.item?'selected':'']"
                @click="setShown" 
                :id='btn.item'>
                {{btn.content}}
            </li>
          </ul>
          <button class='clear-completed' v-on:click="clearCompleted">Clear completed</button>
    </div>
  </div>
</template>

<script>
  import lists from '@/components/todolist/lists.vue'
  export default {
    name: 'vuetodo',
    components: { lists },
    data () {
      return {
        newTask: '',
        newLists: [],
        btns: [
          {
            item: 'active',
            content: 'Active'
          }, {
            item: 'completed',
            content: 'Completed'
          }, {
            item: 'all',
            content: 'All'
          }
        ],
        shown: 'active'
      }
    },
    methods: {
      getTask: function () {
        var item = {
          text: this.newTask,
          showMorebtn: 'none',
          completed: false,
          editable: false
        }
        this.newLists.push(item)
        this.newTask = ''
      },
      setShown: function (e) {
        this.shown = e.currentTarget.getAttribute('id')
      },
      clearCompleted: function () {
        this.newLists = this.newLists.filter(function (item) {
          return item.completed === false
        })
      }
    },
    computed: {
      filterList: function () {
        if (this.shown === 'all') {
          return this.newLists
        } else if (this.shown === 'active') {
          return this.newLists.filter(function (item) { return item.completed === false })
        } else if (this.shown === 'completed') {
          return this.newLists.filter(function (item) { return !item.completed === false })
        } else {
          return this.newLists
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style: none;
}

/*细节*/
.header{
  width: 100%;
  margin:0px auto;
  text-align: center;
}
.lt-header form{
  width:100%;
  height:40px;
  border-radius: 5px;
  border:2px solid #2c3e50;
}
.lt-header input{
  width:96%;
  height:40px;
  padding:0 0 0 10px;
  outline:none;
  border:none;
}
.main{
  width:70%;
  margin:0px auto;
}
.lt-footer{
  width:100%;
  margin: 0px;
}
.lt-footer span{
  display:inline-block;
  height:20px;
  inline-height:20px;
  margin:18px 0px;
  float:left;
  color:#2c3e50;
  font-size:14px;
  font-weight:bold;
}
.lt-footer ul{
  display:inline-block;
  float:right;
}
.lt-footer a{

}
.lt-footer li{
  color:#2c3e50;
  font-size:10px;
  font-weight:bold;
  display: inline-block;
  padding:0px 15px;
  height: 20px;
  line-height: 20px;
  border-bottom:2px solid #2c3e50;
}
.lt-footer li:hover{
  cursor: pointer;
}
.lt-footer li.selected{
  border-bottom:2px solid #FFD04B;
}
.clear-completed{
  display: inline-block;
  margin:5px 30%;
  padding:0px;
  width: 40%;
  height: 20px;
  line-height: 20px;
  background-color: #2c3e50;
  border:none;
  color:#ffffff;
}
</style>
