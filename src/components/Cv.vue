<template>
    <div>
        <generic-page :title="languageObj[7]">
            <div slot="body">
                <div class="container cv-container">
                    <div class="paper">
                        <div id="cv">
                            <!-- START CV header -->
                            <table width="100%" class="cv-header">
                                <tbody>
                                    <tr>
                                        <td class="name-td" colspan="2"><h3>{{name}}</h3></td>
                                        <td><p v-for="a in address">{{a}}</p></td>
                                        <td><p v-for="c in contact">{{c}}</p></td>
                                    </tr>
                                </tbody>
                            </table><br>
                            <!-- END CV header -->
                            <table class="cv-body" width="100%"><tr>
                                <!-- START table left -->
                                <td><table class="table-left">
                                    <tbody>
                                        <tr>
                                            <th class="cv-section-header"><i class="fa fa-user" aria-hidden="true"></i> PERSONAL STATEMENT</th>
                                        </tr>
                                        <tr>
                                            <td><p class="mt-2 mb-3">{{personalStatement}}</p></td>
                                        </tr>
                                        <tr>
                                            <th class="cv-section-header"><i class="fa fa-briefcase" aria-hidden="true"></i> EXPERIENCE</th>
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
                                <!-- END table left -->
                                <!-- START table right -->
                                <td><table class="table-right">
                                    <tbody>
                                        <!-- START Education -->
                                        <tr>
                                            <th class="cv-section-header"><i class="fa fa-graduation-cap" aria-hidden="true"></i> EDUCATION</th>
                                        </tr>
                                        <tr>
                                            <td><div v-for="e in education" class="mb-3">
                                                <p class="mt-2"><strong>{{e.start+' - '+e.end+': '+e.organization}}</strong></p>
                                                <p class="mb-2"><strong>{{e.degree}}</strong></p>
                                                <div v-if="e.modules"><p class="small">Modules included:</p><p class="mb-1" v-for="m in e.modules"><i class="fa fa-square color-dynamic" aria-hidden="true"></i> {{m}}</p></div>
                                                <p class="mb-1" v-if="e.aLevels">{{'A Level: '+e.aLevels}}</p>
                                            </div></td>
                                        </tr>
                                        <!-- END Education -->
                                        <!-- START Skills -->
                                        <tr>
                                            <th class="cv-section-header"><i class="fa fa-wrench" aria-hidden="true"></i> SKILLS</th>
                                        </tr>
                                        <tr>
                                            <td><table width="100%" class="mb-3">
                                                <tbody>
                                                    <tr>
                                                        <th colspan="2"><div class="my-2">Programming</div></th>
                                                        <th><div class="my-2 text-right">Miscellaneous</div></th>
                                                    </tr>
                                                    <tr v-for="n in programmingLanguages.length">
                                                        <td>{{programmingLanguages[n-1].name}}</td>
                                                        <td class="color-dynamic">
                                                            <!-- the following i tags need to be inline -->
                                                            <i v-for="s in Math.floor(programmingLanguages[n-1].score/2)" class="fa fa-star" aria-hidden="true"></i><i v-if="programmingLanguages[n-1].score%2!==0" class="fa fa-star-half-o" aria-hidden="true"></i><i v-for="s in 5-Math.ceil(programmingLanguages[n-1].score/2)" class="fa fa-star-o" aria-hidden="true"></i>
                                                        </td>
                                                        <td class="miscellaneous-skills">{{miscellaneous[n-1]}}</td>
                                                    </tr>
                                                </tbody>
                                            </table></td>
                                        </tr>
                                        <!-- END Skills -->
                                        <!-- START Interests -->
                                        <tr>
                                            <th class="cv-section-header"><i class="fa fa-paint-brush" aria-hidden="true"></i> INTERESTS</th>
                                        </tr>
                                        <tr>
                                            <td><table width="100%" class="interests-table">
                                                <thead>
                                                    <tr>
                                                        <th v-for="i in interests"><div class="my-2 text-center"><i :class="'color-dynamic fa-4x '+i.icon" aria-hidden="true"></i></div></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center" v-for="i in interests">{{i.name}}</td>
                                                    </tr>
                                                </tbody>
                                            </table></td>
                                        </tr>
                                        <!-- END Interests -->
                                    </tbody>
                                </table></td>
                                <!-- END table right -->
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
            personalStatement: 'Passionate front end developer who is seeking a new challenging role which will utilize software engineering skills. Being described as reliable and competent by final year project supervisor in University of Sussex; also described as efficient and "has a knack for analyzing problems, and the ability to cut through to their simplest solutions" by a senior developer in the last role. Through work, Scrum software development framework was practiced, being able to accurately estimate the complexity of a task and committed to deliver on time. Constantly thinking of different possible use case of new feature or design during development, and were able to identify possible issues in the specification and improve the feature to prevent future problems.',
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
                        'Wrote a simple android app in Java to detect Estimote beacons',
                        'Involved in the design of payment system and beacon related feature'
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
                    modules: ['Human-Computer Interaction', 'Multimedia Design and Applications', 'Web 3D Applications']
                },
                {
                    start: '2005',
                    end: '2009',
                    organization: 'Framlingham College, Suffolk',
                    aLevels: 'Physics (A), Mathematics (A), Further Mathematics (B), ICT (C).'
                }
            ],
            interests: [
                {name: '3D modelling', icon: 'fa fa-cube'},
                {name: 'Digital drawing', icon: 'fa fa-picture-o'},
                {name: 'Music', icon: 'fa fa-music'}
            ],
            programmingLanguages: [
                {name: 'JavaScript', score: 10},
                {name: 'HTML', score: 10},
                {name: 'CSS', score: 10},
                {name: 'C#', score: 6},
                {name: 'Java', score: 5},
                {name: 'Python', score: 4},
                {name: 'MATLAB', score: 4},
                {name: 'C++', score: 3},
                {name: 'Clojure', score: 3},
                {name: 'SQL', score: 2}
            ],
            miscellaneous: [
                '3ds Max',
                'Android Studio',
                'Chinese',
                'Git',
                'iBeacon',
                'Jira',
                'Kinect',
                'Photoshop',
                'Stripe',
                'Visual Studio'
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
.paper {
    -webkit-box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.4);
    padding: 3rem;
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
.cv-section-header {
    border-bottom: 1px solid #000;
    color: var(--color);
}
.miscellaneous-skills {
    text-align: right;
    border-left: 1px solid #000;
    padding-left: 1rem;
    white-space: nowrap;
}
.interests-table {
    table-layout: fixed;
}
</style>
