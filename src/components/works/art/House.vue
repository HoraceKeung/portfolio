<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'House',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['3D'],
        icon: '/static/img/house_icon.png',
        date: '20150115',
        modelId: '945282a6ddf54f62bbb7e7ec94b200f7'
    }
}
</script>

<style scoped>
</style>
