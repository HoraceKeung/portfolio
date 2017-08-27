<template>
    <div>
        <generic-page :title="languageObj[3]">
            <div slot="body">
                <div class="container">
                    <div class="card-deck">
                        <div class="card mb-3">
                            <div class="card-body" @click="setIsDraggingMenu(true)">
                                <div class="aligner"><h4 class="card-text mx-3">{{languageObj[4].toUpperCase()}}</h4></div>
                                <img width="100%" src="../assets/circleMenuOptionIcon.svg">
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body" data-toggle="modal" data-target="#colour-option-modal">
                                <div class="aligner"><h4 class="card-text mx-3">{{languageObj[5].toUpperCase()}}</h4></div>
                                <img width="100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNjRweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNjRweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgZmlsbD0iI0UwRTBEMSIgcj0iMzIiLz48ZyBvcGFjaXR5PSIwLjIiPjxwYXRoIGQ9Ik0xOS40ODUsMzcuNDY2QzE5LjI0NSwzNi42LDE4LjQ1NiwzNiwxNy41NTgsMzZoLTUuMTUxYy0wLjYsMC0xLjE2OSwwLjI3LTEuNTQ5LDAuNzM1ICAgYy0wLjM4LDAuNDY1LTAuNTMxLDEuMDc2LTAuNDExLDEuNjY1YzAuOTExLDQuNDY5LDMuMTUyLDguNDg5LDYuNDgsMTEuNjI1YzAuMzc0LDAuMzUyLDAuODY1LDAuNTQ0LDEuMzcxLDAuNTQ0ICAgYzAuMDk3LDAsMC4xOTQtMC4wMDcsMC4yOTEtMC4wMjFjMC42MDUtMC4wODksMS4xMzYtMC40NDksMS40NDEtMC45NzlsMi42LTQuNTAzYzAuNDM0LTAuNzUyLDAuMzMzLTEuNjk5LTAuMjUtMi4zNDMgICBDMjEuMDI1LDQxLjIyNiwyMC4wMjMsMzkuNDA4LDE5LjQ4NSwzNy40NjZ6IiBmaWxsPSIjMjMxRjIwIi8+PHBhdGggZD0iTTM2LjkwMyw0Ny42NTZjLTAuMzYyLTAuNjI4LTEuMDI4LTEtMS43MzItMWMtMC4xNDIsMC0wLjI4NSwwLjAxNS0wLjQyNywwLjA0NiAgIEMzMy44MzksNDYuOSwzMi45MTUsNDcsMzIsNDdjLTEuMjgsMC0yLjU0NC0wLjE4OC0zLjc1OS0wLjU1N2MtMC4xOTMtMC4wNTktMC4zODktMC4wODctMC41ODItMC4wODdjLTAuNywwLTEuMzY4LDAuMzY5LTEuNzMyLDEgICBsLTIuNTUzLDQuNDIyYy0wLjI5NSwwLjUxMS0wLjM0OSwxLjEyNS0wLjE0OSwxLjY4YzAuMiwwLjU1NSwwLjYzNSwwLjk5MiwxLjE4OCwxLjE5NkMyNi44MzIsNTUuNTQ3LDI5LjM4NCw1NiwzMiw1NiAgIGMyLjE2NCwwLDQuMjk5LTAuMzEzLDYuMzQ2LTAuOTNjMC41ODUtMC4xNzYsMS4wNTctMC42MSwxLjI4Mi0xLjE3OGMwLjIyNS0wLjU2OCwwLjE3OC0xLjIwOC0wLjEyNy0xLjczN0wzNi45MDMsNDcuNjU2eiIgZmlsbD0iIzIzMUYyMCIvPjxwYXRoIGQ9Ik00NC41MTYsMzAuNTI5QzQ0Ljc1NCwzMS4zOTgsNDUuNTQ0LDMyLDQ2LjQ0NSwzMmg1LjE1MWMwLjYsMCwxLjE2OC0wLjI2OSwxLjU0OC0wLjczNCAgIGMwLjM4LTAuNDY0LDAuNTMxLTEuMDc0LDAuNDEyLTEuNjYyYy0wLjk4NC00Ljg3MS0zLjYzNS05LjMwOS03LjQ2NC0xMi40OTdjLTAuMzYyLTAuMzAyLTAuODE2LTAuNDYzLTEuMjgtMC40NjMgICBjLTAuMTE3LDAtMC4yMzQsMC4wMS0wLjM1MSwwLjAzMWMtMC41ODEsMC4xMDMtMS4wODYsMC40NTgtMS4zODEsMC45NjlsLTIuNTU2LDQuNDI4Yy0wLjQ2NSwwLjgwNS0wLjMxMywxLjgyNSwwLjM2NiwyLjQ2MSAgIEM0Mi42MzMsMjYuMTYyLDQzLjg4NywyOC4yMzYsNDQuNTE2LDMwLjUyOXoiIGZpbGw9IiMyMzFGMjAiLz48cGF0aCBkPSJNMzguMzQ2LDEyLjkzQzM2LjI5OSwxMi4zMTMsMzQuMTY0LDEyLDMyLDEyYy0yLjYxNiwwLTUuMTY4LDAuNDUzLTcuNTg3LDEuMzQ2ICAgYy0wLjU1MywwLjIwNC0wLjk4OCwwLjY0Mi0xLjE4OCwxLjE5N2MtMC4yLDAuNTU0LTAuMTQ2LDEuMTY5LDAuMTQ5LDEuNjhsMi41NTMsNC40MjJjMC4zNjQsMC42MzEsMS4wMzIsMSwxLjczMiwxICAgYzAuMTk0LDAsMC4zODktMC4wMjgsMC41ODItMC4wODdDMjkuNDU2LDIxLjE4OCwzMC43MiwyMSwzMiwyMWMwLjkxNSwwLDEuODM5LDAuMSwyLjc0NCwwLjI5OCAgIGMwLjE0MiwwLjAzMSwwLjI4NiwwLjA0NiwwLjQyNywwLjA0NmMwLjcwNCwwLDEuMzY5LTAuMzcyLDEuNzMyLTFsMi41OTgtNC40OTljMC4zMDUtMC41MjksMC4zNTItMS4xNjksMC4xMjctMS43MzYgICBDMzkuNDAzLDEzLjU0MSwzOC45MzEsMTMuMTA3LDM4LjM0NiwxMi45M3oiIGZpbGw9IiMyMzFGMjAiLz48cGF0aCBkPSJNNTEuNTk2LDM2aC01LjE1MWMtMC45MDEsMC0xLjY5LDAuNjAyLTEuOTI5LDEuNDcxYy0wLjYyOSwyLjI5NC0xLjg4Myw0LjM2OC0zLjYyNSw1Ljk5NyAgIGMtMC42NzksMC42MzUtMC44MzEsMS42NTUtMC4zNjYsMi40NmwyLjU1Niw0LjQyOGMwLjI5NSwwLjUxMSwwLjgsMC44NjYsMS4zODEsMC45NjljMC4xMTcsMC4wMjEsMC4yMzQsMC4wMzEsMC4zNTEsMC4wMzEgICBjMC40NjQsMCwwLjkxOC0wLjE2MSwxLjI4LTAuNDYzYzMuODI5LTMuMTg4LDYuNDgtNy42MjcsNy40NjQtMTIuNDk3YzAuMTE5LTAuNTg4LTAuMDMzLTEuMTk4LTAuNDEyLTEuNjYzICAgQzUyLjc2NCwzNi4yNjksNTIuMTk2LDM2LDUxLjU5NiwzNnoiIGZpbGw9IiMyMzFGMjAiLz48cGF0aCBkPSJNMjAuMDMsMTguNDMyYy0wLjMwNi0wLjUyOS0wLjgzNy0wLjg5LTEuNDQxLTAuOTc5Yy0wLjA5Ny0wLjAxNC0wLjE5NC0wLjAyMS0wLjI5MS0wLjAyMSAgIGMtMC41MDYsMC0wLjk5OCwwLjE5Mi0xLjM3MSwwLjU0NGMtMy4zMjksMy4xMzYtNS41Nyw3LjE1Ni02LjQ4LDExLjYyNWMtMC4xMiwwLjU4OCwwLjAzMSwxLjIsMC40MTEsMS42NjUgICBDMTEuMjM3LDMxLjczLDExLjgwNiwzMiwxMi40MDYsMzJoNS4xNTFjMC44OTksMCwxLjY4Ny0wLjYsMS45MjctMS40NjZjMC41MzgtMS45NDMsMS41NC0zLjc2MSwyLjg5NS01LjI1OCAgIGMwLjU4My0wLjY0NCwwLjY4NC0xLjU5LDAuMjUtMi4zNDNMMjAuMDMsMTguNDMyeiIgZmlsbD0iIzIzMUYyMCIvPjwvZz48Zz48cGF0aCBkPSJNMTkuNDg1LDM1LjQ2NkMxOS4yNDUsMzQuNiwxOC40NTYsMzQsMTcuNTU4LDM0aC01LjE1MWMtMC42LDAtMS4xNjksMC4yNy0xLjU0OSwwLjczNSAgIGMtMC4zOCwwLjQ2NS0wLjUzMSwxLjA3Ni0wLjQxMSwxLjY2NWMwLjkxMSw0LjQ2OSwzLjE1Miw4LjQ4OSw2LjQ4LDExLjYyNWMwLjM3NCwwLjM1MiwwLjg2NSwwLjU0NCwxLjM3MSwwLjU0NCAgIGMwLjA5NywwLDAuMTk0LTAuMDA3LDAuMjkxLTAuMDIxYzAuNjA1LTAuMDg5LDEuMTM2LTAuNDQ5LDEuNDQxLTAuOTc5bDIuNi00LjUwM2MwLjQzNC0wLjc1MiwwLjMzMy0xLjY5OS0wLjI1LTIuMzQzICAgQzIxLjAyNSwzOS4yMjYsMjAuMDIzLDM3LjQwOCwxOS40ODUsMzUuNDY2eiIgZmlsbD0iIzc3QjNENCIvPjxwYXRoIGQ9Ik0zNi45MDMsNDUuNjU2Yy0wLjM2Mi0wLjYyOC0xLjAyOC0xLTEuNzMyLTFjLTAuMTQyLDAtMC4yODUsMC4wMTUtMC40MjcsMC4wNDYgICBDMzMuODM5LDQ0LjksMzIuOTE1LDQ1LDMyLDQ1Yy0xLjI4LDAtMi41NDQtMC4xODgtMy43NTktMC41NTdjLTAuMTkzLTAuMDU5LTAuMzg5LTAuMDg3LTAuNTgyLTAuMDg3Yy0wLjcsMC0xLjM2OCwwLjM2OS0xLjczMiwxICAgbC0yLjU1Myw0LjQyMmMtMC4yOTUsMC41MTEtMC4zNDksMS4xMjUtMC4xNDksMS42OGMwLjIsMC41NTUsMC42MzUsMC45OTIsMS4xODgsMS4xOTZDMjYuODMyLDUzLjU0NywyOS4zODQsNTQsMzIsNTQgICBjMi4xNjQsMCw0LjI5OS0wLjMxMyw2LjM0Ni0wLjkzYzAuNTg1LTAuMTc2LDEuMDU3LTAuNjEsMS4yODItMS4xNzhjMC4yMjUtMC41NjgsMC4xNzgtMS4yMDgtMC4xMjctMS43MzdMMzYuOTAzLDQ1LjY1NnoiIGZpbGw9IiM3NkMyQUYiLz48cGF0aCBkPSJNNDQuNTE2LDI4LjUyOUM0NC43NTQsMjkuMzk4LDQ1LjU0NCwzMCw0Ni40NDUsMzBoNS4xNTFjMC42LDAsMS4xNjgtMC4yNjksMS41NDgtMC43MzQgICBjMC4zOC0wLjQ2NCwwLjUzMS0xLjA3NCwwLjQxMi0xLjY2MmMtMC45ODQtNC44NzEtMy42MzUtOS4zMDktNy40NjQtMTIuNDk3Yy0wLjM2Mi0wLjMwMS0wLjgxNi0wLjQ2My0xLjI4LTAuNDYzICAgYy0wLjExNywwLTAuMjM0LDAuMDEtMC4zNTEsMC4wMzFjLTAuNTgxLDAuMTA0LTEuMDg2LDAuNDU4LTEuMzgxLDAuOTY5bC0yLjU1Niw0LjQyOGMtMC40NjUsMC44MDUtMC4zMTMsMS44MjUsMC4zNjYsMi40NjEgICBDNDIuNjMzLDI0LjE2Miw0My44ODcsMjYuMjM2LDQ0LjUxNiwyOC41Mjl6IiBmaWxsPSIjRTA5OTVFIi8+PHBhdGggZD0iTTM4LjM0NiwxMC45M0MzNi4yOTksMTAuMzEzLDM0LjE2NCwxMCwzMiwxMGMtMi42MTYsMC01LjE2OCwwLjQ1My03LjU4NywxLjM0NiAgIGMtMC41NTMsMC4yMDQtMC45ODgsMC42NDItMS4xODgsMS4xOTdjLTAuMiwwLjU1NC0wLjE0NiwxLjE2OSwwLjE0OSwxLjY4bDIuNTUzLDQuNDIyYzAuMzY0LDAuNjMxLDEuMDMyLDEsMS43MzIsMSAgIGMwLjE5NCwwLDAuMzg5LTAuMDI4LDAuNTgyLTAuMDg3QzI5LjQ1NiwxOS4xODgsMzAuNzIsMTksMzIsMTljMC45MTUsMCwxLjgzOSwwLjEsMi43NDQsMC4yOTggICBjMC4xNDIsMC4wMzEsMC4yODYsMC4wNDYsMC40MjcsMC4wNDZjMC43MDQsMCwxLjM2OS0wLjM3MiwxLjczMi0xbDIuNTk4LTQuNDk5YzAuMzA1LTAuNTI5LDAuMzUyLTEuMTY5LDAuMTI3LTEuNzM2ICAgQzM5LjQwMywxMS41NDEsMzguOTMxLDExLjEwNywzOC4zNDYsMTAuOTN6IiBmaWxsPSIjQzc1QzVDIi8+PHBhdGggZD0iTTUxLjU5NiwzNGgtNS4xNTFjLTAuOTAxLDAtMS42OSwwLjYwMi0xLjkyOSwxLjQ3MWMtMC42MjksMi4yOTQtMS44ODMsNC4zNjgtMy42MjUsNS45OTcgICBjLTAuNjc5LDAuNjM1LTAuODMxLDEuNjU1LTAuMzY2LDIuNDZsMi41NTYsNC40MjhjMC4yOTUsMC41MTEsMC44LDAuODY2LDEuMzgxLDAuOTY5YzAuMTE3LDAuMDIxLDAuMjM0LDAuMDMxLDAuMzUxLDAuMDMxICAgYzAuNDY0LDAsMC45MTgtMC4xNjEsMS4yOC0wLjQ2M2MzLjgyOS0zLjE4OCw2LjQ4LTcuNjI3LDcuNDY0LTEyLjQ5N2MwLjExOS0wLjU4OC0wLjAzMy0xLjE5OC0wLjQxMi0xLjY2MyAgIEM1Mi43NjQsMzQuMjY5LDUyLjE5NiwzNCw1MS41OTYsMzR6IiBmaWxsPSIjRjVDRjg3Ii8+PHBhdGggZD0iTTIwLjAzLDE2LjQzMmMtMC4zMDYtMC41MjktMC44MzctMC44OS0xLjQ0MS0wLjk3OWMtMC4wOTctMC4wMTQtMC4xOTQtMC4wMjEtMC4yOTEtMC4wMjEgICBjLTAuNTA2LDAtMC45OTgsMC4xOTItMS4zNzEsMC41NDRjLTMuMzI5LDMuMTM2LTUuNTcsNy4xNTYtNi40OCwxMS42MjVjLTAuMTIsMC41ODgsMC4wMzEsMS4yLDAuNDExLDEuNjY1ICAgQzExLjIzNywyOS43MywxMS44MDYsMzAsMTIuNDA2LDMwaDUuMTUxYzAuODk5LDAsMS42ODctMC42LDEuOTI3LTEuNDY2YzAuNTM4LTEuOTQzLDEuNTQtMy43NjEsMi44OTUtNS4yNTggICBjMC41ODMtMC42NDQsMC42ODQtMS41OSwwLjI1LTIuMzQzTDIwLjAzLDE2LjQzMnoiIGZpbGw9IiM0RjVENzMiLz48L2c+PC9zdmc+">
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body" data-toggle="modal" data-target="#language-option-modal">
                                <div class="aligner"><h4 class="card-text mx-3">{{languageObj[6].toUpperCase()}}</h4></div>
                                <img width="100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PGcgZGF0YS1uYW1lPSJHb29nbGUgVHJhbnNsYXRlIiBpZD0iR29vZ2xlX1RyYW5zbGF0ZSI+PHBhdGggZD0iTTIyLDRIMTIuMjNMMTEsLjM0QS41LjUsMCwwLDAsMTAuNSwwSDJBMiwyLDAsMCwwLDAsMlYxOGEyLDIsMCwwLDAsMiwyaDkuNjVMMTMsMjMuNjhhLjUuNSwwLDAsMCwuNDcuMzJIMjJhMiwyLDAsMCwwLDItMlY2QTIsMiwwLDAsMCwyMiw0Wk03LjUsMTVhNC41LDQuNSwwLDEsMSwyLjkyLTcuOTIuNS41LDAsMSwxLS42NS43NkEzLjUsMy41LDAsMSwwLDExLDExSDcuNWEuNS41LDAsMCwxLDAtMWg0YS41LjUsMCwwLDEsLjUuNUE0LjUsNC41LDAsMCwxLDcuNSwxNVptMTEuOS00YTExLjI2LDExLjI2LDAsMCwxLTEuODYsMy4yOSw2LjY3LDYuNjcsMCwwLDEtMS4wNy0xLjQ4LjUuNSwwLDAsMC0uOTMuMzgsOCw4LDAsMCwwLDEuMzQsMS44Nyw4LjksOC45LDAsMCwxLS42NS42MkwxNC42MiwxMVpNMjMsMjJhMSwxLDAsMCwxLTEsMUgxNC42bDIuNzctMy4xN2EuNDkuNDksMCwwLDAsLjA5LS40OGgwbC0uOTEtMi42NmE5LjM2LDkuMzYsMCwwLDAsMS0uODljMSwxLDEuOTMsMS45MSwyLjEyLDIuMDhhLjUuNSwwLDAsMCwuNjgtLjc0Yy0uNDctLjQzLTEuMzMtMS4yNS0yLjEzLTIuMWExMS40OSwxMS40OSwwLDAsMCwyLjIyLTRIMjEuNWEuNS41LDAsMCwwLDAtMUgxOFY5LjVhLjUuNSwwLDAsMC0xLDBWMTBIMTQuNWEuNDkuNDksMCwwLDAtLjIxLDBMMTIuNTcsNUgyMmExLDEsMCwwLDEsMSwxWiIgc3R5bGU9ImZpbGw6IzMwM2M0MiIvPjwvZz48L3N2Zz4=">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </generic-page>
        <!-- START colour option modal -->
        <vue-modal id="colour-option-modal">
            <h5 slot="header">{{languageObj[21]}}</h5>
            <div slot="body">
                <slider :value="themeColor" @input="setColour"></slider>
            </div>
        </vue-modal>
        <!-- END colour option modal -->
        <!-- START language option modal -->
        <vue-modal id="language-option-modal">
            <h5 slot="header">{{languageObj[17]}}</h5>
            <div slot="body">
                <div class="row">
                    <div class="col-sm-6" v-for="l in languages">
                        <p @click="setLang(l)" class="language-option pointer">{{l}}</p>
                    </div>
                </div>
            </div>
        </vue-modal>
        <!-- END language option modal -->
    </div>
</template>

<script>
import vuex from 'vuex'
import GenericPage from './widgets/generic/GenericPage'
import VueModal from './widgets/util/VueModal'
import { Slider } from 'vue-color'
export default {
    components: {GenericPage, VueModal, Slider},
    methods: vuex.mapActions(['setIsDraggingMenu', 'setLang', 'setColour']),
    computed: vuex.mapGetters(['languageObj', 'themeColor']),
    data () {
        return {
            languages: [
                'English',
                '正體中文'
            ]
        }
    }
}
</script>

<style scoped>
@import url("../styles/color.css");
.aligner {
    cursor: pointer;
    top: 0rem;
    left: 0rem;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
}
.aligner:hover {
    background: rgba(25, 25, 25, .5);
}
.card-text {
    color: #fff;
}
.language-option:hover {
    color: var(--color);
    text-decoration: underline;
    opacity: 0.7;
}
</style>
