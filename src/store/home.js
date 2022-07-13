export default {
  namespaced: true,
  state: () => {
    return {
      link: '',
      id: ''
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
    createId({ commit }, payload) {
      commit('updateState', {
        id: payload.id
      })
    },
    async copyLink({ state, commit }) {
      try {
        const url = document.location.href
        const link = await navigator.clipboard.writeText(`${url}group/${state.id}`)
        commit('updateState', {
          link,
        })
      } catch (err) {
        alert(err)
      }
    }
  }
}