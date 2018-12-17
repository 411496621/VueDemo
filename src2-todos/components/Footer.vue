<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{selectedCount}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="selectedCount>0" @click="deleteSelected">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:{
      todos:Array,
      deleteSelected:{
        type:Function,
        required:true
      },
      selectAll:{
        type:Function,
        required:true
      }
    },
    computed:{
      // 计算属性 被选中的个数
      selectedCount(){
        return this.todos.reduce((prev,curr)=>{
          return prev + (curr.complete? 1:0)
        },0)
      },
      // 计算属性 看是否全部被选中
      isAll:{
        get(){
          return this.selectedCount === this.todos.length && this.selectedCount
        },
        set(value){
          this.selectAll(value)
        }
      }

    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
