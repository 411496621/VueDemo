<template>
  <div>
    <h2>
      About组件
    </h2>
    <p>{{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    props:['msg'],
    mounted(){
      console.log("About")
    }
  }
</script>

<style scoped>

</style>
