const state = {
    blogSearchWord: '',
    blogData: [
        {
            name: 'Long',
            tags: ['English'],
            img: '',
            desc: 'This is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long sentence',
            date: '20170904'
        },
        {
            name: 'HappyBirthday',
            tags: ['English', 'Website'],
            img: '',
            desc: 'Let us celebrate the birth of this website!',
            date: '20170904'
        }
    ]
}

const mutations = {
    SET_BLOG_SEARCH_WORD (state, str) {
        state.blogSearchWord = str
    }
}

export default {
    state,
    mutations
}
