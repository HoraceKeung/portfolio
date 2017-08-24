<template>
    <div>
        <generic-hero :title="title" :sub-title="subTitle" :hero-img="heroImg"></generic-hero>
        <slot name="body"></slot>
        <div class="gap"></div>
        <page-footer></page-footer>
        <back-to-top-button></back-to-top-button>
    </div>
</template>

<script>
import GenericHero from './GenericHero'
import PageFooter from './PageFooter'
import BackToTopButton from './BackToTopButton'
export default {
    props: ['title', 'subTitle', 'heroImg'],
    components: {GenericHero, PageFooter, BackToTopButton}
}
</script>

<style scoped>
.gap {
    margin-bottom: 150px;
}
@media screen and (max-width: 575px) {
    .gap {
        margin-bottom: 320px;
    }
}
</style>
