<template>
    <div id="app">
        <router-view></router-view>
        <drag-circle-menu></drag-circle-menu>
        <vue-spinner></vue-spinner>
        <vue-alert></vue-alert>
        <particle></particle>
    </div>
</template>

<script>
import vuex from 'vuex'
import Particle from './components/widgets/generic/Particle'
import DragCircleMenu from './components/widgets/generic/DragCircleMenu'
import VueSpinner from './components/widgets/util/VueSpinner.vue'
import VueAlert from './components/widgets/util/VueAlert.vue'
export default {
    name: 'app',
    components: {Particle, DragCircleMenu, VueSpinner, VueAlert},
    methods: vuex.mapActions(['loadLanguageObj', 'setDefaultColour']),
    created () {
        this.loadLanguageObj()
        this.setDefaultColour()
    }
}
</script>

<style lang="scss" src="./styles/style.scss"></style>
