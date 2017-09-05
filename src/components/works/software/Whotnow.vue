<template>
    <generic-software :name="$options.name" :specificSoftwareData="$options.specificSoftwareData">
        <div slot="softwareBody">
            <p><a href="https://www.whotnow.com/" target="_blank">https://www.whotnow.com/</a></p>
        </div>
    </generic-software>
</template>

<script>
import GenericSoftware from '@/components/widgets/generic/GenericSoftware'
export default {
    components: {GenericSoftware},
    name: 'Whotnow',
    specificSoftwareData: {// This is required for each new software, this data will be injected to the store in router index.js
        tags: ['Website', 'Vuejs'],
        img: '/static/img/whotnow_bws.png',
        icon: '/static/img/whotnow_logo.png',
        date: '20170831'
    }
}
</script>

<style scoped>
</style>
