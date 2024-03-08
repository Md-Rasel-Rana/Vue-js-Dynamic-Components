// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import SlotComp from './components/SlotComp.vue'

// const app = createApp(App)
// app.component('slot-comp', SlotComp)



// createApp(App).mount('#app')
import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import SlotComp from './components/SlotComp.vue'

const app = createApp(App)
app.component('slot-comp', SlotComp)
app.mount('#app')
                  

