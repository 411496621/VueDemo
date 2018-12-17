import Vue from "vue"
import App from "./App"
import {Button} from "mint-ui"


Vue.component(Button.name,Button) // 注册全局组件 使其在任何组件内都可以使用 mt-button
new Vue({
  el:'#app',
  components:{
    App
  },
  template:"<App/>"
})
