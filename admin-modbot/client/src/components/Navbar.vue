<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/question">MODBOT-ADMIN</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li> -->
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
         <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/question" class="nav-link">Q / A 48 HR. |</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/dashboard" class="nav-link">Dashboard |</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/chat" class="nav-link">Manage Chat |</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/transport" class="nav-link">Transportation |</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/location" class="nav-link">Location Detail |</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/design" class="nav-link">Design route </router-link>
        </li>
        <li  class="nav-item" v-if="isLoggedIn">
          <a id="button" type="button" class="btn btn-outline-light" to="/logout"  @click.prevent="logoutUser">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style>
#nav {
  padding: 30px;
  height: 80px;
  background-color: rgb(195, 192, 235);
  background-image: url("https://i.gifer.com/JXjb.gif");
}
#app {
  font-family: 'Abril Fatface', cursive;
  font-family: 'Averia Gruesa Libre', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.1rem;
  font-size: 18px;
}
#button{
  margin-left: 10px;
  margin-top: -5px;
  font-size: 20px;
  border-radius: 15px;
}
</style>