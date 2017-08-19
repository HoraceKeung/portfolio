<template>
    <div>
        <nav-bar></nav-bar>
        <!-- <generic-hero :title="title" :sub-title="subTitle"></generic-hero> -->
        <slot name="body"></slot>
        <!-- <page-footer></page-footer>
        <back-to-top-button></back-to-top-button> -->
    </div>
</template>

<script>
import NavBar from './NavBar'
// import PageFooter from './PageFooter'
// import GenericHero from './GenericHero'
// import BackToTopButton from './BackToTopButton'
export default {
    props: ['title', 'subTitle'],
    components: {NavBar}
}
</script>

<style scoped>
/*.page-body {
    min-height: 550px;
}
@media screen and (max-width: 770px) {
    .page-body {
        min-height: 650px;
    }
}
@media screen and (max-width: 575px) {
    .page-body {
        min-height: 950px;
    }
}
@media screen and (max-width: 500px) {
    .page-body {
        min-height: 1050px;
    }
}*/
</style>
