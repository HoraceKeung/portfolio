<template>
<div v-show="showBtn">
    <button type="button" class="btn btn-top" @click="triggerSmoothScrollToTop">
        <i class="fa fa-angle-up fa-2x"></i>
    </button>
</div>
</template>

<script>
export default {
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
            if (document.body.scrollTop !== 0 && !this.userScrollDuringSmoothScroll) {
                window.scrollBy(0, -(document.body.scrollTop / 10))
                window.requestAnimationFrame(this.smoothScrollToTop)
            } else {
                this.userScrollDuringSmoothScroll = false
            }
        },
        handleScroll: function () {
            this.showBtn = document.body.scrollTop > 0
        },
        handleMousewheel: function () {
            this.userScrollDuringSmoothScroll = true
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('mousewheel', this.handleMousewheel)
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('mousewheel', this.handleMousewheel)
    }
}
</script>

<style scope>
.btn-top {
    color: white;
    opacity: .4;
    position: fixed;
    bottom: 11rem;
    right: 1.5rem;
    z-index: 500;
    width: 3rem;
    height: 3rem;
    background-color: #28a745;
    border-radius: 50%;
    padding: 0;
    margin: 0;
}
.btn-top:hover {
    opacity: 1;
}
</style>
