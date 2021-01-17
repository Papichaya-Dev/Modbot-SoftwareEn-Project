<template>
  <div id="app">
    <Navbar/>
    <div class="" :class="isLoggedin? 'container':'container-fluid'">
      <Errors v-if="error" :msg="error"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/navbar";
import Errors from "./components/Errors";

let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://localhost:5000';

export default {
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["error"])
  }
};
</script>

<style scoped>
#app {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.05rem;
}
.container {
  margin: auto;
}
</style>
