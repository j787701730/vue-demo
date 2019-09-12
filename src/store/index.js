import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getCount: function(state) {
      return state.count;
    }
  },
  mutations: {
    // actions改值
    add(state, n) {
      state.count = state.count + n;
    },
    reduction(state) {
      // 直接改值
      state.count = state.count - 1;
    }
  },
  actions: {
    addFun(context, n) {
      context.commit("add", n);
    }
  }
});

export default store;
