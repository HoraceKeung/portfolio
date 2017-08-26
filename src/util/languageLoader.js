import store from '@/vuex/store'

const languageLoader = {
    load: function (language) {
        const obj = require('../../static/languages/' + language + '.json')
        store.commit('SET_LANGUAGE_OBJ', obj)
    }
}

export default languageLoader
