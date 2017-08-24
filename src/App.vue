<template>
    <div id="app">
        <router-view></router-view>
        <drag-circle-menu></drag-circle-menu>
    </div>
</template>

<script>
import DragCircleMenu from './components/widgets/generic/DragCircleMenu'
export default {
    name: 'app',
    components: {DragCircleMenu}
}
</script>

<style lang="scss" src="./styles/style.scss"></style>
