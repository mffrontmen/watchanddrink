import Vue from 'vue'
import Main from './pages/Main'

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#app')
