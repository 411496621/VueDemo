<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"/> <!--绑定事件监听  事件名和对应的回调函数-->
      <List :todos="todos" />
      <Footer>
        <button slot="right" class="btn btn-danger" v-show="selectedCount" @click="deleteSelectedTodos">清除已完成任务</button>
        <input slot="left" v-model="isSelectedAll" type="checkbox"/>
        <span  slot="middle">已完成{{selectedCount}}  / 全部{{todos.length}}</span>
      </Footer>
    </div>
  </div>
</template>

<script >
  import PubSub from "pubsub-js"
  import Header from "./components/Header"
  import List from "./components/List"
  import Footer from "./components/Footer"
  import {readTodos,saveTodos} from "./untils/StorageUntils"
  export default {

    mounted(){
      setTimeout(()=>{
         this.todos = readTodos()
      },2000)

      PubSub.subscribe("deleteTodo",(msg,index)=>{
        this.deleteTodo(index)
      })
    },
    data(){
      return {
        todos:[]
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      selectAllTodos(isAll){
        this.todos = this.todos.map( item=>({complete:isAll,title:item.title}) )
      },
      deleteSelectedTodos(){
        this.todos = this.todos.filter(item=>!item.complete)
      }
    },
    components:{
      Header,
      List,
      Footer
    },
    computed:{
      selectedCount(){
        return this.todos.reduce((prev,curr)=>prev + (curr.complete?1:0),0)
      },
      isSelectedAll:{
        get(){
          return this.todos.length === this.selectedCount && this.selectedCount
        },
        set(value){
          this.selectAllTodos(value)
        }
      }
    },
    watch:{
      todos:{
        deep:true,
        handler:saveTodos
      }
    }

  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
