const state = {
    alertPosition: null,
    alertMessage: null,
    alertType: null,
    alertQueue: [],
    isCheckingAlertQueue: false,
    alertTimeoutHandles: [],
    alertDuration: 3500
}

const mutations = {
    SET_ALERT_POSITION (state, string) {
        state.alertPosition = string
    },
    SET_ALERT_MESSAGE (state, message) {
        state.alertMessage = message
    },
    SET_ALERT_TYPE (state, type) {
        state.alertType = type
    },
    PUSH_TO_ALERT_QUEUE (state, newAlert) {
        state.alertQueue.push(newAlert)
    },
    SET_IS_CHECKING_ALERT_QUEUE (state, bool) {
        state.isCheckingAlertQueue = bool
    },
    ADD_ALERT_TIMEOUT_HANDLES (state, handle) {
        state.alertTimeoutHandles.push(handle)
    },
    CLEAR_ALERT_TIMEOUT_HANDLES (state) {
        state.alertTimeoutHandles = []
    },
    CLEAR_TIMEOUT_FOR_ALERT_TIMEOUT_HANDLE (state, key) {
        clearTimeout(state.alertTimeoutHandles[key])
    },
    SHIFT_ALERT_QUEUE (state) {
        state.alertQueue.shift()
    }
}

export default {
    state,
    mutations
}
