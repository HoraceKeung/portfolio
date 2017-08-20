<template>
    <div :class="'circle-menu circle-menu-'+position">
        <button @click="toggleMenu" id="menu-toggle" type="button" class="btn btn-success circle-btn"><i class="fa fa-2x fa-compass" aria-hidden="true"></i></button>
        <div v-show="isMenuOpen">
            <button @click="item.callBack" v-for="(item,index) in menuSet" :id="'menu-btn-'+index" type="button" class="btn btn-success circle-btn-sm"><i :class="'fa '+item.icon" aria-hidden="true"></i></button>
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
            isMenuOpen: true,
            radius: 100// px
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
        },
        positionButtons: function () {
            const r = document.getElementById('menu-toggle').getBoundingClientRect()
            const offset = document.getElementById('menu-btn-0').getBoundingClientRect().width / 2
            const x = r.left + (r.width / 2)
            const y = r.top + (r.height / 2)
            const angleDiff = this.menuSet.length > 1 ? this.availableAngle / (this.menuSet.length - 1) : this.availableAngle / 2
            for (let i = 0; i < this.menuSet.length; i++) {
                const angle = (this.startAngle + (i * angleDiff)) * Math.PI / 180
                const newX = x - (this.radius * Math.sin(angle)) - offset
                const newY = y - (this.radius * Math.cos(angle)) - offset
                document.getElementById('menu-btn-' + i).style.left = newX + 'px'
                document.getElementById('menu-btn-' + i).style.top = newY + 'px'
            }
            this.isMenuOpen = false
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.positionButtons()
        })
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
    position: fixed;
}
</style>
