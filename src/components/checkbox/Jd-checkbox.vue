<template>
    <label class="jd-checkbox-wrapper">
        <span class="jd-checkbox-check-wrapper"
        :class="[pulse && !disabled && 'pulse']">
            <input
                type="checkbox"
                class="jd-checkbox-input"
                v-bind="$attrs"
                :disabled="disabled"
                @change="toggle" />
            <span 
                class="jd-checkbox"
                :class="[
                    `jd-checkbox--${type}`,
                    disabled && 'jd-checkbox--disabled',
                    modelValue && `jd-checkbox--${type}--checked`
                    ]"
                >
                <jd-icon style="font-size: 16px" :name="icon" />
            </span>
        </span>
        <span class="jd-checkbox-label-wrapper">
            <span v-if="label && !$slots.default"
                class="jd-checkbox-label"
                :class="[
                    lineThrough && modelValue && 'jd-checkbox-label--lineThrough',
                    disabled && 'jd-checkbox-label--disabled']"
            >
                {{ label }}
            </span>
            <span v-if="subLabel && !$slots.subLabel"
                class="jd-checkbox-label jd-checkbox-label--sub"
                :class="[disabled && 'jd-checkbox-label--disabled']"
            > {{ subLabel }}
            </span>

            <span v-if="$slots.default"
                class="jd-checkbox-label"
                :class="[
                    lineThrough && modelValue && 'jd-checkbox-label--linethrough',
                    disabled && 'jd-checkbox-label--disabled']"
            >
                <slot></slot>
            </span>
            <span v-if="$slots.sublabel"
            class="jd-checkbox-label jd-checkbox-label--sub"
            :class="[disabled && 'jd-checkbox-label--disabled']">
                <slot name="sublabel"></slot>
            </span>

        </span>
    </label>

    
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
    import { Colors } from '../../models/enums'
import JdIcon from '../icon/Jd-icon.vue'

export default defineComponent({
  components: { JdIcon },
    name: "jd-checkbox",
    inheritAttrs: false,
    props: {
        type: { type: String,
                default: Colors.PRIMARY },
        label: { type: String },
        subLabel: { type: String },
        icon: { type: String,
                default: "check"},
        lineThrough: { type: Boolean },
        disabled: { type: Boolean },
        pulse: { type: Boolean },
        modelValue: {}
    },
    setup(props, { slots, emit}) {
        console.log(props, slots)
        function toggle() {
            if( props.disabled) {
                return
            }
            const newValue = !props.modelValue
            emit('update:modelValue', newValue)
            return
        }

        return { toggle }
    },

})
</script>