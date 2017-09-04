<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'FallingUma',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['2D'],
        img: '/static/img/falling_uma.png',
        icon: '/static/img/falling_uma_icon.png',
        date: '20150904',
        desc: '何この可愛い生物？'
    }
}
</script>

<style scoped>
</style>
