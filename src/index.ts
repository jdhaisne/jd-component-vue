import Button from './components/button'
import Checkbox from './components/checkbox'
import Icon from './components/icon'

import './styles/index.scss'
import { App } from 'vue'

const components = {
    Button,
    Checkbox,
    Icon,
}

function install(Vue: App) {
    for(const component in components) {
        // @ts-expect-error
        Vue.component(components[component].name, components[component])
    }
}

export default { install }

export { default as button } from './components/button'