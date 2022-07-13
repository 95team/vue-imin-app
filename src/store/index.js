import { createStore } from 'vuex'
import home from './home'
import group from './group'
import party from './party'

export default createStore({
  modules: {
    home,
    group,
    party
  }
})