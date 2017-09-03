<template>
    <div class="container">
        <div class="row no-gutters">
            <div class="col-sm-3 work-square pointer" v-for="a in artData" @click="$router.push('art/'+camelToKebab(a.name))">
                <div class="aligner"><h4 class="art-name mx-3">{{splitCamel(a.name).toUpperCase()}}</h4></div>
                <img :src="a.icon" alt="art img">
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/util/util'
import vuex from 'vuex'
export default {
    name: '', // this name is needed as the path
    computed: vuex.mapGetters(['artData']),
    methods: Object.assign({},
        util
    )
}
</script>

<style scoped>
.work-square img {
    width: 100%;
}
.art-name {
    color: transparent;
}
</style>
