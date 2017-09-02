// https://gist.github.com/rmp135/aca1e54aec3838275b174f0db602467f
// load all modules in this folder
const context = require.context('.', false, /\.js$/)
export default context.keys().map(k => context(k)).reduce((obj, mod) => {
    if (typeof mod.default !== 'undefined') {
        obj[mod.default.name] = mod.default
    }
    return obj
}, {})
