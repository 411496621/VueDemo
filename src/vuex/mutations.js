
import {REQUESTING,REQ_SUCCESS,REQ_ERROR} from "./mutation-types"
export default {
  [REQUESTING](state){
    state.isFirst = false
    state.isLoading = true
    state.users = []
    state.err = false
  },
  [REQ_SUCCESS](state,users){
    state.users = users
    state.isLoading = false
  },
  [REQ_ERROR](state,errMsg){
    state.err = errMsg
    state.isLoading = false
  }
}
