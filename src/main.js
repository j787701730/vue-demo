import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";

import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueRouter);
import Home from "./components/home.vue";
import Ranking from "./components/ranking.vue";
import Prize from "./components/prize.vue";
import Join from "./components/join.vue";
import Complaint from "./components/complaint.vue";
//创建路由对象并配置路由规则
let router = new VueRouter({
  routes: [
    //一个个对象
    { path: "/", component: Home },
    { path: "/ranking", name: "ranking", component: Ranking },
    { path: "/prize", name: "prize", component: Prize },
    { path: "/join", name: "join", component: Join },
    { path: "/complaint", name: "complaint", component: Complaint }
  ]
});

new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount("#app");
