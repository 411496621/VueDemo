<template>
  <div>
    <div>click: {{$store.state.count}} times, count is{{$store.getters.evenOrOdd}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
  export default {
    methods:{
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
    }
  }
</script>

<style scoped>

</style>
