<template>
    <div>
        <generic-page :title="languageObj[7]">
            <div slot="body">
                <div class="container cv-container">
                    <div class="paper">
                        <div id="cv">
                            <table width="100%" class="cv-header">
                                <tbody>
                                    <tr>
                                        <td class="name-td" colspan="2"><h3>{{name}}</h3></td>
                                        <td><p v-for="a in address">{{a}}</p></td>
                                        <td><p v-for="c in contact">{{c}}</p></td>
                                    </tr>
                                </tbody>
                            </table><br>
                            <table class="cv-body" width="100%"><tr>
                                <td><table class="table-left">
                                    <tbody>
                                        <tr>
                                            <th><i class="fa fa-user" aria-hidden="true"></i> PERSONAL STATEMENT</th>
                                        </tr>
                                        <tr>
                                            <td><p class="mb-3">{{personalStatement}}</p></td>
                                        </tr>
                                        <tr>
                                            <th><i class="fa fa-briefcase" aria-hidden="true"></i> EXPERIENCE</th>
                                        </tr>
                                        <tr>
                                            <td><div v-for="e in experience" class="mb-3">
                                                <p class="mt-2"><strong>{{e.start+' - '+e.end+': '+e.organization}}</strong></p>
                                                <p class="mb-2"><strong>{{e.role}}</strong></p>
                                                <p class="mb-1" v-for="p in e.points"><i class="fa fa-square color-dynamic" aria-hidden="true"></i> {{p}}</p>
                                            </div></td>
                                        </tr>
                                    </tbody>
                                </table></td>
                                <td><table class="table-right">
                                    <tbody>
                                        <tr>
                                            <th><i class="fa fa-graduation-cap" aria-hidden="true"></i> EDUCATION</th>
                                        </tr>
                                        <tr>
                                            <td><div v-for="e in education" class="mb-3">
                                                <p class="mt-2"><strong>{{e.start+' - '+e.end+': '+e.organization}}</strong></p>
                                                <p class="mb-2"><strong>{{e.degree}}</strong></p>
                                                <div v-if="e.modules"><p class="small">Modules included:</p><p class="mb-1" v-for="m in e.modules"><i class="fa fa-square color-dynamic" aria-hidden="true"></i> {{m}}</p></div>
                                                <p class="mb-1" v-if="e.aLevels">{{'A Level: '+e.aLevels}}</p>
                                            </div></td>
                                        </tr>
                                        <tr>
                                            <th><i class="fa fa-paint-brush" aria-hidden="true"></i> INTERESTS</th>
                                        </tr>
                                        <tr>
                                            <td><div class="mt-2"><div v-for="i in interests">
                                                <p class="mb-1"><i class="fa fa-square color-dynamic" aria-hidden="true"></i> {{i}}</p>
                                            </div></div></td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr></table>
                        </div>
                    </div><br>
                    <button type="button" class="btn btn-dynamic mx-auto d-block" @click="downloadCV">{{languageObj[34]}}</button>
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
    computed: vuex.mapGetters(['languageObj']),
    methods: {
        downloadCV () {
            // for more info, read https://github.com/Xportability/css-to-pdf
            return window.xepOnline.Formatter.Format('cv', {filename: 'Horace Keung CV', render: 'download', pageWidth: '216mm', pageHeight: '279mm'})
        }
    },
    data () {
        return {
            name: 'Horace Keung',
            address: ['Basement flat 50', 'Queen’s Park Road', 'Brighton BN2 0GL'],
            contact: [
                'horacekeung@hotmail.com',
                'https://horacekeung.github.io',
                '07780 977252'
            ],
            personalStatement: 'Coming soon',
            experience: [
                {
                    start: 'May 2016',
                    end: 'Aug 2017',
                    organization: 'WhotNow Ltd',
                    role: 'Web developer (Part-time)',
                    points: [
                        'Being the only JavaScript (Vue.js) developer in the company, worked on three web projects: public-facing promotional website, customer management web application, and an admin site for staff to monitor and manage different aspects of the business',
                        'Worked closely with a senior back-end developer, and learned how to work on some back-end tasks using Clojure and query Postgres database',
                        'WhotNow was looking for an alternative to build native mobile app that runs on both Android and iOS. Spent two weeks experimenting with React Native, learned how to build a simple application with state management using Redux',
                        'Wrote a simple android app in Java to detect Estimote beacons'
                    ]
                }
            ],
            education: [
                {
                    start: 'Sep 2015',
                    end: 'Mar 2017',
                    organization: 'University of Sussex',
                    degree: 'MSc Advanced Computer Science',
                    modules: ['Advanced Software Engineering', 'Cryptography', 'Image Processing', 'Web Applications and Services']
                },
                {
                    start: 'Sep 2012',
                    end: 'Jul 2015',
                    organization: 'University of Sussex',
                    degree: 'BSc Games and Multimedia Environments (1st class Hons.)',
                    modules: ['Human-Computer Interaction', 'Multimedia Design and Applications', 'Software Engineering', 'Web 3D Applications']
                },
                {
                    start: '2005',
                    end: '2009',
                    organization: 'Framlingham College, Suffolk',
                    aLevels: 'Physics (A), Mathematics (A), Further Mathematics (B).'
                }
            ],
            interests: [
                'Interested in 3D modelling, spent time learning from online tutorials, and developed modelling skills',
                'Also interested in texturing the model, spent time developing drawing skills using Photoshop and a graphics tablet',
                'Learned different musical instruments during childhood, with basic knowledge of music theory, also interested in composing music'
            ]
        }
    }
}
</script>

<style scoped>
@import url("../styles/color.css");
.cv-container {
    position: relative;
}
#cv {
    padding: 0.5rem;
}
.paper {
    -webkit-box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.4);
}
.cv-header p {
    font-size: 80%;
    font-weight: 400;
    margin: 0px;
}
.table-left {
    width: 97%;
}
.table-right {
    width: 97%;
    margin-left:3%;
}
.cv-body td {
    vertical-align: top;
    width: 50%;
}
.cv-body p {
    text-align: justify;
    margin-bottom: 0px;
}
.name-td {
    vertical-align: top;
}
th {
    border-bottom: 1px solid #000;
    color: var(--color);
}
ul {
    list-style: disc;
}
</style>
