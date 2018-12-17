import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import News from "../views/News"
import Messages from "../views/Messages"
import Message from '../views/Message'
Vue.use(VueRouter)

export default new VueRouter({

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
          path:'message',
          component:Messages,
          children:[
            {
              path:"/home/message/:index",
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
