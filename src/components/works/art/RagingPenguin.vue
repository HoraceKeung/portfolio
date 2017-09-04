<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'RagingPenguin',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['2D'],
        img: '/static/img/raging_penguin.png',
        icon: '/static/img/raging_penguin_icon.png',
        date: '20150911',
        desc: 'This penguin is enraged for some reason. He is unstoppable, approach at your own risk.'
    }
}
</script>

<style scoped>
</style>
