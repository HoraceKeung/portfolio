<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
        <div :class="'modal-dialog'+(size==='lg'?' modal-lg':size==='sm'?' modal-sm':'')" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                    <button :id="'close-'+id" type="button" class="btn btn-sm btn-top-right btn-outline-danger" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">{{languageObj[16]}}</button>
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    props: ['id', 'size'],
    computed: vuex.mapGetters(['languageObj'])
}
</script>

<style scoped>
.btn-top-right {
    position: absolute;
    top: -1px;
    right: -1px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 7px;
}
</style>
