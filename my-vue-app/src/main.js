import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue  from 'primevue/config'
import './components/Styles/Shared.css'

import 'primevue/resources/themes/saga-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';     
const app = createApp(App)

app.use(PrimeVue).use(router).mount('#app')


