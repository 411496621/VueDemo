<template>
  <div>
    <div>click: {{count}} times, count is{{evenOrOdd}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from "vuex"
  export default {

    /*通过map映射 获取state和getters属性 还可以映射actions*/
    /*computed:{
      count(){
        return this.$store.state.count
      },
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }
    },*/
    computed:{
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }

    /*methods:{
      increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }*/
  }
</script>

<style scoped>

</style>
