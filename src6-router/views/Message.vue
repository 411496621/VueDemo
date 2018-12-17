<template>
  <ul>
    <li>{{message.id}}</li>
    <li>{{message.name}}</li>
    <li>{{message.content}}</li>
  </ul>
</template>

<script>
  const messages = [
    {id:1,name:'message 001',content:'message content 001 '},
    {id:2,name:'message 002',content:'message content 002 '},
    {id:4,name:'message 004',content:'message content 004 '}
  ]
  export default {
    data() {
      return {
        message: {}
      }
    },
    mounted(){
      this.showUI(this.$route)
    },
    methods:{
      showUI(route){
        const id = route.params.index *1
        const message = messages.find(item=>item.id===id)
        this.message = message
      }
    },
    watch:{
      $route(value){
        this.showUI(value)
      }
    }
  }
</script>

<style scoped>

</style>
