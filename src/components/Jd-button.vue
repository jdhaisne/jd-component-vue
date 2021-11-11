<template>
    <button :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        disabled: { type: Boolean }
    },
    setup() {
        

    },
})
</script>
