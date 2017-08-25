<template>
    <div class="alert-wrapper" :class="'alert-'+alertPosition" v-if="alertMessage !== null">
        <div :class="'alert alert-'+alertType" role="alert">
            <i :class="alertIcon" aria-hidden="true"></i> {{alertMessage}}
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
export default {
    computed: Object.assign({},
        vuex.mapGetters(['alertPosition', 'alertMessage', 'alertType']),
        {
            alertIcon: function () {
                switch (this.alertType) {
                case 'success':
                    return 'fa fa-check-circle'
                case 'danger':
                    return 'fa fa-exclamation-triangle'
                case 'warning':
                    return 'fa fa-exclamation-circle'
                case 'info':
                    return 'fa fa-info-circle'
                }
            }
        }
    )
}
</script>

<style scope>
.alert {
    display: inline-block;
}
.alert-wrapper {
    position: fixed;
    width: 100%;
    text-align: center;
    z-index: 99999;
}
.alert-wrapper.alert-bottom {
    bottom: 10%;
    top: auto;
}
.alert-wrapper.alert-top {
    top: 10%;
    bottom: auto;
}
</style>
