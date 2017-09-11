<template>
    <div>
        <generic-page :title="languageObj[15]" :typerText="typerText">
            <div slot="body">
                <div class="container" style="position: relative;">
                    <h2 class="text-center">Interactive front end developer currently based in Brighton UK.<br> A JavaScript maniac trying to do everything with JavaScript.</h2>
                    <div class="text-center my-3"><div class="btn-group" role="group" aria-label="short cut btn group">
                        <button type="button" class="btn btn-outline-dynamic" @click="$router.push('/cv')">{{languageObj[7]}}</button>
                        <button type="button" class="btn btn-dynamic" @click="$router.push('/work')">{{languageObj[1]}}</button>
                    </div></div>
                </div><hr>
                <!-- <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="color-dynamic text-center mb-3"><i class="fa fa-list" aria-hidden="true"></i> To do</h3>
                        </div>
                        <div class="col-md-6">
                            <h3 class="color-dynamic text-center mb-3"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Updates</h3>
                        </div>
                    </div>
                </div><hr> -->
                <div class="container">
                    <h3 class="color-dynamic text-center mb-3"><i class="fa fa-quote-left" aria-hidden="true"></i> Testimonial</h3>
                    <div class="row">
                        <div v-for="t in testimonials" class="col-md-6">
                            <div class="testimonial-item">
                                <p><i class="fa fa-quote-left" aria-hidden="true"></i> {{t.text}} <i class="fa fa-quote-right" aria-hidden="true"></i></p>
                                <p class="m-0 text-center"><a v-tooltip.top="t.toolTip" :href="t.link" target="_blank">{{t.name}}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </generic-page>
    </div>
</template>

<script>
import vuex from 'vuex'
import GenericPage from './widgets/generic/GenericPage'
export default {
    components: {GenericPage},
    computed: Object.assign({},
        vuex.mapGetters(['languageObj']),
        {
            typerText () {
                var self = this
                return [23, 24, 25, 26].map(function (x) {
                    return self.languageObj[x]
                })
            }
        }
    ),
    data () {
        return {
            testimonials: [
                {
                    name: 'David Banks',
                    link: 'https://sphereofconsumption.wordpress.com/',
                    toolTip: 'Blog',
                    text: 'Horace worked with WhotNow, building both a public-facing promotional website and an internal website for staff from scratch. He shows a rare dedication and efficiency, along with a solid grasp of code architecture and aesthetics. He also has a knack for analyzing problems, and the ability to cut through to their simplest solutions. Working with Horace, we were able to achieve our goal of fully-featured internal and external JavaScript SPAs with a minimum of fuss.'
                },
                {
                    name: 'Dr Marco Gilardi',
                    link: 'https://www.linkedin.com/in/marco-gilardi-52a2052b/',
                    toolTip: 'Linkedin page',
                    text: 'I was Horace supervisor for his final year project and convenor for his Programming for 3D class. Horace is hard working, reliable, bright and competent. He was one of the best final year project students I had and was a brilliant student during his Programming for 3D classes.'
                }
            ]
        }
    }
}
</script>

<style scoped>
@import url("../styles/color.css");
.testimonial-item {
    border: 1px solid var(--grey);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>
