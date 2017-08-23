const getters = {
    // for option
    isDraggingMenu: function (state) {
        return state.option.isDraggingMenu
    },
    circleMenuPosition: function (state) {
        return state.option.circleMenuPosition
    }
}

export default getters
