<template>
    <i class="material-icons jd-icon" 
        :class="[outlined && 'material-icons-outlined', box && 'jd-icon--box']"
        :style="{
            color,
            'background-color': box && boxColor ? boxColor : ''
            }"
    >
        <slot>
            {{ name ? name : ''}}
        </slot>
    </i>
</template>

<script lang="ts">
import { computed, defineComponent} from 'vue'


export default defineComponent({
    name: "jd-icon",
    props: {
        name:       { type: String},
        outlined:   { type: Boolean},
        color:      { type: String, default: null},
        box:        { type: Boolean},
        boxColor:   { type: String},

    },

})
</script>