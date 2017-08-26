import 'whatwg-fetch'
import inputValidator from '@/util/inputValidator'
import alertController from '@/util/alertController'

const actions = {
    // for option
    setIsDraggingMenu: function (store, bool) {
        store.commit('SET_IS_DRAGGING_MENU', bool)
    },
    setCircleMenuPosition: function (store, pos) {
        store.commit('SET_CIRCLE_MENU_POSITION', pos)
    },
    // for contact form
    initContact: function (store) {
        store.commit('CLEAR_CONTACT_ERR')
    },
    submitContact: function (store) {
        var payload = {
            name: document.getElementById('contact-input-name').value,
            email: document.getElementById('contact-input-email').value,
            message: document.getElementById('contact-input-message').value
        }
        var nameErr = inputValidator.validate('Name', payload.name, [{name: 'REQUIRED', parameter: true}])
        store.commit('SET_CONTACT_ERR', {key: 'nameErr', value: nameErr})
        var emailErr = inputValidator.validate('Email', payload.email, [{name: 'REQUIRED', parameter: true}, {name: 'EMAIL', parameter: null}])
        store.commit('SET_CONTACT_ERR', {key: 'emailErr', value: emailErr})
        var messageErr = inputValidator.validate('Message', payload.message, [{name: 'REQUIRED', parameter: true}])
        store.commit('SET_CONTACT_ERR', {key: 'messageErr', value: messageErr})
        var allErrorMessages = nameErr.concat(emailErr, messageErr)
        if (allErrorMessages.length === 0) {
            store.commit('NEW_FETCH')
            fetch('https://formspree.io/horacekeung@hotmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(function (r) {
                store.commit('FETCH_DONE')
                if (r.status >= 200 && r.status < 300) {
                    alertController.callAlert('top', 'Thank you for your message!', 'success')
                    document.getElementById('contact-input-message').value = ''
                } else {
                    alertController.callAlert('top', 'Something went wrong!', 'danger')
                }
            })
        } else {
            alertController.callAlert('top', 'Invalid input!', 'danger')
        }
    }
}

export default actions
