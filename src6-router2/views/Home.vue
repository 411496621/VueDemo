<template>
  <div>
    <h2>
      Home组件
    </h2>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/news">News</router-link></li>
        <li><router-link to="/home/messages">Home</router-link></li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log("Home")
    }
  }
</script>

<style scoped>
  .router-link-active{
    color:red !important;
  }
</style>
