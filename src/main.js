import { createApp } from 'vue'
import App from './App.vue'

// mitt usado para comunicação indireta de componentes
import mitt from 'mitt'

//criar instancia do pacote mitt
const emitter = mitt()

// iniciar a istancia do vue com base no componente app

const app = createApp(App)

//configurar a instacia do mitt como sendo uma prorpiedade global

app.config.globalProperties.emitter = emitter

// associar a estancia do vue com o elemento html de id app
app.mount('#app')