import axios from "axios";
import router from "../router";

const state = {
  token: localStorage.getItem("token") || "",
  user: "",
  status: "",
  error: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  error: (state) => state.error,
};

const actions = {
  async login({ commit }, user) {
    commit("auth_request", user.username);
    try {
      let res = await axios.post("/api/users/login", user);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        // Store the token into the localstorage
        localStorage.setItem("token", token);
        // Set the axios defaults
        axios.defaults.headers.common["Auth"] = token;
        commit("auth_success", token, user.username);
        console.log(res);
        commit("user_profile", user.username);
      }
      return res;
    } catch (err) {
      commit("auth_error", err);
    }
  },
  // Register User
  async register({ commit }, userData) {
    try {
      commit("register_request");
      console.log(userData);
      let res = await axios.post("/api/users/register", userData);
      if (res.data.success !== undefined) {
        commit("register_success");
      }
      return res;
    } catch (err) {
      commit("register_error", err);
    }
  },
  // Get the user Profile
  async getProfile({ commit }) {
    commit("profile_request");
    let res = await axios.get("/api/users/");
    // console.log(res.data)
    commit("user_profile", res.data.user);
    return res;
  },
  // Logout the user
  async logout({ commit }) {
    await localStorage.removeItem("token");
    commit("logout");
    delete axios.defaults.headers.common["Auth"];
    router.push("/login");
    return;
  },
};

const mutations = {
  auth_request(state, user) {
    state.error = null;
    state.status = "loading";
    state.user = user;
  },
  auth_success(state, token, user) {
    state.user = user;
    state.token = token;
    state.status = "success";
    state.error = null;
  },
  auth_error(state, err) {
    state.error = err.response.data.msg;
  },
  register_request(state) {
    state.error = null;
    state.status = "loading";
  },
  register_success(state) {
    state.error = null;
    state.status = "success";
  },
  register_error(state, err) {
    state.error = err.response.data.msg;
  },
  logout(state) {
    state.error = null;
    state.status = "";
    state.token = "";
    state.user = null;
  },
  profile_request(state) {
    state.status = "loading";
  },
  user_profile(state, user) {
    state.user = user;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
