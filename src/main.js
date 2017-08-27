// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import App from '@/App'
import router from '@/router'
import store from '@/vuex/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
