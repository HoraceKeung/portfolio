<template>
    <div v-if="showParticles">
        <vue-particles :hoverEffect="false" :clickEffect="false" :color="themeColor.hex" :linesColor="themeColor.hex"></vue-particles>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    computed: vuex.mapGetters(['themeColor']),
    watch: {
        themeColor: function () {
            // this is a hack, change particle colour by toggle the component off and back on to allow canvas to render with updated colour
            if (!this.updating) {
                this.updating = true
                this.showParticles = false
                var self = this
                var promiseFunction = function () {
                    let promise = new Promise((resolve, reject) => {
                        var check = function () {
                            if (document.getElementsByClassName('particles-js-canvas-el').length === 0) {
                                resolve()
                            } else {
                                setTimeout(function () { check() }, 100)
                            }
                        }
                        check()
                    })
                    promise.then(() => {
                        self.showParticles = true
                        self.updating = false
                    })
                }
                setTimeout(function () { promiseFunction() }, 0)
            }
        }
    },
    data () {
        return {
            showParticles: true,
            updating: false
        }
    }
}
</script>

<style scoped>
#particles-js {
    position: absolute;
    top: 0;
    width: 100%;
    height: 347px;
    z-index: -1;
}
@media screen and (max-width: 575px) {
    #particles-js {
        height: 283px;
    }
}
</style>
