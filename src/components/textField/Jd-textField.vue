<template>
    <div>
        <transition name="fade">
            <div v-show="focus && mask" class="jd-textfield-mask"></div>
        </transition>
        <span v-if="labelTop" class="jd-textfield-label">{{ labelTop }}</span>
        <div class="jd-textfield-prefix-wrapper"
            :style="{ 'z-index': (mask? 100: 0)}">
            <div v-if="prefix" class="jd-textfield-prefix">
                {{ prefix }}
            </div>
            <div :class="['jd-textfield-wrapper',
                            status && `jd-textfield-wrapper--${status}`]">
                <span v-if="leftIcon" class="jd-textfield-icon-wrapper">
                    <jd-icon class="jd-textfield-icon" :name="leftIcon" />
                </span>
                <input 
                    class="jd-textfield" 
                    :type="type"
                    v-bind="$attrs"
                    :disabled="disabled"
                    :value="modelValue"
                    :placeholder="placeholder"
                    @input="input"
                    @focus="focus = true"
                    @blur="focus = false"
                />
                <span v-if="rightIcon" class="jd-textfield-icon-wrapper">
                    <jd-icon class="jd-textfield-icon" :name="rightIcon" />
                </span>
            </div>
            <div v-if="suffix" class="jd-textfield-suffix">
                {{ suffix }}
            </div>
        </div>
        <span v-if="message" :class="['jd-textfield-message',
                                    status && `jd-textfield-message--${status}`,
                                    disabled && 'jd-textfield-message--disabled']">

        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Colors } from '../../models/enums'
import JdIcon from '../icon'

export default defineComponent({
    name: 'jd-textfield',
    components: {
        JdIcon
    },
    inheritAttrs: false,
    props: {
        status:         {type: String,
                            validator: (value: Colors) => [
                                Colors.NEUTRAL,
                                Colors.PRIMARY,
                                Colors.DANGER,
                                Colors.WARNING,
                                Colors.SUCCESS,
                            ].includes(value)
                        },
        type:           {type: String,
                            default: 'text'
                        },
        placeholder:    {type: String},
        labelTop:       {type: String},
        message:        {type: String},
        prefix:         {type: String},
        suffix:         {type: String},
        leftIcon:       {type: String},
        rightIcon:      {type: String},
        disabled:       {type: Boolean},
        mask:            {type: Boolean},
        modelValue:     [String, Number],


    },
    setup(props, { emit }) {
        const focus = ref(false)

        function input(e: Event) {
            if(props.disabled)
                return
            emit('update:modelValue', (e.target as HTMLInputElement).value)
        }
        return { focus, input }
    }
})

</script>