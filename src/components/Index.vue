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
    computed: Object.assign({},
        vuex.mapGetters(['languageObj']),
        {
            typerText () {
                var self = this
                return [23, 24, 25].map(function (x) {
                    return self.languageObj[x]
                })
            }
        }
    )
}
</script>

<style scoped>
.dummy {
    min-height: 500px;
    border: 1px red solid;
}
</style>
