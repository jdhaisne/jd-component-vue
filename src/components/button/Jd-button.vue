<template>
    <button :disabled="disabled" class ="jd-btn" :class="rootClasses">
        <jd-icon v-if="icon" class="jd-btn-icon" :name="icon"/>
        <span v-if="$slots.default" class="jd-btn--text">
            <slot></slot>
        </span>
    </button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue' 
import JdIcon from "../icon"
import { Sizes, Colors } from "../../models/enums"


export default defineComponent({
    name: "jd-button",
    components: {
        JdIcon,
    },
    props: {
        type: {
            type: String,
            default: Colors.NEUTRAL
        },
        rounded:    { type: Boolean },
        block:      { type: Boolean },
        outlined:   { type: Boolean },
        disabled:   { type: Boolean },
        text:       { type: Boolean },
        pulse:      { type: Boolean },
        loading:    { type: Boolean },
        icon:       { type: String },
        size:       {
                    type: String,
                    default: Sizes.NORMAL,
                    validator: (value: Sizes) => Object.values(Sizes).includes(value),
        },
        colors:     { 
                    type: String,
                    default: Colors.NEUTRAL,
                    validator: (value: Colors) => Object.values(Colors).includes(value),
                    },
    },

    setup(props, { slots }) {
        console.log(props)

        const rootClasses = computed(() => [{
            "jd-btn--empty":    !slots.default,
            "jd-btn--outlined": props.outlined,
            "jd-btn--block":    props.block,
            "jd-btn--rounded":  props.rounded,
            "jd-btn--text":     props.text,
            "pulse":    props.pulse,
            [`jd-btn--${props.size}`]: props.size,
            ...(props.type
                ? { [`jd-btn--${props.type}`]: true }
                : { 'jd-btn--neutal': true}),
        }])
        
        return { rootClasses }
        

    },
})
</script>
