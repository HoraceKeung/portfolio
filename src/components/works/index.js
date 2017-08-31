// https://gist.github.com/rmp135/aca1e54aec3838275b174f0db602467f
// load all vue components in this folder
const context = require.context('.', false, /\.vue$/)
export default context.keys().map(k => context(k)).reduce((obj, comp) => {
    obj[comp.name] = comp
    return obj
}, {})
