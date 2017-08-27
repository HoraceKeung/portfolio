import 'whatwg-fetch'
import inputValidator from '@/util/inputValidator'
import alertController from '@/util/alertController'
import languageLoader from '@/util/languageLoader'
import Cookies from 'js-cookie'
import tinycolor from 'tinycolor2'

const actions = {
    // for option
    setIsDraggingMenu: function (store, bool) {
        store.commit('SET_IS_DRAGGING_MENU', bool)
    },
    setCircleMenuPosition: function (store, pos) {
        store.commit('SET_CIRCLE_MENU_POSITION', pos)
    },
    loadLanguageObj: function (store) {
        const lc = Cookies.get('languageCookie')
        if (typeof lc === 'undefined') {
            languageLoader.load('English')// cookie not found, set default language to English
        } else {
            languageLoader.load(lc)
        }
    },
    setLang: function (store, lang) {
        languageLoader.load(lang)
        Cookies.set('languageCookie', lang)
    },
    setDefaultColour: function (store) {
        const cc = Cookies.get('colourCookie')
        if (typeof cc !== 'undefined') {
            actions.setColour(store, {hex: cc})
        }
    },
    setColour: function (store, obj) {
        document.documentElement.style.setProperty(`--${'color'}`, obj.hex)
        document.documentElement.style.setProperty(`--${'dark'}`, tinycolor(obj.hex).darken(15).toString())
        store.commit('SET_THEME_COLOR', obj)
        Cookies.set('colourCookie', obj.hex)
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
                    alertController.callAlert('top', store.state.languageObj[18], 'success')
                    document.getElementById('contact-input-message').value = ''
                } else {
                    alertController.callAlert('top', store.state.languageObj[19], 'danger')
                }
            })
        } else {
            alertController.callAlert('top', store.state.languageObj[20], 'danger')
        }
    }
}

export default actions
