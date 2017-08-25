<template>
    <div>
        <h4>Contact me</h4>
        <div class="row">
            <div class="col-md-6" v-for="f in fields">
                <div class="form-group">
                    <label>{{f.label}}</label>
                    <input class="form-control" :type="f.type" :id="'contact-input-'+f.label.toLowerCase()">
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Message</label>
                    <textarea rows="4" class="form-control" id="contact-input-message"></textarea>
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
