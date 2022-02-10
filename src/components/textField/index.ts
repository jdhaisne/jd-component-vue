import { App } from 'vue'
import TextField from './Jd-textField.vue'

TextField.install = (Vue: App) => {
    Vue.component(TextField.name, TextField)
}

export default TextField