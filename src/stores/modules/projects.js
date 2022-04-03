import axios from 'axios'

const state = () => ({
  items: [],
})

const actions = {
  async setItems(state) {
    const { data } = await axios.get('https://api.github.com/orgs/codegoen/repos')

    state.commit('setItems', data)
  },
}

const mutations = {
  setItems(state, payload) {
    state.items = payload
  },
}

const getters = {
  getItems(state) {
    return state.items
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
