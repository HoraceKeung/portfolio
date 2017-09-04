<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'Sunset',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['2D'],
        img: '/static/img/sunset.png',
        icon: '/static/img/sunset_icon.png',
        date: '20150825',
        desc: 'What lies beyond the horizon?'
    }
}
</script>

<style scoped>
</style>
