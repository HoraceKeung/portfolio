<template>
    <div class="input-group mb-3">
        <span class="input-group-addon" :id="'search-'+namespace+'-addon'"><i class="fa fa-search mr-1" aria-hidden="true"></i>{{languageObj[29]}}</span>
        <input :value="searchWord" @input="search({namespace:namespace,str:$event.target.value.trim()})" type="text" class="form-control" :placeholder="languageObj[33]" aria-label="SearchArt" aria-describedby="search-art-addon">
        <span class="input-group-btn" v-if="searchWord!==''">
            <button class="btn btn-danger" type="button" @click="search({namespace:namespace,str:''})">{{languageObj[30]}}</button>
        </span>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    props: ['namespace'],
    computed: Object.assign({},
        vuex.mapGetters(['languageObj', 'blogSearchWord', 'softwareSearchWord', 'artSearchWord']),
        {
            searchWord () {
                return this[this.namespace + 'SearchWord']
            }
        }
    ),
    methods: vuex.mapActions(['search'])
}
</script>

<style scoped>
</style>
