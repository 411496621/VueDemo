<template>
  <div class="todo-footer">
    <label>
      <!--<input v-model="isSelectedAll" type="checkbox"/>-->
      <slot name="left"></slot>
    </label>
    <span>
      <!--<span>已完成{{selectedCount}}  / 全部{{todos.length}}</span>-->
      <slot name="middle"></slot>
    </span>
    <!--<button class="btn btn-danger" v-show="selectedCount" @click="deleteSelectedTodos">清除已完成任务</button>-->
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {

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
