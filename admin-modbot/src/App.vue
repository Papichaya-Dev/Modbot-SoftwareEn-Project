<template>
  <div id="app">
      <Navbar/>
    
    <div class="container">
      <Errors v-if="error" :msg="error"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/navbar";
import Errors from "./components/Errors";
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.card {
  border-radius: 0px;
}
.btn {
  border-radius: 0px;
}
</style>
