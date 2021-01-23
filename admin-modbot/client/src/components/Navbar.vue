<template>

  <nav id="nav" class="navbar navbar-light navbar-expand-lg"> 
    <div class="container">
      <router-link class="navbar-brand" to="/" v-if="!isLoggedIn"><i class="fas fa-user-shield" style="color:rgb(254, 187, 9)"></i><b>MOD<span>BOT</span></b></router-link>
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
            <router-link to="/login" class="nav-link"><b>Sign in</b></router-link>
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
  //background: -webkit-linear-gradient(rgb(113, 238, 196), rgb(254, 220, 69 ));
  background-color: #02c9ae ;

} 

router-link {
  cursor: pointer;
}
.icon {
  cursor: pointer;
}
.navbar navbar-light bg-light navbar-expand-lg{
  color: rgb(199, 43, 43);
}
</style>