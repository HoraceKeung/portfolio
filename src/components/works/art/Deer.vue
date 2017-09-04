<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'Deer',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['3D'],
        icon: '/static/img/deer_icon.png',
        date: '20141118',
        modelId: '2747cc54b031450dac32ee6a9625b5c7'
    }
}
</script>

<style scoped>
</style>
