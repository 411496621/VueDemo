<template>
  <div>
    <h2>
      Home组件
    </h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
      <li>
        <!--<a href="/home/message" class="myActive" aria-current="page">Message</a>-->
        <router-link to="/home/message">Message</router-link>
      </li>
    </ul>
    <router-view />
  </div>

</template>

<script>
  export default {}
</script>

<style scoped>
  .router-link-active{
    color:red !important;
  }
</style>
