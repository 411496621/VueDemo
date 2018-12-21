import axios from "axios"
import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutation-types'

export default {
  async search({commit,state},searchName){
    /*发送ajax请求*/
    /*请求中*/
    commit(REQUESTING)
    const url = `https://api.github.com/search/users?q=${searchName}`
    try{
      const response = await axios.get(url)
      const items = response.data.items
      const users = items.map(item=>({name:item.login,header:item.avatar_url,url:item.html_url}))
      /*请求成功*/
      commit(REQ_SUCCESS,users)
    }catch(err){
      /*请求失败*/
      commit(REQ_ERROR,"网络不稳定")
    }
  }
}
