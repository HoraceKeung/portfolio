<template>
    <div>
        <generic-page :title="languageObj[15]" :typerText="typerText">
            <div slot="body">
                <div class="dummy">
                    about me,
                    location,
                    next target/to do,
                    talk about JavaScript,
                    language,
                    programming language,
                    skills,
                    Education,
                    Testimonials
                </div>
                <p>Horace worked with WhotNow, building both a public-facing promotional website and an internal website for staff from scratch.  He shows a rare dedication and efficiency, along with a solid grasp of code architecture and aesthetics.  He also has a knack for analyzing problems, and the ability to cut through to their simplest solutions.  Working with Horace, we were able to achieve our goal of fully-featured internal and external JavaScript SPAs with a minimum of fuss.</p>
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
    )
}
</script>

<style scoped>
.dummy {
    min-height: 500px;
    border: 1px red solid;
}
</style>
