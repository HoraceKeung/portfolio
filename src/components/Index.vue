<template>
    <div>
        <generic-page :title="languageObj[15]" :typerText="typerText">
            <div slot="body">
                <div class="dummy"></div>
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
    data () {
        return {
            typerText: [
                'Hello World! How are you today?',
                'Welcome to my site! Please have a look around!',
                'You can navigate around using the circle menu.'
            ]
        }
    }
}
</script>

<style scoped>
.dummy {
    min-height: 1000px;
    border: 1px red solid;
}
</style>
