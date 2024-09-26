import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLoadScript from "vue-load-script-plus";
import {
  TablePlugin,
  DropdownPlugin,
  FormSelectPlugin,
  FormInputPlugin,
  PaginationPlugin,
} from "bootstrap-vue";
import VCalendar from 'v-calendar';


Vue.use(DropdownPlugin);
Vue.use(TablePlugin);
Vue.use(FormSelectPlugin);
Vue.use(VueLoadScript);
Vue.use(FormInputPlugin);
Vue.use(PaginationPlugin);
Vue.use(VCalendar, {});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
