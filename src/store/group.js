export default {
  namespaced: true,
  state: () => {
    return {
      title: '그룹1',
      description: '그룹기타설명'
    }
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    change({ commit }, payload) {
      commit('updateState', payload)
    }
  }
}