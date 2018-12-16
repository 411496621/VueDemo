<template>
  <div class="row">
    <h2 v-if="isFirst">输入用户名搜索</h2>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-if="err">网络不稳定 请刷新重试</h2>
    <div v-if="users.length" v-for="(user,index)  in users" :key="index" class="card">
      <a :href="user.url" target="_blank">
        <img :src="user.header" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from "axios"
  export default {
    mounted(){
      PubSub.subscribe('searchName',async (msg,searchName)=>{

        this.isFirst = false
        this.isLoading = true
        this.users = []
        const url = `https://api.github.com/search/users?q=${searchName}`
        try{
          const response = await axios.get(url)
          const items = response.data.items
          this.users = items.map(item=>({name:item.login,header:item.avatar_url,url:item.html_url}))
          this.isLoading = false
        }catch(err){
          this.isLoading = false
          this.err = true
        }

      })
    },
    data(){
      return {
        isFirst:true,
        isLoading:false,
        users:[],
        err:false
      }
    }
  }
</script>

<style scoped>

</style>
