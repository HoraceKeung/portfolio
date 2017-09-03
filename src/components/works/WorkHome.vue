<template>
    <div class="work-home-div">
        <div class="card-deck">
            <div class="card" v-for="w in workCategories">
                <div class="card-body" @click="$router.push(w.link)">
                    <div class="aligner"><h4 class="card-text mx-3">{{w.name}}</h4></div>
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
                        name: 'Software',
                        link: '/work/software'
                    },
                    {
                        name: 'Art',
                        link: '/work/art'
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
