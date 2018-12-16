<template>
  <div>
    <h2 v-if="isLoading">Loading...</h2>
    <div v-else>most star repo is <a :href="respUrl">{{respName}}</a></div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    async mounted(){
      const url ='https://api.github.com/search/repositories?q=v&sort=stars'
      try{
        // 使用vue-resource 发送ajax 请求
        /*const response =  await this.$http.get(url)
        const result = response.data
        const items = result.items[0]
        this.isLoading = false
        this.respName = items.name
        this.respUrl = items.html_url*/
        // 使用axios发送请求

        const response = await axios.get(url)
        const result = response.data
        const items = result.items[0]
        this.isLoading = false
        this.respName = items.name
        this.respUrl = items.html_url

      }catch(error){
        alert('请求失败了')
      }
    },
    data(){
      return {
        isLoading:true,
        respName:'',
        respUrl:''
      }
    }
  }
</script>

<style scoped>

</style>
