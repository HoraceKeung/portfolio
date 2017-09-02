<template>
    <div>
        <generic-blog :name="$options.name" :specific-blog-data="$options.specificBlogData">
            <div slot="blogBody">
            </div>
        </generic-blog>
    </div>
</template>

<script>
import GenericBlog from '../widgets/generic/GenericBlog'
export default {
    name: 'HappyBirthday',
    components: {GenericBlog},
    specificBlogData: {// This is required for each new blog, this data will be injected to the store in router index.js
        tags: ['English', 'Website'],
        img: '/static/img/birthday_cake.png',
        desc: 'Let us celebrate the birth of this website!',
        date: '20170904'
    }
}
</script>

<style scoped>
</style>
