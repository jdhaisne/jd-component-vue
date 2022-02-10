import { App } from 'vue'
import DemoBox from './Jd-demoBox.vue'

DemoBox.install = (Vue: App) => {
    Vue.component(DemoBox.name, DemoBox)
}

export default DemoBox