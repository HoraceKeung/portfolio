<template>
    <footer class="footer">
        <div class="container">
            <div class="row footer-links">
                <div class="col-sm-3 text-center" v-for="m in pathIconMap"><router-link class="color-dynamic" :to="'/'+(m.path==='home'?'':m.path)"><i :class="'fa '+m.icon" aria-hidden="true"></i> {{m.path.toUpperCase()}}</router-link></div>
            </div>
        </div>
        <div class="pattern">
            <div class="container">
                <div style="text-align:center;height:0px;"><button class="btn btn-cv"><h5>CV</h5></button></div>
                <div class="pattern-outer"></div>
                <div class="pattern-inner"></div>
            </div>
        </div>
        <div class="container">
            <contact-form></contact-form>
            <div class="float-right footer-author-year"><span>&copy; {{currentYear}} Horace Keung</span></div>
        </div>
    </footer>
</template>

<script>
import vuex from 'vuex'
import ContactForm from './ContactForm'
export default {
    components: {ContactForm},
    computed: Object.assign({},
        vuex.mapGetters(['pathIconMap']),
        {
            currentYear () {
                return new Date().getFullYear()
            }
        }
    )
}
</script>

<style scoped>
@import url("../../../styles/color.css");
.btn-cv {
    border: 5px solid #fff;
    background-color: var(--grey);
    color: #fff;
    position: relative;
    top: 0.6rem;
    z-index: 1;
}
.btn-cv h5 {
    margin-bottom: 0px;
}
.btn-cv:hover {
    background-color: #fff;
    transform: scale(1.1);
    color: var(--grey);
}
.pattern-inner {
    height: 0;
    border-width: 0px 30px 30px 30px;
    border-style: solid;
    border-color: transparent transparent var(--grey) transparent;
    top: 0.4rem;
    position: relative;
}
.pattern-outer {
    height: 0;
    border-width: 0px 30px 30px 30px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: relative;
    top: 1.85rem;
}
.pattern {
    margin-bottom: 1rem;
    border-bottom: 5px solid #fff;
}
@media screen and (min-width: 767px) {
    .pattern {
        margin-top: -1rem;
    }
}
.footer {
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: var(--grey);
}
.footer-links a {
    font-weight: bold;
    line-height: 60px;
}
.footer-author-year {
    line-height: 60px;
}
</style>
