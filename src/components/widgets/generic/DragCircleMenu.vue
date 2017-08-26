<template>
    <div>
        <div class="drag-overlay" v-if="isDraggingMenu">
            <div v-for="l in locations" :key="l.position" :class="l.position+' position-div'">
                <draggable @end="dragEnd" v-model="l.array" :class="(l.array.length>0||!isDraggingMenu)?'':'place-inactive'" element="div" :options="dragOptions">
                    <div v-for="e in l.array">
                        <div class="current-pos-indicator btn">
                            <i class="fa fa-2x fa-compass" aria-hidden="true"></i>
                        </div>
                    </div>
                </draggable>
            </div>
            <div class="drag-overlay-text">
                <div class="text-center">
                    <p>{{languageObj[13]}}</p>
                    <button @click="setIsDraggingMenu(false)" type="button" class="btn btn-dynamic">{{languageObj[14]}}</button>
                </div>
            </div>
        </div>
        <circle-menu v-else :menu-set="menuSet" :position="circleMenuPosition"></circle-menu>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import vuex from 'vuex'
import draggable from 'vuedraggable'
import CircleMenu from './CircleMenu'
import router from '@/router'
export default {
    components: {draggable, CircleMenu},
    computed: Object.assign({},
        vuex.mapGetters(['pathIconMap', 'isDraggingMenu', 'circleMenuPosition', 'languageObj']),
        {
            menuSet: function () {
                return this.pathIconMap.map(function (x) {
                    return {
                        icon: x.icon,
                        callBack: function () {
                            router.push('/' + (x.path === 'home' ? '' : x.path))
                        }
                    }
                })
            }
        }
    ),
    methods: Object.assign({},
        vuex.mapActions(['setIsDraggingMenu', 'setCircleMenuPosition']),
        {
            dragEnd: function () {
                const pos = this.locations.find(function (x) {
                    return x.array.length > 0
                }).position
                this.setCircleMenuPosition(pos)
                Cookies.set('circleMenuPositionCookie', pos)
            }
        }
    ),
    created () {
        const cmpc = Cookies.get('circleMenuPositionCookie')
        if (typeof cmpc === 'undefined') {
            this.locations[2].array.push(1)// cookie not found, set default position to top left
        } else {
            this.locations.find(function (x) {
                return x.position === cmpc
            }).array.push(1)
            this.setCircleMenuPosition(cmpc)
        }
    },
    data () {
        return {
            dragOptions: {
                group: 'dragCircleMenu',
                ghostClass: 'ghost'
            },
            locations: [
                {
                    position: 'mid-left',
                    array: []
                },
                {
                    position: 'mid-right',
                    array: []
                },
                {
                    position: 'top-left',
                    array: []
                },
                {
                    position: 'top-right',
                    array: []
                },
                {
                    position: 'bot-left',
                    array: []
                },
                {
                    position: 'bot-right',
                    array: []
                }
            ]
        }
    }
}
</script>

<style scoped>
.ghost {
    opacity: .5;
    background: #C8EBFB;
    top: -3px;
    left: -3px;
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
}
.top-left {
    top: 0px;
    left: 0px;
}
.top-right {
    top: 0px;
    right: 0px;
}
.mid-left {
    top: 0px;
    left: 0px;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
}
.mid-right {
    top: 0px;
    right: 0px;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    right: 0px;
}
.bot-left {
    bottom: 0px;
    left: 0px;
}
.bot-right {
    bottom: 0px;
    right: 0px;
}
.position-div {
    position: fixed;
    margin: 1rem;
}
.place-inactive {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 3px #fff dashed;
}
.drag-overlay {
    background: rgba(25, 25, 25, .7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    z-index: 2;
}
.current-pos-indicator {
    color: #fff;
    border: 1px #fff solid;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    cursor: move;
    background-color: transparent;
}
.current-pos-indicator:hover {
    background-color: #fff;
    color: rgba(25, 25, 25, .7);
}
.current-pos-indicator i {
    position: relative;
    top: 0.5rem;
}
.drag-overlay-text {
    color: #fff;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
}
</style>
