<template>
<div>
    <nav id="nav-bar" :class="navClass">
        <button id="nav-ham-button" @click="toggleNavBar" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link nav-color" to="/">HOME<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item" v-for="p in otherPages">
                    <router-link class="nav-link nav-color" :to="'/'+p.toLowerCase().split(' ').join('-')">{{p}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
import _ from 'lodash'
export default {
    data: function () {
        return {
            // path to other pages always equal to page name lower case and replace space with '-'
            otherPages: [
                'CONTACT'
            ],
            navClass: 'navbar navbar-toggleable-sm navbar-light custom-fixed-top-navbar',
            pos: 0
        }
    },
    methods: {
        toggleNavBar: function () {
            var classArr = this.navClass.split(' ')
            if (document.getElementById('nav-ham-button').getAttribute('aria-expanded') !== 'true') {
                if (!_.includes(classArr, 'navbar-not-at-top')) {
                    classArr.push('navbar-not-at-top')
                    this.navClass = classArr.join(' ')
                }
            } else {
                if (_.includes(classArr, 'navbar-not-at-top') && document.body.scrollTop === 0) {
                    classArr.pop()
                    this.navClass = classArr.join(' ')
                }
            }
        },
        handleScroll: function () {
            var ham = document.getElementById('nav-ham-button')
            if (ham.getAttribute('aria-expanded') === 'true') {
                ham.click()
            }
            var ele = document.getElementById('nav-bar')
            if (document.body.scrollTop <= this.pos) {
                // going up
                ele.style.top = '0px'
            } else {
                // going down
                ele.style.top = '-77px'
            }
            var classArr = this.navClass.split(' ')
            if (document.body.scrollTop === 0) {
                if (_.includes(classArr, 'navbar-not-at-top')) {
                    classArr.pop()
                    this.navClass = classArr.join(' ')
                }
            } else {
                if (!_.includes(classArr, 'navbar-not-at-top')) {
                    classArr.push('navbar-not-at-top')
                    this.navClass = classArr.join(' ')
                }
            }
            this.pos = document.body.scrollTop
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scope>
.custom-fixed-top-navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 500;
    border-bottom: 3px solid transparent;
    background-color: transparent;
    transition: background-color 0.25s, border-color 0.25s, top 0.1s linear;
}
.navbar-not-at-top {
    border-color: #016d9b;
    background-color: white;
}
.nav-item {
    margin-right: 10px;
}
.nav-color {
    color: #4d4d4d !important;
}
.nav-color:hover {
    color: #4ebae8 !important;
}
.navbar-toggler {
    cursor: pointer;
    outline: none !important;
    border: 0px;
}
</style>
