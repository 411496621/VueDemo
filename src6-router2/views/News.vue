<template>
  <ul>
    <li v-for="(Item,index) in news" :key="index">
      {{Item}}
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return{
        news:['news001','news002','news004']
      }
    }
  }
</script>

<style scoped>

</style>
