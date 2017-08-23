<template>
    <div>
        <generic-hero :title="title" :sub-title="subTitle" :hero-img="heroImg"></generic-hero>
        <slot name="body"></slot>
        <!-- <page-footer></page-footer>
        <back-to-top-button></back-to-top-button> -->
    </div>
</template>

<script>
import GenericHero from './GenericHero'
// import PageFooter from './PageFooter'
// import BackToTopButton from './BackToTopButton'
export default {
    props: ['title', 'subTitle', 'heroImg'],
    components: {GenericHero}
}
</script>

<style scoped>
</style>
