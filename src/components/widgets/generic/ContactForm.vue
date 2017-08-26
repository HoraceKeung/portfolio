<template>
    <div>
        <h4 class="text-center mb-3">{{languageObj[8]}}</h4>
        <div class="row">
            <div class="col-md-6" v-for="f in fields">
                <div class="form-group">
                    <label>{{languageObj[f.langId]}}</label>
                    <input v-tooltip.top="{content:contactErr[f.label+'Err'][0],classes:'tooltip-danger'}" :class="'form-control'+(contactErr[f.label.toLowerCase()+'Err'].length>0?' is-invalid':'')" :type="f.type" :id="'contact-input-'+f.label.toLowerCase()">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>{{languageObj[11]}}</label>
                    <textarea v-tooltip.top="{content:contactErr.messageErr[0],classes:'tooltip-danger'}" rows="4" :class="'form-control'+(contactErr.messageErr.length>0?' is-invalid':'')" id="contact-input-message"></textarea>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-dynamic" @click="submitContact">{{languageObj[12]}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    computed: vuex.mapGetters(['contactErr', 'languageObj']),
    methods: vuex.mapActions(['initContact', 'submitContact']),
    data () {
        return {
            fields: [
                {
                    langId: 9,
                    label: 'name',
                    type: 'text'
                },
                {
                    langId: 10,
                    label: 'email',
                    type: 'email'
                }
            ]
        }
    },
    created () {
        this.initContact()
    }
}
</script>

<style scoped>
</style>
