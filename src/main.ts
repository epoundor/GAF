import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';

import { router } from './router'

const app = createApp(App)

app.use(mdiVue, { icons: mdijs });
    
    app.component('Icon',)
    app.use(router).mount('#app')
