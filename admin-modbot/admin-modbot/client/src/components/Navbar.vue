<template>
  <nav id="nav" class="navbar navbar-light bg-light navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/" v-if="!isLoggedIn"><i class="fas fa-user-shield" style="color:rgb(0, 105, 250)"></i> MOD<span>BOT</span></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="$emit('togglenav')"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
          <!-- <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li> -->
          <li class="nav-item">
            <router-link
              to="/logout"
              @click.prevent="logoutUser"
              class="nav-link"
              v-if="isLoggedIn"
              ><i class="fas fa-power-off"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      minimized: false,
      mobileWidth: 767,
      navOpen: true,
    };
  },
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
nav {
  padding: 1% 0%;
  display: fixed;
}
router-link {
  cursor: pointer;
}
.icon {
  cursor: pointer;
}
.navbar-brand,.navbar-brand i {
  background: -webkit-linear-gradient(rgb(98, 0, 255), rgb(0, 255, 191));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 0.1rem;
}
.navbar-brand span,.navbar-brand i {
  background: -webkit-linear-gradient(rgb(113, 238, 196), rgb(0, 183, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar-brand:hover, .navbar-brand:focus{
  background: -webkit-linear-gradient(rgb(4, 0, 255), rgb(255, 255, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  transition: 0.2s ease;
}
</style>
