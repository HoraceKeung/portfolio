import store from '@/vuex/store'

const alertController = {
    callAlert: function (position, message, type) {
        var newAlert = {
            position: position, // top/bottom
            message: message, // string
            type: type // success/danger/info/warning
        }
        store.commit('PUSH_TO_ALERT_QUEUE', newAlert)
        if (!store.state.alert.isCheckingAlertQueue) {
            checkAlertQueue()
        }
    }
}

function checkAlertQueue () {
    if (store.state.alert.alertQueue.length > 0) {
        store.commit('SET_IS_CHECKING_ALERT_QUEUE', true)
        store.commit('SET_ALERT_POSITION', store.state.alert.alertQueue[0].position)
        store.commit('SET_ALERT_MESSAGE', store.state.alert.alertQueue[0].message)
        store.commit('SET_ALERT_TYPE', store.state.alert.alertQueue[0].type)
        store.commit('ADD_ALERT_TIMEOUT_HANDLES', store.state.alert.alertTimeoutHandles.length, setTimeout(function () { endAlert() }, store.state.alert.alertDuration))
    } else {
        store.commit('SET_IS_CHECKING_ALERT_QUEUE', false)
        store.commit('CLEAR_ALERT_TIMEOUT_HANDLES')
    }
}

function endAlert () {
    store.commit('SHIFT_ALERT_QUEUE')
    store.commit('SET_ALERT_POSITION', null)
    store.commit('SET_ALERT_MESSAGE', null)
    store.commit('SET_ALERT_TYPE', null)
    store.commit('CLEAR_TIMEOUT_FOR_ALERT_TIMEOUT_HANDLE', store.state.alert.alertTimeoutHandles.length)
    setTimeout(function () { checkAlertQueue() }, 1000)
}

export default alertController
