import Vue from 'vue'

import App from './App.vue'
//You want to call any js file here with path
//import './assets/js/style';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


