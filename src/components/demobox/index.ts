import { App } from 'vue'
import Demobox from './Jd-demobox.vue'

Demobox.install = (Vue: App) => {
    Vue.component(Demobox.name, Demobox)
}

export default Demobox