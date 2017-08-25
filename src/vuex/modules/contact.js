import vue from 'vue'
import _ from 'lodash'

const state = {
    contactErr: {
        nameErr: [],
        emailErr: [],
        messageErr: []
    }
}

const mutations = {
    CLEAR_CONTACT_ERR (state) {
        _.forEach(state.contactErr, function (value, key) {
            vue.set(state.contactErr, key, [])
        })
    },
    SET_CONTACT_ERR (state, payload) {
        vue.set(state.contactErr, payload.key, payload.value)
    }
}

export default {
    state,
    mutations
}
