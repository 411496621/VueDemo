<template>
  <ul>
    <li v-for="(item,index) in data" :key="index">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        data:['news001','news002','news004']
      }
    }
  }
</script>

<style scoped>

</style>
