<template>
    <div class="jd-select">
        <span class="jd-textfield-label" v-if="labelTop && !$slots.labelTop">{{ labelTop }}</span>
        <span class="jd-textfield-label" v-if="$slots.labelTop">{{ $slots.labelTop }}</span>
        <div class="jd-select-inner">
            <div class="jd-select-selection"
            @click="toggleDropdown">
            
            </div>
        </div>
        <transition name="drop-bottom">
            <div v-if="show" class="jd-select-dropdown">
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
import { TEmit } from '../../types'
import { useSelect } from './hooks'
import { TSelectProps } from './types'
import { TProps } from '../../types'

export default defineComponent({
    name: 'jd-select',
    inheritAttrs: false,
    props: {
        labelTop:       {type: String},
        placeholder:    {type: String},
        options:        {type: Array, default: () => []}
    },
    setup(props: TProps, {slots, emit}) {
        const {
            indexFocusedOption,
            optionsRefs,
            show,
            setOpen,
            toggleDropdown,
        } = useSelect(props as TSelectProps, emit as TEmit)
    return {
        indexFocusedOption,
        optionsRefs,
        show,
        setOpen,
        toggleDropdown
    }
    },
})
</script>
