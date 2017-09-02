const state = {
    blogSearchWord: '',
    blogData: []
}

const mutations = {
    SET_BLOG_SEARCH_WORD (state, str) {
        state.blogSearchWord = str
    },
    ADD_BLOG_DATA (state, data) {
        state.blogData.push(data)
    }
}

export default {
    name: 'blog',
    state,
    mutations
}
