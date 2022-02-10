<template>
    <div class="jd-demobox">
        <div class="jd-demobox-scene">
            <slot name="scene"></slot>
        </div>
        <div class="jd-demobox-tools">
            <slot name="tools"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "jd-demobox",
    setup() {
    },
})
</script>
