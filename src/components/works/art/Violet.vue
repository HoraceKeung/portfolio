<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'Violet',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['2D'],
        img: '/static/img/violet.png',
        icon: '/static/img/violet_icon.png',
        date: '20150818',
        desc: 'Peace, chill, relax.'
    }
}
</script>

<style scoped>
</style>
