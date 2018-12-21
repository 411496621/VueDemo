import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import News from "../views/News"
import Messages from "../views/Messages"
import Message from "../views/Message"

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history', // 去掉路径中的#号
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'messages',
          component:Messages,
          children:[
            {
              name:'message',
              path:'/home/messages/:id',
              component:Message
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
