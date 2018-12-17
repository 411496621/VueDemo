<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="searchName" placeholder="enter the name you search"/>
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
  import PubSub from "pubsub-js"
  export default {
    data(){
      return {
        searchName:''
      }
    },
    methods:{
      search(){
        PubSub.publish('searchName',this.searchName)
        this.searchName = ''
      }
    }
  }
</script>

<style scoped>

</style>
