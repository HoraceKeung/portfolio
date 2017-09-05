<template>
    <div class="container">
        <search-bar namespace="software"></search-bar>
        <div class="row no-gutters">
            <div class="col-sm-6 col-md-3 work-square pointer" v-for="a in searchedSoftwareData" @click="$router.push('software/'+camelToKebab(a.name))">
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
        vuex.mapGetters(['softwareData', 'softwareSearchWord', 'languageObj']),
        {
            searchedSoftwareData () {
                return util.searchWorkOrBlog(this.softwareData, this.softwareSearchWord)
            }
        }
    ),
    methods: util
}
</script>

<style scoped>
</style>
