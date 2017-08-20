<template>
    <div>
        <generic-page title="Hello">
            <div slot="body">
                <div class="dummy"></div>
            </div>
        </generic-page>
    </div>
</template>

<script>
import GenericPage from './widgets/generic/GenericPage'
export default {
    components: {GenericPage}
}
</script>

<style scoped>
.dummy {
    height: 1000px;
    border: 1px solid red;
}
</style>
