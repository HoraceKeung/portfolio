<template>
<div v-show="showBtn">
    <button type="button" :class="'btn btn-top'+(circleMenuPosition==='mid-right'?' below-menu':'')" @click="triggerSmoothScrollToTop">
        <i class="fa fa-angle-up fa-2x"></i>
    </button>
</div>
</template>

<script>
import vuex from 'vuex'
export default {
    computed: vuex.mapGetters(['circleMenuPosition']),
    data: function () {
        return {
            showBtn: false,
            userScrollDuringSmoothScroll: false
        }
    },
    methods: {
        triggerSmoothScrollToTop: function () {
            this.userScrollDuringSmoothScroll = false
            this.smoothScrollToTop()
        },
        smoothScrollToTop: function () {
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0
            if (top !== 0 && !this.userScrollDuringSmoothScroll) {
                window.scrollBy(0, -(top / 10 < 1 ? 1 : top / 10))
                window.requestAnimationFrame(this.smoothScrollToTop)
            } else {
                this.userScrollDuringSmoothScroll = false
            }
        },
        handleScroll: function () {
            this.showBtn = (document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0) > 0
        },
        handleMousewheel: function () {
            this.userScrollDuringSmoothScroll = true
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('mousewheel', this.handleMousewheel)
        window.addEventListener('DOMMouseScroll', this.handleMousewheel)// for FireFox
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('mousewheel', this.handleMousewheel)
        window.removeEventListener('DOMMouseScroll', this.handleMousewheel)// for FireFox
    }
}
</script>

<style scope>
@import url("../../../styles/color.css");
.btn-top {
    color: white;
    opacity: .4;
    position: fixed;
    bottom: 11rem;
    right: 1.5rem;
    z-index: 1;
    width: 3rem;
    height: 3rem;
    background-color: var(--color);
    border-radius: 50%;
    padding: 0;
    margin: 0;
}
.below-menu {
    bottom: 5rem;
}
.btn-top:hover {
    opacity: 1;
}
</style>
