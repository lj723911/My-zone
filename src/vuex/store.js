import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lifeData: {}
  },
  actions: {
  },
  mutations: {
    setLifedata: (state, value) => {
      state.lifeData = value
    },
    fixLifedata: (state, value) => {
      switch (value.category) {
        case 'sentence':state.lifeData.sentence = value; break
        case 'lyric':state.lifeData.lyric = value; break
        case 'thought':state.lifeData.thought = value; break
        case 'diary':state.lifeData.diary = value; break
      }
    }
  },
  getters: {
  },
  modules: {
  }
})
export default store
