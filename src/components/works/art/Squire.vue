<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'Squire',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['2D'],
        img: '/static/img/squire.png',
        icon: '/static/img/squire_icon.png',
        date: '20151001',
        desc: 'He is determined to become a knight.'
    }
}
</script>

<style scoped>
</style>
