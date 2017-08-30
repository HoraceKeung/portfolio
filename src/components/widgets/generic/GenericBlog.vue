<template>
    <div class="container">
        <div class="card">
            <div class="blog-img-div">
                <img class="card-img-top" src="http://via.placeholder.com/1500x284" alt="Blog img">
            </div>
            <div class="card-body">
                <h2 class="card-title">{{thisBlog.title}}</h2>
                <p><small>{{formatDate(thisBlog.date)}}</small></P>
                <p>{{thisBlog.desc}}</p>
                <slot name="blogBody"></slot>
                <p><span class="hash-tag pointer" v-for="t in thisBlog.tags">{{'#'+t+' '}}</span></P>
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
    props: ['name'],
    computed: Object.assign({},
        vuex.mapGetters(['blogData', 'languageObj']),
        {
            thisBlog () {
                return Object.assign({},
                    this.blogData.filter(x => {
                        return x.name === this.name
                    })[0],
                    {
                        title: util.splitCamel(this.name)
                    }
                )
            }
        }
    ),
    methods: Object.assign({},
        util
    )
}
</script>

<style scoped>
</style>
