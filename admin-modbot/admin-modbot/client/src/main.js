import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

createApp(App).use(store).use(router).use(Autocomplete).mount('#app')