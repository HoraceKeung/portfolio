<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-3 text-center">{{title}}</h1>
            <p class="lead text-center" v-if="subTitle">{{subTitle}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subTitle']
}
</script>

<style scoped>
.jumbotron {
    margin-bottom: 0px;
}
</style>
