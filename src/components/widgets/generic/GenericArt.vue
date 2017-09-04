<template>
    <div>
        <img v-if="specificArtData.img" class="mw-100 mb-3 mx-auto d-block" :src='specificArtData.img'>
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">{{splitCamel(name)}}</h2>
                <p><small>{{formatDate(specificArtData.date)}}</small></P>
                <p v-if="specificArtData.desc">{{specificArtData.desc}}</p>
                <p><span class="hash-tag pointer" @click="search({namespace:'art',str:'#'+t})" v-for="t in specificArtData.tags">{{'#'+t+' '}}</span></P>
                <router-link to="/work/art">
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
    props: ['name', 'specificArtData'],
    computed: vuex.mapGetters(['languageObj']),
    methods: Object.assign({},
        vuex.mapActions(['search']),
        util
    )
}
</script>

<style scoped>
</style>
