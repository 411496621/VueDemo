<template>
  <div>
    <HelloWorld />
    <hello-world />
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld"
  export default {
    name:"app",
    components:{
      HelloWorld
    }
  }
</script>

<style>
  img{
    width: 200px;
    height: 200px;
  }
</style>
