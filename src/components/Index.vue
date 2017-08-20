<template>
    <div>
        <generic-page title="Hello">
            <div slot="body">
                <h1>Hello</h1>
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
</style>
