import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from '@/router'
import store from '@/store/store'
import '@/assets/tailwind.css'

import {
  Card,
  CardContainer,
  LeftBar,
  LeftBarItem,
  Switch,
  Button,
  LineText,
  LineTextGroup
} from '@/components/hex-ui'
Vue.use(Card)
Vue.use(CardContainer)
Vue.use(LeftBar)
Vue.use(LeftBarItem)
Vue.use(Switch)
Vue.use(Button)
Vue.use(LineText)
Vue.use(LineTextGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
