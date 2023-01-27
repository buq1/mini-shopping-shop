import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ValidationProvider } from 'vee-validate';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.component('ValidationProvider',ValidationProvider);
Vue.use(ElementUI);

new Vue({
  el:'#app',
  router,
  store,
  render: h =>h(App)
}).$mount('#app')
