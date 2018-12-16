<template>
  <div>
    <mt-button style="width:100%" type="danger" @click="show">button</mt-button>
  </div>
</template>

<script>
  import {Toast} from "mint-ui"
  export default {
    methods:{
      show(){
        Toast({
          message:'hello',
          position:"bottom",
          duration:3000
        })
      }
    }
  }
</script>

<style scoped>

</style>
