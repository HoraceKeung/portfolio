<template>
    <div class="work-home-div">
        <div class="card-deck">
            <div class="card" v-for="w in workCategories">
                <div class="card-body" @click="$router.push(w.link)">
                    <div class="aligner"><h4 class="card-text mx-3">{{w.name}}</h4></div>
                    <img width="100%" :src="w.img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    name: 'WorkHome',
    computed: Object.assign({},
        vuex.mapGetters(['languageObj']),
        {
            workCategories: function () {
                return [
                    {
                        name: this.languageObj[31].toUpperCase(),
                        link: '/work/software',
                        img: '/static/img/software_icon.svg' // https://www.iconfinder.com/icons/532716/api_coding_configuration_development_html_programming_window_icon#size=128
                    },
                    {
                        name: this.languageObj[32].toUpperCase(),
                        link: '/work/art',
                        img: '/static/img/art_icon.svg' // https://www.iconfinder.com/icons/1562708/computer_design_graphic_technology_icon#size=512
                    }
                ]
            }
        }
    )
}
</script>

<style scoped>
.work-home-div {
    position: relative;
}
@media screen and (max-width: 576px) {
    .card {
        margin-bottom: 1rem;
    }
}
</style>
