<template>
    <generic-art :name="$options.name" :specificArtData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'Cat',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['3D'],
        icon: '/static/img/cat_icon.png',
        date: '20141025',
        desc: 'MARSHMALLOW!!!',
        modelId: 'f3640acd1eb546a9a7cd4bca8ebd5c33'
    }
}
</script>

<style scoped>
</style>
