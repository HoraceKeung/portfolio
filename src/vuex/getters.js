const getters = {
    pathIconMap: function (state) {
        return state.pathIconMap
    },
    // for spinner
    spinnerConfig: function (state) {
        return state.spinnerConfig
    },
    // for alert
    alertPosition: function (state) {
        return state.alert.alertPosition
    },
    alertMessage: function (state) {
        return state.alert.alertMessage
    },
    alertType: function (state) {
        return state.alert.alertType
    },
    // for option
    isDraggingMenu: function (state) {
        return state.option.isDraggingMenu
    },
    circleMenuPosition: function (state) {
        return state.option.circleMenuPosition
    },
    themeColor: function (state) {
        return state.option.themeColor
    },
    languageObj: function (state) {
        return state.languageObj
    },
    // for contact form
    contactErr: function (state) {
        return state.contact.contactErr
    },
    // for blog
    blogData: function (state) {
        return state.blog.blogData
    },
    blogSearchWord: function (state) {
        return state.blog.blogSearchWord
    },
    // for work
    softwareData: function (state) {
        return state.work.softwareData
    },
    artData: function (state) {
        return state.work.artData
    }
}

export default getters
