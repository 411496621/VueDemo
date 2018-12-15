<template>
  <li :style="{background:bgColor}" @mouseenter="hover(true)" @mouseleave="hover(false)">
    <label>
      <input type="checkbox" v-model="todo.complete">
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" :class="{active:isShow}" @click="removeItem"  >删除</button>
  </li>
</template>

<script>
  export default {
    props:{
      todo:Object,
      deleteTodo:{
        type:Function,
        required:true
      },
      index:Number
    },
    data(){
      return {
        bgColor:'#fff',
        isShow:false
      }
    },
    methods:{
      hover(type){
        if(type){ //颜色变灰 显示
          this.bgColor = "#ccc"
          this.isShow = true
        }else{
          this.bgColor = "#fff"
          this.isShow = false
        }
      },
      removeItem(){
        if(window.confirm(`确认要删除${this.todo.title}吗`)){
          this.deleteTodo(this.index)
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
    display: none;
    margin-top: 3px;
  }
  li button.active{
    display:block;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
