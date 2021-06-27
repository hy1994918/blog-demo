import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
const app = createApp(App)
installElementPlus(app)
app.use(VXETable)
app.use(router).mount('#app')