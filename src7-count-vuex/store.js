import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


const state = {
  count:0
}
//通过state的一些属性 计算得出来的属性值
const getters ={
  evenOrOdd(state){
    return state.count%2?"奇数":"偶数"
  }
}
const actions = {
  increment({commit}){
    commit(INCREMENT)
  },
  decrement({commit}){
    commit(DECREMENT)
  },
  incrementIfOdd({commit,state}){
    if(state.count%2){
      commit(INCREMENT)
    }
  },
  incrementAsync({commit}){
    setTimeout(()=>{
      commit(INCREMENT)
    },1000)
  }

}
const mutations = {
  [INCREMENT](state){
    state.count++
  },
  [DECREMENT](state){
    state.count--
  }
}


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
