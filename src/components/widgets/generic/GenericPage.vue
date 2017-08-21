<template>
    <div>
        <circle-menu :menu-set="menuSet" :position="circleMenuPosition"></circle-menu>
        <generic-hero :title="title" :sub-title="subTitle" :hero-img="heroImg"></generic-hero>
        <slot name="body"></slot>
        <!-- <page-footer></page-footer>
        <back-to-top-button></back-to-top-button> -->
    </div>
</template>

<script>
import GenericHero from './GenericHero'
import CircleMenu from './CircleMenu'
import router from '@/router'
// import PageFooter from './PageFooter'
// import BackToTopButton from './BackToTopButton'
export default {
    props: ['title', 'subTitle', 'heroImg'],
    components: {GenericHero, CircleMenu},
    data () {
        return {
            circleMenuPosition: 'mid-right',
            menuSet: [
                {
                    icon: 'fa-home',
                    callBack: function () {
                        router.push('/')
                    }
                },
                {
                    icon: 'fa-folder',
                    callBack: function () {
                        router.push('/work')
                    }
                },
                {
                    icon: 'fa-envelope',
                    callBack: function () {
                        router.push('/contact')
                    }
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
