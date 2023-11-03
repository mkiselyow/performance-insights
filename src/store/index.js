import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export let resolveCreatedFunction

export default new Vuex.Store({
  state: {
    rootAppCreatedPromise: new Promise((resolve) => {
      resolveCreatedFunction = resolve
    }),
    productData: null
  },
  getters: {
  },
  mutations: {
    SET_PRODUCT_DATA (state, data) {
      state.productData = data
    }
  },
  actions: {
  },
  modules: {
  }
})
