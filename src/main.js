import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as echarts from 'echarts'



Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
// Vue.component('v-chart',VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
