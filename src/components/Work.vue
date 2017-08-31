<template>
    <div>
        <generic-page :title="languageObj[1]">
            <div slot="body" class="container">
                <router-view></router-view>
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
