import { App } from 'vue'
import Radio from './Jd-radio.vue'

Radio.install = (Vue: App) => {
    Vue.component(Radio.name, Radio)
}

export default Radio