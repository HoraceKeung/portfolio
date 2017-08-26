<template>
    <div>
        <h4 class="text-center mb-3">Contact me</h4>
        <div class="row">
            <div class="col-md-6" v-for="f in fields">
                <div class="form-group">
                    <label>{{f.label}}</label>
                    <input v-tooltip.top="{content:contactErr[f.label.toLowerCase()+'Err'][0],classes:'tooltip-danger'}" :class="'form-control'+(contactErr[f.label.toLowerCase()+'Err'].length>0?' is-invalid':'')" :type="f.type" :id="'contact-input-'+f.label.toLowerCase()">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Message</label>
                    <textarea v-tooltip.top="{content:contactErr.messageErr[0],classes:'tooltip-danger'}" rows="4" :class="'form-control'+(contactErr.messageErr.length>0?' is-invalid':'')" id="contact-input-message"></textarea>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <button type="button" class="btn btn-dynamic" @click="submitContact">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    computed: vuex.mapGetters(['contactErr']),
    methods: vuex.mapActions(['initContact', 'submitContact']),
    data () {
        return {
            fields: [
                {
                    label: 'Name',
                    type: 'text'
                },
                {
                    label: 'Email',
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
