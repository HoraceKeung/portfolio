<template>
    <div :class="'circle-menu circle-menu-'+position">
        <button @click="toggleMenu" type="button" class="btn btn-success circle-btn"><i class="fa fa-2x fa-compass" aria-hidden="true"></i></button>
        <div v-if="isMenuOpen">
            <button @click="item.callBack" v-for="item in menuSet" type="button" class="btn btn-success circle-btn-sm"><i :class="'fa '+item.icon" aria-hidden="true"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuSet: {
            type: Array,
            required: true
        },
        position: {
            type: String,
            default: 'top-left'
        }
    },
    data () {
        return {
            isMenuOpen: false
        }
    },
    computed: {
        availableAngle: function () {
            switch (this.position) {
            case 'top-left':
            case 'top-right':
            case 'bot-left':
            case 'bot-right':
                return 90
            default:
                return 180
            }
        },
        startAngle: function () {
            switch (this.position) {
            case 'top-left':
                return 90
            case 'top-center':
            case 'top-right':
            case 'bot-center':
                return 270
            default:
                return 0
            }
        },
        isClockwise: function () {
            switch (this.position) {
            case 'top-left':
            case 'mid-left':
            case 'bot-left':
            case 'bot-center':
                return true
            default:
                return false
            }
        }
    },
    methods: {
        toggleMenu: function () {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped>
.circle-menu {
    position: fixed;
    margin: 1rem;
}
.circle-menu-top-left {
    top: 0px;
    left: 0px;
}
.circle-menu-top-center {
    top: 0px;
    width: 100%;
    text-align: center;
}
.circle-menu-top-right {
    top: 0px;
    right: 0px;
}
.circle-menu-mid-left {
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
}
.circle-menu-mid-right {
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    right: 0px;
}
.circle-menu-bot-left {
    bottom: 0px;
    left: 0px;
}
.circle-menu-bot-center {
    bottom: 0px;
    width: 100%;
    text-align: center;
}
.circle-menu-bot-right {
    bottom: 0px;
    right: 0px;
}
.circle-btn {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
}
.circle-btn-sm {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
}
</style>
