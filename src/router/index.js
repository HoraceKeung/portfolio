import util from '@/util/util'
import _ from 'lodash'
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
import Index from '@/components/Index'
import Work from '@/components/Work'
import works from '@/components/works'
import Blog from '@/components/Blog'
import blogs from '@/components/blogs'
import Option from '@/components/Option'
import art from '@/components/works/art'
import software from '@/components/works/software'

Vue.use(Router)

const processChildren = function (obj, name, mutation) {
    return _.values(obj).map(x => {
        if (typeof x['specific' + name + 'Data'] !== 'undefined') {
            store.commit(mutation, Object.assign({}, x['specific' + name + 'Data'], {name: x.name}))
        }
        return {
            path: util.camelToKebab(x.name),
            component: x
        }
    })
}

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

var artArr = _.values(art).map(x => {
    return {
        path: util.camelToKebab(x.name),
        component: x
    }
})

var softwareArr = processChildren(software, 'Software', 'ADD_SOFTWARE_DATA')

const routes = [
    { path: '/', component: Index },
    {
        path: '/work',
        component: Work,
        children: [
            { path: '', component: works.WorkHome },
            { path: 'art', component: works.ArtHome, children: artArr },
            { path: 'software', component: works.SoftwareHome, children: softwareArr }
        ]
    },
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
