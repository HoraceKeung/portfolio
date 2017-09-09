<template>
    <div>
        <generic-page :title="languageObj[7]">
            <div slot="body">
                <div class="container">
                    <div id="cv">
                        <h3>Horace Keung</h3>
                        <p>testing</p>
                    </div>
                    <button type="button" class="btn btn-dynamic" @click="downloadCV">{{languageObj[34]}}</button>
                </div>
            </div>
        </generic-page>
    </div>
</template>

<script>
import vuex from 'vuex'
import GenericPage from './widgets/generic/GenericPage'
export default {
    components: {GenericPage},
    computed: vuex.mapGetters(['languageObj']),
    methods: {
        downloadCV () {
            // https://github.com/Xportability/css-to-pdf
            return window.xepOnline.Formatter.Format('cv', {filename: 'Horace Keung CV', render: 'download', pageWidth: '216mm', pageHeight: '279mm'})
        }
    }
}
</script>

<style scoped>
#cv h3 {
    color: red;
}
</style>
