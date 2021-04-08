<template>
  <div class="wrapper">
      <Errors v-if="error" :msg="error" />
      <Sidebar id="sidebar" v-if="isLoggedIn" :open="navOpen" />
      <!-- <div class="container" :class="isLoggedIn? 'card':''" style="width: 70%;"> -->
      <div :class="isLoggedIn ? 'main-panel':'panel'">
          <Navbar id="navbar" />
          <div class="content">
            <hr class="container pt-3" style="margin-top:-0.625rem">
            <div class="container-fluid">
              <router-view />
            </div>
          </div>
        </div>

  </div>

</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import Errors from "@/components/Errors";

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
  data() {
    return {
      minimized: false,
      mobileWidth: 767,
      navOpen: true,
    };
  },
  components: {
    Navbar,
    Sidebar,
    Errors,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapGetters(["error"]),
  },
};
</script>

<style >
@import "../public/stylesheet/style.css";
 /* .flex-container {
  text-align: center;
  justify-content: center;
}
.flex-container > div{
  width: 100%;
}
 #navbar {
  z-index: 100;
} 
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
} */
</style>

