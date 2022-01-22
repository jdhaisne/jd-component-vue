import Button from './components/button'

import './styles/index.scss'
import { App } from 'vue'

const components = {
    Button,
}

function install(Vue: App) {
    for(const component in components) {
        // @ts-expect-error
        Vue.component(components[component].name, components[component])
    }
}

export default { install }

export { default as button } from './components/button'