import moment from 'moment'

const functions = {
    camelToKebab: function (string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    },
    splitCamel: function (string) {
        return string.split(/(?=[A-Z])/g).join(' ')
    },
    formatDate: function (date) {
        return moment(date, 'YYYYMMDD').format('Do MMM YYYY')
    }
}

export default functions
