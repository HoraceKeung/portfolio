<template>
    <div class="container">
        <search-bar namespace="blog"></search-bar>
        <!-- START blog list -->
        <div v-for="(b,index) in searchedBlogData" :class="'card'+(index===searchedBlogData.length-1?'':' mb-3')">
            <div class="row">
                <div class="col-md-4">
                    <div class="blog-img-div">
                        <img class="card-img-top" :src="b.img" alt="Blog img">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{{splitCamel(b.name)}}</h2>
                        <p><small>{{formatDate(b.date)}}</small></P>
                        <p class="block-with-text">{{b.desc}}</p>
                        <p><span class="hash-tag pointer" v-for="t in b.tags" @click="search({namespace:'blog',str:'#'+t})">{{'#'+t+' '}}</span></P>
                        <div class="float-bottom">
                            <router-link :to="'/blog/'+camelToKebab(b.name)">
                                <button class="btn btn-sm btn-dynamic" type="button">{{languageObj[27]}}</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END blog list -->
    </div>
</template>

<script>
import SearchBar from '@/components/widgets/generic/SearchBar'
import util from '@/util/util'
import vuex from 'vuex'
export default {
    name: '', // this name is needed as the path
    components: {SearchBar},
    computed: Object.assign({},
        vuex.mapGetters(['blogData', 'languageObj', 'blogSearchWord']),
        {
            searchedBlogData () {
                return util.searchWorkOrBlog(this.blogData, this.blogSearchWord)
            }
        }
    ),
    methods: Object.assign({},
        vuex.mapActions(['search']),
        util
    )
}
</script>

<style scoped>
@media screen and (min-width: 767px) {
    .float-bottom {
        bottom: 0px;
        position: absolute;
        margin-bottom: 1.25rem;
    }
    .card-img-top {
        border-top-right-radius: 0px;
        border-bottom-left-radius: calc(0.25rem - 1px);
    }
}
</style>
