import Button from './components/button'
import Checkbox from './components/checkbox'
import DemoBox from './components/demobox'
import Icon from './components/icon'
import Radio from './components/radio'
import Select from './components/select'
import TextField from './components/textField'

import './styles/index.scss'
import { App } from 'vue'

const components = {
    Button,
    Checkbox,
    DemoBox,
    Icon,
    Radio,
    Select,
    TextField,
}

function install(Vue: App) {
    for(const component in components) {
        // @ts-expect-error
        Vue.component(components[component].name, components[component])
    }
}

export default { install }

export { default as button } from './components/button'