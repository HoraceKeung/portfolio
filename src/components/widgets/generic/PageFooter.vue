<template>
    <footer class="footer">
        <div class="container">
            <div class="row footer-links">
                <div class="col-sm-3 text-center" v-for="m in pathIconMap">
                    <router-link :to="'/'+(m.path==='home'?'':m.path)"><i :class="'fa '+m.icon" aria-hidden="true"></i> {{languageObj[m.langId].toUpperCase()}}</router-link>
                </div>
            </div>
        </div>
        <div class="pattern">
            <div class="container">
                <div style="text-align:center;height:0px;"><button class="btn btn-cv"><h5>{{languageObj[7]}}</h5></button></div>
                <div class="pattern-upper"></div>
                <div class="pattern-lower"></div>
            </div>
        </div>
        <div class="container">
            <contact-form></contact-form>
            <div class="mt-3 mb-4">
                <a v-for="m in media" :href="m.href" target="_blank"><i :class="'pointer mr-1 fa fa-2x '+m.icon+(circleMenuPosition==='bot-right'?'':' float-right')" aria-hidden="true"></i></a>
                <span :class="(circleMenuPosition==='bot-right'?'float-right':'')">&copy; {{currentYear}} Horace Keung</span>
            </div>
        </div>
    </footer>
</template>

<script>
import vuex from 'vuex'
import ContactForm from './ContactForm'
export default {
    components: {ContactForm},
    computed: Object.assign({},
        vuex.mapGetters(['pathIconMap', 'languageObj', 'circleMenuPosition']),
        {
            currentYear () {
                return new Date().getFullYear()
            }
        }
    ),
    data () {
        return {
            media: [
                {
                    icon: 'fa-linkedin-square',
                    href: 'https://uk.linkedin.com/in/horace-keung-8186aa9a'
                },
                {
                    icon: 'fa-facebook-square',
                    href: 'https://www.facebook.com/horace.keung'
                },
                {
                    icon: 'fa-github',
                    href: 'https://github.com/horacekeung'
                }
            ]
        }
    }
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
.pattern-lower {
    height: 0;
    border-width: 0px 30px 30px 30px;
    border-style: solid;
    border-color: transparent transparent var(--grey) transparent;
    top: 0.4rem;
    position: relative;
}
.pattern-upper {
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
</style>
