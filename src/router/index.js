import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Contact from '@/components/Contact'

Vue.use(Router)

const routes = [
    { path: '/', component: Index },
    { path: '/contact', component: Contact }
]

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})

export default router
