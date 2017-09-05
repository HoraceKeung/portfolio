<template>
    <div class="container">
        <search-bar namespace="art"></search-bar>
        <div class="row no-gutters">
            <div class="col-sm-6 col-md-3 work-square pointer" v-for="a in searchedArtData" @click="$router.push('art/'+camelToKebab(a.name))">
                <div class="aligner"><h4 class="mx-3">{{splitCamel(a.name).toUpperCase()}}</h4></div>
                <img :src="a.icon" :alt="a.name">
            </div>
        </div><br>
        <router-link to="/work">
            <button class="btn btn-sm btn-dynamic" type="button">{{languageObj[28]}}</button>
        </router-link>
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
        vuex.mapGetters(['artData', 'artSearchWord', 'languageObj']),
        {
            searchedArtData () {
                return util.searchWorkOrBlog(this.artData, this.artSearchWord)
            }
        }
    ),
    methods: util
}
</script>

<style scoped>
</style>
