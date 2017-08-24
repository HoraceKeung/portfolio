const actions = {
    // for option
    setIsDraggingMenu: function (store, bool) {
        store.commit('SET_IS_DRAGGING_MENU', bool)
    },
    setCircleMenuPosition: function (store, pos) {
        store.commit('SET_CIRCLE_MENU_POSITION', pos)
    }
}

export default actions
