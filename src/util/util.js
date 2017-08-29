const functions = {
    camelToKebab: function (string) {
        return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    },
    splitCamel: function (string) {
        return string.split(/(?=[A-Z])/g).join(' ')
    }
}

export default functions
