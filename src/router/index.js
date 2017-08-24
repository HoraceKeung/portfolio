import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import Option from '@/components/Option'

Vue.use(Router)

const routes = [
    { path: '/', component: Index },
    { path: '/work', component: Work },
    { path: '/blog', component: Blog },
    { path: '/option', component: Option }
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
