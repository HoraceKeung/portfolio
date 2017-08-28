const state = {
    isDraggingMenu: false,
    circleMenuPosition: 'top-right', // default position, change this and update value in DragCircleMenu.vue
    themeColor: {
        hex: '#3C66FF'// default colour, change this and update value in color.css
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
