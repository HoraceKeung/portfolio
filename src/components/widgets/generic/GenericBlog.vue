<template>
    <div class="container">
        <div class="card">
            <div class="blog-img-div">
                <img class="card-img-top" :src="thisBlog.img" alt="Blog img">
            </div>
            <div class="card-body">
                <h2 class="card-title">{{thisBlog.title}}</h2>
                <p><small>{{formatDate(thisBlog.date)}}</small></P>
                <p>{{thisBlog.desc}}</p>
                <slot name="blogBody"></slot>
                <p><span @click="searchBlog('#'+t)" class="hash-tag pointer" v-for="t in thisBlog.tags">{{'#'+t+' '}}</span></P>
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
    computed: Object.assign({},
        vuex.mapGetters(['languageObj']),
        {
            thisBlog () {
                return Object.assign({},
                    this.specificBlogData,
                    {
                        title: util.splitCamel(this.name)
                    }
                )
            }
        }
    ),
    methods: Object.assign({},
        vuex.mapActions(['searchBlog']),
        util
    )
}
</script>

<style scoped>
</style>
