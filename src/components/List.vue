<template>
  <div class="row">
    <h2 v-if="isFirst">输入用户名搜索</h2>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-if="err">{{err}}</h2>
    <div v-if="users.length" v-for="(user,index)  in users" :key="index" class="card">
      <a :href="user.url" target="_blank">
        <img :src="user.header" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['isFirst','isLoading','users','err'])
    }
  }
</script>

<style scoped>

</style>
