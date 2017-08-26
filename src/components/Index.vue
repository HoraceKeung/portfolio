<template>
    <div>
        <generic-page :title="languageObj[15]">
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
    computed: vuex.mapGetters(['languageObj'])
}
</script>

<style scoped>
.dummy {
    min-height: 1000px;
    border: 1px red solid;
}
</style>
