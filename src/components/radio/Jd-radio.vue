<template>
    <label class="jd-radio-wrapper"
            :class="[`jd-radio-wrapper--${type}`,
                isChecked && `jd-radio-wrapper--${type}--checked`,
                disabled && 'jd-radio-wrapper--disabled']">
        <input 
            type="radio"
            class="jd-radio-input"
            v-bind="$attrs"
            :disabled="disabled"
            :value="modelValue"
            :checked="isChecked"
            @change="check"
        />
        <span :class="['jd-radio-border', pulse && !disabled && 'pulse']">
            <span class="jd-radio-circle"></span>
        </span>
        <span class="jd-radio-label-wrapper">
            <span v-if="label && !$slots.default" 
                :class="['jd-radio-label', 'jd-radio-label--disabled' && disabled]">
                    {{ label }}
            </span>
            <span v-if="subLabel && !$slots.subLabel"
                class="jd-radio-label jd-radio-label--sub"
                :class="['jd-radio-label--disabled' && disabled]">
                    {{ subLabel }}
            </span>
            <span v-if="$slots.default" 
                :class="['jd-radio-label', 'jd-radio-label--disabled' && disabled]">
                    {{ $slots.default }}
            </span>
            <span v-if="$slots.subLabel" class="jd-radio-label jd-radio-label--sub"
                :class="['jd-radio-label--disabled' && disabled]">
                    {{ $slots.subLabel }}
            </span>

        </span>
    </label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Colors } from '../../models/enums'

export default defineComponent({
    name: "jd-radio",
    inheritAttrs: false,
    props: {
        type:       { type: String,
                        default: Colors.PRIMARY,
                        validator: (value: Colors) =>
                            [
                                Colors.PRIMARY,
                                Colors.SUCCESS,
                                Colors.DANGER,
                                Colors.WARNING,
                                Colors.BLACK,
                            ].includes(value),
                    },
        label:      { type: String },
        subLabel:   { type: String },
        value:      { type: [String, Number]},
        pulse:      { type: Boolean},
        disabled:   { type: Boolean},
        modelValue: {}
    },
    setup(props, { slots, emit }) {
        const isChecked = computed(() => props.modelValue === props.value)
        function check() {
            if(props.disabled)
                return
            emit('update:modelValue', props.value)
        }

        return { isChecked, check}
    }


})
</script>