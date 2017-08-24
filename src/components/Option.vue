<template>
    <div>
        <generic-page title="Option">
            <div slot="body">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-3 mb-3 card-deck">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title text-center">MENU POSITION</h4>
                                </div>
                                <div class="card-block">
                                    <div>"DRAG AND DROP" IMAGE</div>
                                </div>
                                <div class="card-footer btn btn-dynamic">Edit</div>
                            </div>
                        </div>
                    </div>
                </div>
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
