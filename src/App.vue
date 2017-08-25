<template>
    <div id="app">
        <router-view></router-view>
        <drag-circle-menu></drag-circle-menu>
        <vue-spinner></vue-spinner>
        <vue-alert></vue-alert>
    </div>
</template>

<script>
import DragCircleMenu from './components/widgets/generic/DragCircleMenu'
import VueSpinner from './components/widgets/util/VueSpinner.vue'
import VueAlert from './components/widgets/util/VueAlert.vue'
export default {
    name: 'app',
    components: {DragCircleMenu, VueSpinner, VueAlert}
}
</script>

<style lang="scss" src="./styles/style.scss"></style>
