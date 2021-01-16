<template>
  <div id="app">
    <Navbar/>
    <br>
    <br>
    <div class="container">
      <Errors v-if="error" :msg="error"/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
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
  components: {
    Navbar,
    Errors,
  },
  computed: {
    ...mapGetters(["error"])
  },
  // data() {
  //   return {
  //   authen:authen
  //   }
  // }
};
</script>
<style>
.card {
  border-radius: 0px;
}
.btn {
  border-radius: 0px;
}
</style>


