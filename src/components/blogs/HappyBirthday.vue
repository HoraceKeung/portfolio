<template>
    <div>
        <generic-blog :name="$options.name"></generic-blog>
    </div>
</template>

<script>
import GenericBlog from '../widgets/generic/GenericBlog'
export default {
    name: 'HappyBirthday',
    components: {GenericBlog}
}
</script>

<style scoped>
</style>
