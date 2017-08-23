<template>
    <div>
        <div v-for="l in locations" :key="l.position" :class="l.position+' position-div'">
            <draggable v-model="l.array" :class="(l.array.length>0||!isDraggingMenu)?'':'place-inactive'" element="div" :options="dragOptions">
                <div v-for="e in l.array"><div class=""></div></div>
            </draggable>
        </div>
        <circle-menu :menu-set="menuSet" :position="circleMenuPosition"></circle-menu>
    </div>
</template>

<script>
import vuex from 'vuex'
import draggable from 'vuedraggable'
import CircleMenu from './CircleMenu'
import router from '@/router'
export default {
    components: {draggable, CircleMenu},
    computed: vuex.mapGetters(['isDraggingMenu', 'circleMenuPosition']),
    data () {
        return {
            menuSet: [
                {
                    icon: 'fa-home',
                    callBack: function () {
                        router.push('/')
                    }
                },
                {
                    icon: 'fa-folder',
                    callBack: function () {
                        router.push('/work')
                    }
                },
                {
                    icon: 'fa-envelope',
                    callBack: function () {
                        router.push('/contact')
                    }
                },
                {
                    icon: 'fa-cog',
                    callBack: function () {
                        router.push('/option')
                    }
                }
            ],
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
                    array: [1]
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
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
}
.mid-right {
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
    border: 3px grey dashed;
}
</style>
