import { App } from 'vue'
import Icon from './Jd-icon.vue'

Icon.install = (Vue: App) => {
    Vue.component(Icon.name, Icon)
}

export default Icon