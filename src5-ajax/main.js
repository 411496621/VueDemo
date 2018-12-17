import Vue from "vue"
import VueResource from "vue-resource"
import App from "./App"
import "./assets/index.css"

Vue.use(VueResource)

new Vue({
  el : '#app',
  components:{
    App
  },
  template:'<App/>'
})
