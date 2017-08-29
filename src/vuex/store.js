import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import alert from './modules/alert'
import option from './modules/option'
import contact from './modules/contact'
import blog from './modules/blog'

Vue.use(Vuex)

const state = {
    languageObj: null,
    pathIconMap: [
        {
            path: 'home',
            icon: 'fa-home',
            langId: 0
        },
        {
            path: 'work',
            icon: 'fa-folder',
            langId: 1
        },
        {
            path: 'blog',
            icon: 'fa-rss',
            langId: 2
        },
        {
            path: 'option',
            icon: 'fa-cog',
            langId: 3
        }
    ],
    spinnerConfig: {
        loading: false,
        size: '30px'
    },
    totalFetch: 0
}

const mutations = {
    SET_LANGUAGE_OBJ (state, obj) {
        state.languageObj = obj
    },
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
        alert,
        blog
    },
    strict: true
})
