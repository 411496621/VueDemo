<template>
  <li :style="{background:bgColor}" @mouseenter="hover(true)" @mouseleave="hover(false)">
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="removeItem(index)" v-show="isShow">删除</button>
  </li>
</template>

<script>
  import PubSub from "pubsub-js"
  export default {
    props:{
      todo:Object,
      index:Number
    },
    data(){
      return{
        isShow:false,
        bgColor:'#fff'
      }
    },
    methods:{
      hover(type){
        if(type){ // 此时颜色为灰色 显示按钮
          this.isShow = true
          this.bgColor = '#ccc'
        }else{
          this.isShow = false
          this.bgColor = "#fff"
        }
      },
      removeItem(index){
        if(window.confirm(`确认要删除${this.todo.title}吗？`)){
          PubSub.publish('deleteTodo',index)
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
