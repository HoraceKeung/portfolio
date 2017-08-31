<template>
    <div>
        <p>Software List</p>
        <div class="row">
            <div class="col-3" v-for="s in softwareData">
                <p>{{s.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    name: '', // this name is needed as the path
    computed: Object.assign({},
        vuex.mapGetters(['softwareData']),
        {
        }
    )
}
</script>

<style scoped>
</style>
