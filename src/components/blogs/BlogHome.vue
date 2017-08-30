<template>
    <div class="container">
        <div class="mb-3">
            <div class="input-group">
                <span class="input-group-addon" id="search-blog-addon"><i class="fa fa-search mr-1" aria-hidden="true"></i>{{languageObj[29]}}</span>
                <input :value="blogSearchWord" @input="searchBlog($event.target.value.trim())" type="text" class="form-control" placeholder="Search by title or tag (e.g. #English)" aria-label="SearchBlog" aria-describedby="search-blog-addon">
            </div>
        </div>
        <div v-for="(b,index) in searchedBlogData" :class="'card'+(index===searchedBlogData.length-1?'':' mb-3')">
            <div class="row">
                <div class="col-md-4">
                    <div class="blog-img-div">
                        <img class="card-img-top" src="http://via.placeholder.com/1500x284" alt="Blog img">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">{{splitCamel(b.name)}}</h2>
                        <p><small>{{formatDate(b.date)}}</small></P>
                        <p class="block-with-text">{{b.desc}}</p>
                        <p><span class="hash-tag pointer" v-for="t in b.tags" @click="searchBlog('#'+t)">{{'#'+t+' '}}</span></P>
                        <div class="float-bottom">
                            <router-link :to="'/blog/'+camelToKebab(b.name)">
                                <button class="btn btn-sm btn-dynamic" type="button">{{languageObj[27]}}</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import util from '@/util/util'
import vuex from 'vuex'
export default {
    name: '', // this name is needed as the path
    computed: Object.assign({},
        vuex.mapGetters(['blogData', 'languageObj', 'blogSearchWord']),
        {
            searchedBlogData () {
                if (this.blogSearchWord === '') {
                    return this.blogData
                }
                return this.blogData.filter((x) => {
                    const titleArr = util.splitCamel(x.name).toLowerCase().split(' ')
                    const searchWordArr = this.blogSearchWord.toLowerCase().split(' ').filter((x) => {
                        return x.charAt(0) !== '#'
                    })
                    for (let i = 0; i < titleArr.length; i++) {
                        for (let j = 0; j < searchWordArr.length; j++) {
                            if (titleArr[i].includes(searchWordArr[j])) {
                                return true
                            }
                        }
                    }
                    const searchTagArr = this.blogSearchWord.toLowerCase().split(' ').filter((x) => {
                        return x.charAt(0) === '#'
                    }).reduce((a, b) => {
                        return a.concat(_.drop(b.split('#')))
                    }, [])
                    for (let i = 0; i < x.tags.length; i++) {
                        for (let j = 0; j < searchTagArr.length; j++) {
                            if (x.tags[i].toLowerCase() === searchTagArr[j]) {
                                return true
                            }
                        }
                    }
                })
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
