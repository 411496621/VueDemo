<template>
  <ul>
    <li>{{message.id}}</li>
    <li>{{message.title}}</li>
    <li>{{message.content}}</li>
  </ul>
</template>

<script>
  const messages = [
    {id:1,title:'message001',content:'message content001'},
    {id:2,title:'message002',content:'message content002'},
    {id:4,title:'message004',content:'message content004'}
  ]
  export default {
    data(){
      return{
        message:{}
      }
    },
    mounted(){
      const {id} = this.$route.params
      const message = messages.find(item=>item.id===id*1)
      this.message = message
    },
    watch:{
      $route(value){
        const id = value.params.id
        const message = messages.find(item=>item.id===id*1)
        this.message = message
      }
    }
  }
</script>

<style scoped>

</style>
