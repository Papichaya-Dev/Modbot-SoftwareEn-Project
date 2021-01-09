<template>
  <div id="app">
    <Navbar/>
    <div class="flex-container">
      <Errors v-if="error" :msg="error"/>
      <router-view/>
  </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";

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
.card {
  border-radius: 0%;
}
.btn {
  border-radius: 0%;
}
.flex-container {
  display: flex;
  flex-flow: column wrap; 
  align-content: flex-end; 
  padding-top: 3%;
}      
.flex-container > div { 
  width: 100%;
} 
</style>


