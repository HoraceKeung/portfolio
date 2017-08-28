<template>
    <div>
        <generic-hero :title="title" :sub-title="subTitle" :hero-img="heroImg"></generic-hero>
        <path-bar :typerText="typerText"></path-bar>
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
import PathBar from './PathBar'
export default {
    props: ['title', 'subTitle', 'heroImg', 'typerText'],
    components: {GenericHero, PageFooter, BackToTopButton, PathBar}
}
</script>

<style scoped>
.gap {
    margin-bottom: 535px;
}
@media screen and (max-width: 767px) {
    .gap {
        margin-bottom: 635px;
    }
}
@media screen and (max-width: 575px) {
    .gap {
        margin-bottom: 815px;
    }
}
</style>
