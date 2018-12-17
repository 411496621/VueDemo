<template>
  <div>
    <ul>
      <li  v-for="(message,index) in messages" :key="message.id">
        <router-link :to="`/home/message/${message.id}`">{{message.name}}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted(){
      setTimeout(()=>{
        this.messages = [
          {id:1,name:'message 001',content:'message content 001 '},
          {id:2,name:'message 002',content:'message content 002 '},
          {id:4,name:'message 004',content:'message content 004 '}
        ]
      },1000)
    },
    data(){
      return{
        messages:[]
      }
    }
  }
</script>

<style scoped>

</style>
