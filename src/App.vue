<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :todos="todos" :addTodo="addTodo" /> <!-- :addTodo ='addTodo.bind(this)' -->
      <List :todos="todos" :deleteTodo="deleteTodo" />
      <Footer :todos="todos" :selectAll="selectAll" :deleteSelected="deleteSelected" />
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header"
  import List from "./components/List"
  import Footer from "./components/Footer"
  import {readTodos,saveTodos} from "./untils/StorageUntils"
  import "./base.css"
  export default {
    /*数据定义在哪 修改数据的方法就定义在哪*/
    data(){
      return {
        todos: readTodos()
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      // 删除选中的部分
      deleteSelected(){
         this.todos = this.todos.filter((item)=> !item.complete )
      },
      // 是否选中所有的todo
      selectAll(isAll){
        this.todos.map((item)=>item.complete = isAll)
      }

    },
    components:{
      Header,
      List,
      Footer
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
