<template>
    <footer class="footer">
        <div class="container">
            <div class="row footer-links">
                <div class="col-sm-3 text-center" v-for="l in links"><router-link class="color-dynamic" :to="'/'+(l.path==='home'?'':l.path)"><i :class="'fa '+l.icon" aria-hidden="true"></i> {{l.path.toUpperCase()}}</router-link></div>
            </div>
            <div class="float-right"><span>Horace Keung {{currentYear}}</span></div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        currentYear () {
            return new Date().getFullYear()
        }
    },
    data () {
        return {
            links: [
                {
                    path: 'home',
                    icon: 'fa-home'
                },
                {
                    path: 'work',
                    icon: 'fa-folder'
                },
                {
                    path: 'contact',
                    icon: 'fa-envelope'
                },
                {
                    path: 'option',
                    icon: 'fa-cog'
                }
            ]
        }
    }
}
</script>

<style scoped>
.footer {
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: 60px; /* Vertically center the text there */
    background-color: #24292e;
}
.footer-links a {
    font-weight: bold;
}
</style>
