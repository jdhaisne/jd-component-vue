import { App } from 'vue'
import Select from './Jd-select.vue'

Select.install = (Vue: App) => {
    Vue.component(Select.name, Select)
}

export default Select