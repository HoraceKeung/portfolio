<template>
    <generic-art :specificBlogData="$options.specificArtData"></generic-art>
</template>

<script>
import GenericArt from '@/components/widgets/generic/GenericArt'
export default {
    components: {GenericArt},
    name: 'BirthdayCake',
    specificArtData: {// This is required for each new art, this data will be injected to the store in router index.js
        tags: ['2D'],
        img: '/static/img/birthday_cake.png',
        icon: '/static/img/birthday_cake_icon.png'
    }
}
</script>

<style scoped>
</style>
