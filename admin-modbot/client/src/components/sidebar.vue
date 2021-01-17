<template>
  <transition name="show">
    <div class="sidebar navbar-light bg-light" v-if="open">
      <router-link class="navbar-brand" to="/"><i class="fas fa-user-shield" style="color:rgb(0, 105, 250)"></i> MOD<span>BOT</span></router-link>
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item sidebar-element">
          <router-link to="/question" class="nav-link">
            <i class="fas fa-question-circle fa-lg"></i>&nbsp;&nbsp; Q&A
            48 hours
          </router-link>
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/dashboard/user" class="nav-link">
            <i class="fas fa-chart-line fa-lg"></i>&nbsp;&nbsp; Dashboard
          </router-link>
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/chat/trainbot" class="nav-link"
            ><i class="fas fa-comments fa-lg"></i>&nbsp;&nbsp; Manage
            Chat</router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/transport/bus" class="nav-link"
            ><i class="fas fa-bus fa-lg"></i>&nbsp;&nbsp;
            Transportation</router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/locations/station" class="nav-link"
            ><i class="fas fa-map-marker-alt fa-lg"></i>&nbsp;&nbsp; Locations
            Details</router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/design" class="nav-link"
            ><i class="fas fa-road fa-lg"></i>&nbsp;&nbsp; Design
            Routes</router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/logout" @click.prevent="logoutUser" class="nav-link"
            ><i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp; Sign
            Out</router-link
          >
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["open"],
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
.sidebar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 15rem;
  height: calc(100vh - 50px);
  z-index: 1000;
  .sidebar-element {
    display: flex;
    justify-content: left;
    padding-left: 4.5rem;
    padding-top: 2.5rem;
    width: 15rem;
    height: 4rem;
    margin: auto;
    margin-bottom: 1rem;
    cursor: pointer;
  }
}
.show {
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active,
  &-leave-active {
    transition: all 500ms;
  }
}
.nav-link:hover, .nav-link:focus{
  font-size: 18px;
  transition: 0.2s ease-in-out;
}
.navbar-brand {
  padding: 0% 2%;
  margin-top: -2rem;
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