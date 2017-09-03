<template>
    <div>
        <img v-if="specificBlogData.img" class="w-100 mb-3" :src='specificBlogData.img'>
        <p><span class="hash-tag pointer" @click="search({namespace:'art',str:'#'+t})" v-for="t in specificBlogData.tags">{{'#'+t+' '}}</span></P>
        <router-link to="/work/art">
            <button class="btn btn-sm btn-dynamic" type="button">{{languageObj[28]}}</button>
        </router-link>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    props: ['specificBlogData'],
    computed: vuex.mapGetters(['languageObj']),
    methods: vuex.mapActions(['search'])
}
</script>

<style scoped>
</style>
