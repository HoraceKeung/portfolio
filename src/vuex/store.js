import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
}

const mutations = {
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
    },
    strict: true
})
