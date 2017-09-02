const state = {
    softwareData: [],
    artData: []
}

const mutations = {
    ADD_SOFTWARE_DATA (state, data) {
        state.softwareData.push(data)
    },
    ADD_ART_DATA (state, data) {
        state.artData.push(data)
    }
}

export default {
    name: 'work',
    state,
    mutations
}
