<template>
    <footer class="footer">
        <div class="container">
            <div class="row footer-links">
                <div class="col-sm-3 text-center" v-for="m in pathIconMap"><router-link class="color-dynamic" :to="'/'+(m.path==='home'?'':m.path)"><i :class="'fa '+m.icon" aria-hidden="true"></i> {{m.path.toUpperCase()}}</router-link></div>
            </div>
            <contact-form></contact-form>
            <div class="float-right footer-author-year"><span>Horace Keung &copy; {{currentYear}}</span></div>
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
.footer {
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #24292e;
}
.footer-links a {
    font-weight: bold;
    line-height: 60px;
}
.footer-author-year {
    line-height: 60px;
}
</style>
