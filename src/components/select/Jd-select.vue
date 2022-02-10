<template>
    <div class="jd-select">
        <span class="jd-textfield-label" v-if="labelTop && !$slots.labelTop">{{ labelTop }}</span>
        <span class="jd-textfield-label" v-if="$slots.labelTop">{{ $slots.labelTop }}</span>
        <div class="jd-select-inner">
            <div class="jd-select-selection">

            </div>
        </div>
        <transition name="drop-bottom">
            <div class="jd-select-dropdown">
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'jd-select',
    inheritAttrs: false,
    props: {
        labelTop:   {type: String},
        options:    {type: Array, default: () => []}
    },
    setup() {
        
    },
})
</script>
