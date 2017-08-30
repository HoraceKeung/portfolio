import util from '@/util/util'
import _ from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import Index from '@/components/Index'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import blogs from '@/components/blogs'
import Option from '@/components/Option'

Vue.use(Router)

// compute the blog children components
var blogArr = _.values(blogs).map(x => {
    if (typeof x.specificBlogData !== 'undefined') {
        // inject data from each blog to store
        store.commit('ADD_BLOG_DATA', Object.assign({}, x.specificBlogData, {name: x.name}))
    }
    return {
        path: util.camelToKebab(x.name),
        component: x
    }
})

const routes = [
    { path: '/', component: Index },
    { path: '/work', component: Work },
    { path: '/blog', component: Blog, children: blogArr },
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
