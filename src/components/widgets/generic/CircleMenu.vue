<template>
    <div :class="'circle-menu circle-menu-'+position">
        <div :class="'menu-hover-'+position" @mouseleave="mouseLeaveMenu">
            <button @click="toggleMenuLock" @mouseenter="openMenu" id="menu-toggle" type="button" :class="'btn'+(isMenuLocked?' btn-dynamic':' btn-outline-dynamic')+' circle-btn'+(position==='mid-right'?' circle-btn-mid-right':(position.split('-')[1]==='right'?' circle-btn-right':'')+(position.split('-')[0]==='mid'?' circle-btn-mid':'')+(position.split('-')[0]==='bot'?' circle-btn-bot':''))"><i class="fa fa-2x fa-compass" aria-hidden="true"></i></button>
            <div v-show="isMenuOpen">
                <button @click="item.callBack" v-for="(item,index) in menuSet" :id="'menu-btn-'+index" type="button" :class="'btn'+(isMenuLocked?' btn-dynamic':' btn-outline-dynamic')+' circle-btn-sm'"><i :class="'fa '+item.icon" aria-hidden="true"></i></button>
            </div>
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
            isMenuLocked: false,
            radius: 100// px
        }
    },
    computed: {
        availableAngle: function () {
            switch (this.position) {
            case 'mid-left':
            case 'mid-right':
                return 180
            default:
                return 90
            }
        },
        startAngle: function () {
            switch (this.position) {
            case 'top-left':
            case 'top-right':
                return 90
            default:
                return 0
            }
        },
        isClockwise: function () {
            switch (this.position) {
            case 'top-left':
            case 'mid-left':
            case 'bot-left':
                return true
            default:
                return false
            }
        },
        anchorX: function () {
            return this.position.split('-').slice(-1)[0]
        },
        anchorY: function () {
            return this.position.split('-')[0] === 'bot' ? 'bottom' : 'top'
        }
    },
    methods: {
        openMenu: function () {
            this.isMenuOpen = true
        },
        mouseLeaveMenu: function () {
            if (!this.isMenuLocked) {
                this.isMenuOpen = false
            }
        },
        toggleMenuLock: function () {
            this.isMenuLocked = !this.isMenuLocked
        },
        positionButtons: function () {
            const r = document.getElementById('menu-toggle').getBoundingClientRect()
            const offset = document.getElementById('menu-btn-0').getBoundingClientRect().width / 2
            const x = this.anchorX === 'left' ? r.left + (r.width / 2) : document.documentElement.clientWidth - r.left - (r.width / 2)
            const y = this.anchorY === 'top' ? r.top + (r.height / 2) : document.documentElement.clientHeight - r.top - (r.height / 2)
            const angleDiff = this.menuSet.length > 1 ? this.availableAngle / (this.menuSet.length - 1) : this.availableAngle / 2
            for (let i = 0; i < this.menuSet.length; i++) {
                const angle = (this.startAngle + (i * angleDiff)) * Math.PI / 180
                const newX = x + (this.radius * Math.sin(angle) * (this.isClockwise ? -1 : 1) * (this.anchorX === 'left' ? -1 : 1)) - offset
                const newY = y + (this.radius * Math.cos(angle) * (this.anchorY === 'top' ? -1 : 1)) - offset
                document.getElementById('menu-btn-' + i).style[this.anchorX] = newX + 'px'
                document.getElementById('menu-btn-' + i).style[this.anchorY] = newY + 'px'
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
.menu-hover-top-left {
    height: 160px;
    width: 160px;
    border-bottom-right-radius: 8em;
}
.menu-hover-top-right {
    height: 160px;
    width: 160px;
    border-bottom-left-radius: 8em;
    position: absolute;
    right: 0px;
}
.menu-hover-mid-left {
    height: 250px;
    width: 160px;
    border-top-right-radius: 8em;
    border-bottom-right-radius: 8em;
}
.menu-hover-mid-right {
    height: 250px;
    width: 160px;
    border-top-left-radius: 8em;
    border-bottom-left-radius: 8em;
    position: absolute;
    right: 0px;
}
.menu-hover-bot-left {
    height: 160px;
    width: 160px;
    border-top-right-radius: 8em;
}
.menu-hover-bot-right {
    height: 160px;
    width: 160px;
    border-top-left-radius: 8em;
    position: absolute;
    bottom: 0px;
    right: 0px;
}
.circle-menu {
    position: fixed;
    margin: 1rem;
    width: 0px;
}
.circle-menu-top-left {
    top: 0px;
    left: 0px;
}
.circle-menu-top-right {
    top: 0px;
    right: 0px;
}
.circle-menu-mid-left {
    top: 0px;
    left: 0px;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
}
.circle-menu-mid-right {
    top: 0px;
    right: 0px;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
}
.circle-menu-bot-left {
    bottom: 0px;
    left: 0px;
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
.circle-btn-right {
    right: 0px;
    position: absolute;
}
.circle-btn-mid {
    top: 5.75rem;
    position: relative;
}
.circle-btn-bot {
    bottom: 0px;
    position: absolute;
}
.circle-btn-mid-right {
    top: 5.75rem;
    right: -6rem;
    position: relative;
}
.circle-btn-sm {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    position: fixed;
    transition: all .1s ease-in-out;
}
.circle-btn-sm:hover
{
	transform: scale(1.1);
}
</style>
