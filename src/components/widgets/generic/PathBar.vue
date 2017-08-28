<template>
    <div id="path-bar-div">
        <div id="dark-box"></div>
        <div class="pattern">
            <div class="container">
                <div style="position:relative;">
                    <div class="pattern-upper"></div>
                    <div class="pattern-lower"></div>
                </div>
            </div>
        </div>
        <div class="container text-center path-bar-content">
            <div v-if="typerText"><vue-typer :text='typerText' erase-style='clear' :pre-erase-delay="5000"></vue-typer></div>
            <div v-else class="text-left mx-5">
                <span v-for="(p, index) in currentPath">
                    <router-link class="color-dynamic font-weight-bold" :to="'/'+p">{{(p===''?'home':p).toUpperCase()}}</router-link>
                    <span class="color-dynamic mx-1" v-if="index!==currentPath.length-1"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
    props: ['typerText'],
    components: {VueTyper},
    computed: {
        currentPath () {
            return this.$route.path.split('/')
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../../../styles/color.css");
#dark-box {
    height: 30px;
    background-color: var(--grey);
}
#path-bar-div {
    height: 90px;
    margin-bottom: 2rem;
    background-color: var(--grey);
}
.pattern-upper {
    height: 0;
    border-style: solid;
    border-width: 30px 30px 30px 30px;
    border-color: #fff transparent transparent transparent;
    position: relative;
    top: -0.32rem;
}
.pattern-lower {
    height: 0;
    border-style: solid;
    border-width: 30px 30px 30px 30px;
    border-color: var(--grey) transparent transparent transparent;
    top: -4.5rem;
    position: relative;
}
.pattern {
    border-top: 5px solid #fff;
}
.path-bar-content {
    position: relative;
    top: -8rem;
}
</style>
