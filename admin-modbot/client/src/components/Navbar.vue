<template>
  <nav id="nav" class="navbar navbar-light bg-light" :class="isLoggedIn? 'navbar-inverse navbar-fixed-left':'navbar-expand-lg'" >
    <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="isLoggedIn? 'flex-container':'container'">
      <router-link class="navbar-brand" to="/" v-if="!isLoggedIn">ModBot</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        v-if="!isLoggedIn"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item active" v-if="!isLoggedIn">
          <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i> Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto text-left">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link">Sign in</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>


        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/question" class="nav-link">
            <i class="fas fa-question-circle"></i> Q&A 48 hours
          </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/dashboard" class="nav-link">
            <i class="fas fa-chart-line"></i> Dashboard
          </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/chat" class="nav-link"
            ><i class="fas fa-comments"></i> Manage Chat</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/transport" class="nav-link"
            ><i class="fas fa-bus"></i> Transportation</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/locations" class="nav-link"
            ><i class="fas fa-map-marker-alt"></i> Locations
            Details</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/design" class="nav-link"
            ><i class="fas fa-road"></i> Design Routes</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/logout" @click.prevent="logoutUser" class="nav-link"
            ><i class="fas fa-sign-out-alt"></i> Sign Out</router-link
          >
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
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },
  },
};
</script>

<style scoped>
nav {
  padding: 1% 0%;
}
.flex-container {
  display: flex;
  flex-flow: column wrap; 
  align-content:center;
  line-height: 3.5rem;
}      
.flex-container > div { 
  width: 100%;
} 
.navbar-fixed-left {
  width: 18%;
  position: fixed;
  border-radius: 0;
  height: 100%;
  font-size: 1.2rem;
}
.navbar-fixed-left .navbar-nav > li {
  float: none;  /* Cancel default li float: left */
  width: 100%;
}
</style>