import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store, { resolveCreatedFunction } from './store'

Vue.config.productionTip = false

new Vue({
  created () {
    resolveCreatedFunction()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
