import { App } from 'vue'
import Checkbox from './Jd-checkbox.vue'

Checkbox.install = (Vue: App) => {
    Vue.component(Checkbox.name, Checkbox)
}

export default Checkbox