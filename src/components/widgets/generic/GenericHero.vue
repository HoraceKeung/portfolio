<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <img class="logo" src="../../../assets/logo.svg">
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
.logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
}
</style>
