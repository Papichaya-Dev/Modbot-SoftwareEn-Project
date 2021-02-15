<template>
  <div id="app">
    <Navbar id="navbar" />
    <div class="flex-container">
      <Errors v-if="error" :msg="error" />
      <Sidebar id="sidebar" v-if="isLoggedIn" :open="navOpen" />
      <div class="container" :class="isLoggedIn? 'card':''" style="width: 70%;">
        <router-view
          class="card-body"
          :id="isLoggedIn ? 'page-wrap' : 'page'"
        />
      </div>
      <!-- <TheTopbar @togglenav="navOpen = !navOpen" />
      <TheSidebar :open="navOpen" /> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";
// import TheTopbar from './components/TheTopbar'
// import TheSidebar from './components/TheSidebar'

import Sidebar from "@/components/sidebar";

// console.log(window.localStorage.getItem("token"))
let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://localhost:5000';
// let authen = false
// let check = window.localStorage.getItem("token")
// if (window.localStorage.getItem("token")) {
//   authen = true 
// } else {
//   authen = false
// } 
export default {
  components: {
    Navbar,
    Sidebar,
    Errors,
    // TheTopbar,
    // TheSidebar
  },
  computed: {
    ...mapGetters(["error"]),
    ...mapGetters(["isLoggedIn"])
  },
    data() {
    return {
      minimized: false,
      mobileWidth: 767,
      navOpen: true,
    };
  },
};
</script>

<style >
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
}
.flex-container {
  text-align: center;
  justify-content: center;
}
.flex-container > div{
  width: 100%;
}
/* #navbar {
  z-index: 100;
} */
#sidebar {
  width: 20rem;
  height: 90vh;
  float: left;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: -3%;
}
.card {
  padding: 2%;
  margin: auto;  
  margin-top: 3%;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}
.btn {
  border-radius: 0%;
}
#page {
  padding-top: 3%;
}
</style>

