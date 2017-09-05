<template>
    <div class="container">
        <div class="card">
            <div class="big-card-img-div">
                <img class="card-img-top" :src="specificSoftwareData.img" alt="Software img">
            </div>
            <div class="card-body">
                <h2 class="card-title">{{splitCamel(name)}}</h2>
                <p><small>{{'Last worked on '+formatDate(specificSoftwareData.date)}}</small></P>
                <slot name="softwareBody"></slot>
                <p><span @click="search({namespace:'software',str:'#'+t})" class="hash-tag pointer" v-for="t in specificSoftwareData.tags">{{'#'+t+' '}}</span></P>
                <router-link to="/work/software">
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
    props: ['name', 'specificSoftwareData'],
    computed: vuex.mapGetters(['languageObj']),
    methods: Object.assign({},
        vuex.mapActions(['search']),
        util
    )
}
</script>

<style scoped>
</style>
