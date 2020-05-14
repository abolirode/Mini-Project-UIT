import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResources from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResources)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
