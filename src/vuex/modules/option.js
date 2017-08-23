const state = {
    isDraggingMenu: false,
    circleMenuPosition: 'top-left'
}

const mutations = {
    SET_IS_DRAGGING_MENU (state, bool) {
        state.isDraggingMenu = bool
    },
    SET_CIRCLE_MENU_POSITION (state, pos) {
        state.circleMenuPosition = pos
    }
}

export default {
    state,
    mutations
}
