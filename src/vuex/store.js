import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import option from './modules/option'

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
    ]
}

const mutations = {
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        option
    },
    strict: true
})
