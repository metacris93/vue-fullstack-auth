import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Messages from "./components/Messages.vue";
import Message from "./components/Message.vue";
import NewMessage from "./components/NewMessage.vue";

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Messages,
  },
  {
    path: "/NewMessage",
    component: NewMessage
  },
  {
    path: "/Messages",
    component: Messages
  },
  {
    path: "/Message/:id",
    component: Message
  }
];
const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
