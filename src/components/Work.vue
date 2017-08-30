<template>
    <div>
        <generic-page :title="languageObj[1]">
            <div slot="body" class="container">
                <router-link to="/work/software">
                    <div><p>Software</p></div>
                </router-link>
                <router-link to="/work/art">
                    <div><p>Art</p></div>
                </router-link>
            </div>
        </generic-page>
    </div>
</template>

<script>
import vuex from 'vuex'
import GenericPage from './widgets/generic/GenericPage'
export default {
    components: {GenericPage},
    computed: vuex.mapGetters(['languageObj'])
}
</script>

<style scoped>
</style>
