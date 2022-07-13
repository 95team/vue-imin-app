export default {
  namespaced: true,
  state () {
    return {
      parties: []
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
    addParty({ state, commit }, payload) {
      const week = ['일', '월', '화', '수', '목', '금', '토']
      const date = new Date(payload.date)
      payload.date = `${date.getMonth() + 1}/${date.getDate()} ${week[date.getDay()]}`
      commit('updateState', {
        parties: [
          ...state.parties,
          payload
        ]
      })
    }
  }
}