const state = {
    isDraggingMenu: false,
    circleMenuPosition: 'top-left',
    themeColor: {
        hex: '#6540bf'
    }
}

const mutations = {
    SET_IS_DRAGGING_MENU (state, bool) {
        state.isDraggingMenu = bool
    },
    SET_CIRCLE_MENU_POSITION (state, pos) {
        state.circleMenuPosition = pos
    },
    SET_THEME_COLOR (state, color) {
        state.themeColor = color
    }
}

export default {
    state,
    mutations
}
