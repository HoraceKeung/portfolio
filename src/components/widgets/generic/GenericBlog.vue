<template>
    <div class="container">
        <div class="card">
            <div class="blog-img-div">
                <img class="card-img-top" :src="specificBlogData.img" alt="Blog img">
            </div>
            <div class="card-body">
                <h2 class="card-title">{{splitCamel(name)}}</h2>
                <p><small>{{formatDate(specificBlogData.date)}}</small></P>
                <p>{{specificBlogData.desc}}</p>
                <slot name="blogBody"></slot>
                <p><span @click="search({namespace:'blog',str:'#'+t})" class="hash-tag pointer" v-for="t in specificBlogData.tags">{{'#'+t+' '}}</span></P>
                <router-link to="/blog">
                    <button class="btn btn-sm btn-dynamic" type="button">{{languageObj[28]}}</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/util/util'
import vuex from 'vuex'
export default {
    props: ['name', 'specificBlogData'],
    computed: vuex.mapGetters(['languageObj']),
    methods: Object.assign({},
        vuex.mapActions(['search']),
        util
    )
}
</script>

<style scoped>
</style>
