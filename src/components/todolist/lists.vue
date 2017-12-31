<template>
<div>
  <ul class='todo-list' >
    <li v-if="lists.length">
      <div class="view">
        <input type='checkbox' :checked = 'isAllchoosed' :class="['isAllchoosed'?'active':'completed']"/>
        <label @click='chooseAll'></label>全选
      </div>
    </li>
    <li v-for="item in lists">
      <div class='view'>
        <input :class="[item.completed===false?'active':'completed']" type='checkbox'
        :checked = 'item.completed'
        />
        <label @click='changeCompleted(item)'></label>
        <input class="editable" type="text" :value='item.text' readonly 
               :class="[item.editable?'hiddenit':'showit']">
        <input class="editable" type="text" v-model='curText' 
               :class="[item.editable?'showit':'hiddenit']">
      </div>
      <div class='more_btn'>
        <button class='delete_btn' @click="deleteTask(item)" 
          v-bind:style="{display:item.showMorebtn}">
          <i class="el-icon-delete"></i>
        </button>
        <button class='savedit_btn' @click="saveEdit(item)" 
          v-bind:style="{display:item.showMorebtn}">
          <i class="el-icon-circle-check-outline"></i>
        </button>
        <button class='choose' v-on:click="moreBtn(item)">
          <i class="el-icon-edit-outline"></i>
        </button>
      </div>                                    
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'lists',
    data () {
      return {
        curText: ''
      }
    },
    props: ['lists'],
    methods: {
      changeCompleted: function (item) {
        if (item.completed === false) {
          item.completed = true
        } else if (item.completed === true) {
          item.completed = false
        }
      },
      chooseAll: function () {
        this.lists.map(function (item) {
          item.completed = true
        })
      },
      moreBtn: function (item) {
        if (item.showMorebtn === 'block') {
          item.showMorebtn = 'none'
          item.editable = false
        } else if (item.showMorebtn === 'none') {
          // 先把所有的任务的编辑状态关闭
          this.lists.map(function (item) {
            item.showMorebtn = 'none'
            item.editable = false
          })
          // 切换当前编辑状态
          item.showMorebtn = 'block'
          item.editable = true
        };
        this.curText = item.text
      },
      saveEdit: function (item) {
        item.text = this.curText
        item.showMorebtn = 'none'
        item.editable = false
      },
      deleteTask: function (item) {
        var index = this.lists.indexOf(item)
        this.lists.splice(index, 1)
      }
    },
    computed: {
      isAllchoosed: function () {
        var count = 0
        this.lists.map(function (item) {
          if (item.completed === true) {
            count++
          }
        })
        return this.lists.length > 0 && count === this.lists.length
      }
    }
  }
</script>

<style scope>
.showit{
  display:block
}
.hiddenit{
  display:none
}
.todo-list{
  width:100%;
  border:2px solid #2c3e50;
  list-style-type:none;
  padding:0px;
  border-radius:5px;
}
.todo-list li{
  display:flex;
  align-items:center;
  height:40px;
  line-feight:40px;
}
.view{
  display:flex;
  align-items:center;
  width:95%;
  text-align:left;
  margin:5px;
}
input[type="checkbox"]{
  display:none;
}
input[type="checkbox"]+label{
  cursor: pointer;
  font-size: 12px;
  background-color: #ffffff;
  border: 2px solid #2c3e50;
  padding: 0px;
  margin-right:5px;
  border-radius: 3px;
  display: inline-block;
  width:10px;
  height:10px;
}
input[type="checkbox"]:checked + label {
  background-color: #2c3e50;
  border: 2px solid #FFD04B;
}
.more_btn{
  display:flex;
}
.more_btn button{
  border-radius:50%;
  border:none;
  background-color:#ffffff;
  width:25px;
  height:25px;
  outline:none;
}
.editable{
  width:100%;
  border:none;
  border-bottom:1px solid #2c3e50;
}
</style>