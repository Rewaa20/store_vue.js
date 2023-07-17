import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var app = createApp(App).use(store).use(router)
app.config.globalProperties.$filters = {
    PWD(price){
       return '$' + price ;
    }
}
app.mount('#app')