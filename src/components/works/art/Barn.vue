<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'Barn',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['3D'],
        icon: '/static/img/barn_icon.png',
        date: '20150113',
        modelId: '413cacd8083544d48c311b12e853f25c'
    }
}
</script>

<style scoped>
</style>
