const state = {
    softwareSearchWord: '',
    softwareData: [],
    artSearchWord: '',
    artData: []
}

const mutations = {
    SET_SOFTWARE_SEARCH_WORD (state, str) {
        state.softwareSearchWord = str
    },
    ADD_SOFTWARE_DATA (state, data) {
        state.softwareData.push(data)
    },
    SET_ART_SEARCH_WORD (state, str) {
        state.artSearchWord = str
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
