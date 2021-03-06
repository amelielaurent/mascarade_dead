import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './style/global.scss';
import theme from './style/theme';
import App from './App.vue';
import {router} from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSocketIO from 'vue-socket.io';
import {BASE_API_URL} from "./utils/constant";


Vue.use(new VueSocketIO({
    debug: true,
    connection: BASE_API_URL,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}));

Vue.config.productionTip = false;
Vue.use(Vuetify, { theme });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
