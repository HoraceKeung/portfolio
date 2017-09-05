<template>
    <div>
        <img v-if="specificArtData.img" class="mw-100 mb-1 mx-auto d-block" :src='specificArtData.img'>
        <div v-if="specificArtData.modelId" class="sketchfab-embed-wrapper mb-1">
            <iframe class="model-iframe" :src="'https://sketchfab.com/models/'+specificArtData.modelId+'/embed'" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
        </div>
        <div class="previous-or-next text-center mb-3">
            <button @click="$router.push(previousAndNextArt.previous)" :disabled="previousAndNextArt.previous===null" class="btn btn-sm btn-dynamic" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button @click="$router.push(previousAndNextArt.next)" :disabled="previousAndNextArt.next===null" class="btn btn-sm btn-dynamic" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
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
    computed: Object.assign({},
        vuex.mapGetters(['languageObj', 'artData']),
        {
            previousAndNextArt: function () {
                var previous, next
                const sorted = util.sortObjByDate(this.artData.slice(0))
                for (let i = 0; i < sorted.length; i++) {
                    if (sorted[i].name === this.name) {
                        previous = typeof sorted[i - 1] === 'undefined' ? null : util.camelToKebab(sorted[i - 1].name)
                        next = typeof sorted[i + 1] === 'undefined' ? null : util.camelToKebab(sorted[i + 1].name)
                        break
                    }
                }
                return {previous, next}
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
/*https://www.h3xed.com/web-development/how-to-make-a-responsive-100-width-youtube-iframe-embed*/
.sketchfab-embed-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.model-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
