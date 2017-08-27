<template>
    <div id="spinnerOverlay" v-show="spinnerConfig.loading">
        <grid-loader :loading="spinnerConfig.loading" :color="themeColor.hex" :size="spinnerConfig.size"></grid-loader>
    </div>
</template>

<script>
import vuex from 'vuex'
import GridLoader from 'vue-spinner/src/GridLoader.vue'
export default {
    components: {GridLoader},
    computed: vuex.mapGetters(['spinnerConfig', 'themeColor'])
}
</script>

<style scope>
#spinnerOverlay {
    height: 100%;
    width: 100%;
    position: fixed; /* Stay in place */
    z-index: 9999; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(0,0,0); /* Black fallback color */
    background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.v-spinner{
    margin: 0 auto;
}
</style>
