export default {
  state: {
    compteur: 0
  },
  mutations: {
    setCompteur (state, value) {
      state.compteur = value
    }
  },
  actions: {
    incrementCompteur ({ commit, state }) {
      commit('setCompteur', state.compteur + 1)
    },
    setCompteur ({ commit }, value) {
      commit('setCompteur', value)
    }
  }
}
