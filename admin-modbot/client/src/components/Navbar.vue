<template>
  <nav id="nav" class="navbar navbar-expand-lg" > 
      <router-link class="navbar-brand" id="iconnav" to="/" ><i class="fas fa-user-shield" style="color:rgb(0, 105, 250)"></i> MOD<span>BOT</span></router-link>
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto text-left">
          <li class="nav-item active" v-if="!isLoggedIn">
          </li>
        </ul>
        <ul class="navbar-nav ml-auto text-left">
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/logout"
              @click.prevent="logoutUser"
              class="nav-link"
              v-if="isLoggedIn"
              ><i class="fas fa-power-off" ></i
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
  position: fixed;
  background-color: #252f3f;
  width: 100%;
  height: 70px;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0; 
}
.nav-link{
  color:#aaadb3;
}
#iconnav{
  color:#aaadb3;
  margin-top: 1px;
}
.nav-link:hover, .nav-link:focus{
  font-size: 18px;
  transition: 0.2s ease-in-out;
  color: rgb(67, 163, 147);
}
router-link {
  cursor: pointer;
}
.icon {
  cursor: pointer;
}
.navbar-brand {
  padding: 0% 2%;
  margin-top: -0.5rem;
}
.navbar-brand,.navbar-brand i {
  background: -webkit-linear-gradient(rgb(98, 0, 255), rgb(0, 255, 191));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 26px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 0.2rem;
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
  font-size: 26px;
  transition: 0.2s ease;
}
</style>