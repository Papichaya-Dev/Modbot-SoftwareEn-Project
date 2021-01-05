<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #e3f2fd"
  >
    <router-link class="navbar-brand" to="/">ModBot</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <div v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link to="/question" class="nav-link">Q&A 48 hours</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chat" class="nav-link">Manage Chat</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/transport" class="nav-link">Transportation</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/locations" class="nav-link">Locations Details</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/design" class="nav-link">Design Routes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signout" @click.prevent="signoutUser" class="nav-link">Sign Out</router-link>
          </li>
        </div>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["signout"]),
    logoutUser() {
      this.signout();
    },
  },
};
</script>

<style>
</style>
