import Vue from 'vue'
import Vuex from 'vuex'

// Install the store instance as a plugin
Vue.use(Vuex)

const store = () => new Vuex.store({
  state: {
    counter: 0
  },

  mutations: {
    increment(state) {
      state.counter++
    }
  }
})

export default store