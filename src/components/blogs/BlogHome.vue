<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                Filter
            </div>
            <div class="col-lg-8">
                <div class="card mb-3" v-for="b in blogData">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title">{{splitCamel(b.name)}}</h2>
                                <p><small>{{formatDate(b.date)}}</small></P>
                                <p class="block-with-text">{{b.desc}}</p>
                                <p><span class="hash-tag pointer" v-for="t in b.tags">{{'#'+t+' '}}</span></P>
                                <div class="float-bottom">
                                    <router-link :to="'/blog/'+camelToKebab(b.name)">
                                        <button class="btn btn-sm btn-dynamic" type="button">Read more</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img class="card-img-right" src="http://via.placeholder.com/350x150" alt="Blog img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import util from '@/util/util'
import vuex from 'vuex'
export default {
    name: '', // this name is needed as the path
    computed: vuex.mapGetters(['blogData']),
    methods: Object.assign({},
        util,
        {
            formatDate: function (date) {
                return moment(date, 'YYYYMMDD').format('Do MMM YYYY')
            }
        }
    )
}
</script>

<style scoped>
.card-img-right {
    width: 100%;
    height: 283.07px;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
}
@media screen and (min-width: 767px) {
    .float-bottom {
        bottom: 0px;
        position: absolute;
        margin-bottom: 1.25rem;
    }
    .card-img-right {
        border-top-right-radius: calc(0.25rem - 1px);
        border-bottom-left-radius: 0px;
    }
}
</style>
