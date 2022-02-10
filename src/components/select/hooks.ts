
import { onBeforeUpdate, ref, nextTick } from 'vue'
import { TEmit } from '../../types'
import { TSelect, TSelectProps} from './types';


export const useSelect = (props: TSelectProps, emit: TEmit): TSelect => {
    const indexFocusedOption = ref(-1)
    const optionsRefs = ref<HTMLElement[]>([])
    const selectListRef = ref<HTMLElement | undefined>(undefined)
    let selectedOptionIndex: number = -1
    const show = ref(false)

    onBeforeUpdate(() => {
        optionsRefs.value = []
    })

    const scrollToSelectedOption = () => {
        const selectedOption: HTMLElement | null = 
            optionsRefs.value[selectedOptionIndex]
        
        if (selectListRef.value !== undefined) {
            selectListRef.value.scrollTop = selectedOption?.offsetTop
        }
    }
    const setOpen = (state = false) => (show.value = state)
    const toggleDropdown = async () => {
        if (props.disabled) {
            setOpen(false)
            return
        } else if (show.value) {
            setOpen(false)
        } else {
            //unfocusOption()
            setOpen(true)
            await nextTick()
            if (props.modelValue)
                scrollToSelectedOption()
        }
    }

    return {
        indexFocusedOption,
        optionsRefs,
        show,
        setOpen,
        toggleDropdown,
    }
}