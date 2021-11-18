import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.scss'

const app = createApp(App)

app.config.globalProperties.$filters = {
    capitalize(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}

app.mount('#app')
