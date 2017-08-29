<template>
    <div>
        <p>{{thisBlog}}</p>
    </div>
</template>

<script>
import util from '@/util/util'
import vuex from 'vuex'
export default {
    name: 'HappyBirthday',
    computed: Object.assign({},
        vuex.mapGetters(['blogData']),
        {
            thisBlog () {
                return Object.assign({},
                    this.blogData.filter(x => {
                        return x.name === this.$options.name
                    })[0],
                    {
                        title: util.splitCamel(this.$options.name)
                    }
                )
            }
        }
    )
}
</script>

<style scoped>
</style>
