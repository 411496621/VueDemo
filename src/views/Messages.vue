<template>
  <div>
    <ul>
      <li v-for="(m,index) in messages" :key="index">
        <router-link :to="`/home/messages/${m.id}`">{{m.title}}</router-link>
        <button @click="push(m.id)">push查看</button>
        <button @click="replace(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="back">Back</button>
    <router-view />
  </div>
</template>

<script>
  export default {
    data(){
      return{
        messages:[]
      }
    },
    methods:{
      push(id){
/*        this.$router.push(`/home/messages/${id}`)*/
        this.$router.push({path:`/home/messages/${id}`})
      },
      replace(id){
       /* this.$router.replace(`/home/messages/${id}`)*/
        this.$router.replace({name:'message',params:{id}})
      },
      back(){
        this.$router.back()
      }
    },
    mounted(){
      setTimeout(()=>{
        const messages = [
          {id:1,title:'message001'},
          {id:2,title:'message002'},
          {id:4,title:'message004'},
        ]
        this.messages = messages
      },1000)
    }
  }
</script>

<style scoped>

</style>
