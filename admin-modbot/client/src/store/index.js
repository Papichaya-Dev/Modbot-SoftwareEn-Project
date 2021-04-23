import { createStore } from "vuex";
import Auth from "../Warehouse/Auth";
import createPersistedState from "vuex-persistedstate";

  export default createStore({
    modules: {
      Auth,
    },
    state: {},
    mutations: {},
    actions: {},
    plugins: [createPersistedState()],
  });