<template>
  <nav class="navbar" :class="isLoggedin? 'navbar-inverse navbar-fixed-left':'navbar-expand-lg navbar-light bg-light'">
    <div class="container">
      <!-- split? -->
        <router-link class="navbar-brand" to="/">ModBot</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav mr-auto text-left">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">
                  <i class="fas fa-home"></i> Home
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav my-2 my-lg-0 text-left">
            <li class="nav-item">
              <router-link to="/signin" class="nav-link">Sign in</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
          </ul>
      <!-- split? -->
      <div class="checkbar" v-if="isLoggedin">
        <!-- toggler part -->
        <div id="sidebar">
          <ul class="navbar-nav mr-auto text-left">
            <li class="nav-item active">
              <router-link to="/question" class="nav-link"><i class="fas fa-question-circle"></i> Q&A 48 hours</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link"><i class="fas fa-chart-line"></i> Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/chat" class="nav-link"><i class="fas fa-comments"></i> Manage Chat</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/transport" class="nav-link"><i class="fas fa-shuttle-van"></i> Transportation</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/locations" class="nav-link"><i class="fas fa-map-marker-alt"></i> Locations Details</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/design" class="nav-link"><i class="fas fa-route"></i> Design Routes</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/signout"
                @click.prevent="signoutUser"
                class="nav-link"
                ><i class="fas fa-sign-out-alt"></i> Sign Out</router-link>
            </li>
          </ul>
        </div>
      </div>
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

<style scoped>
nav {
  padding: 1% 0%;
}
</style>
