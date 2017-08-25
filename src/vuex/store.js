import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import alert from './modules/alert'
import option from './modules/option'
import contact from './modules/contact'

Vue.use(Vuex)

const state = {
    pathIconMap: [
        {
            path: 'home',
            icon: 'fa-home'
        },
        {
            path: 'work',
            icon: 'fa-folder'
        },
        {
            path: 'blog',
            icon: 'fa-rss'
        },
        {
            path: 'option',
            icon: 'fa-cog'
        }
    ],
    spinnerConfig: {
        loading: false,
        size: '30px'
    },
    totalFetch: 0
}

const mutations = {
    NEW_FETCH (state) {
        state.totalFetch++
        state.spinnerConfig.loading = state.totalFetch > 0
    },
    FETCH_DONE (state) {
        state.totalFetch--
        state.spinnerConfig.loading = state.totalFetch > 0
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        option,
        contact,
        alert
    },
    strict: true
})
