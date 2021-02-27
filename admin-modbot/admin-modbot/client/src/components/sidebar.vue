<template>
  <!-- <transition name="show">
  <div class="wrapper">
    <div class="sidebar" v-if="open">
      <router-link class="navbar-brand" to="/"><i class="fas fa-user-shield" style="color:rgb(0, 105, 250)"></i> MOD<span>BOT</span></router-link>
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item sidebar-element">
          <router-link to="/question" class="nav-link">
            <i class="fas fa-question-circle fa-lg"></i><span class="link-text">&nbsp;&nbsp;&nbsp; Q&A
            48 hours</span>
          </router-link>
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/dashboard/user" class="nav-link">
            <i class="fas fa-chart-line fa-lg"></i><span class="link-text">&nbsp;&nbsp; Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/chat/trainbot" class="nav-link"
            ><i class="fas fa-comments fa-lg"></i><span class="link-text">&nbsp;&nbsp; Manage
            Chat</span></router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/transport/bus" class="nav-link"
            ><i class="fas fa-bus fa-lg"></i><span class="link-text">&nbsp;&nbsp;
            Transportation</span></router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/locations/station" class="nav-link"
            ><i class="fas fa-map-marker-alt fa-lg"></i><span class="link-text">&nbsp;&nbsp; Locations
            Details</span></router-link
          >
        </li>
        <li class="nav-item sidebar-element">
          <router-link to="/design" class="nav-link"
            ><i class="fas fa-road fa-lg"></i><span class="link-text">&nbsp;&nbsp; Design
            Routes</span></router-link
          >
        </li>  
       
         <li class="nav-item sidebar-element" >
          <router-link to="/logout" @click.prevent="logoutUser" class="nav-link"
            ><i class="fas fa-sign-out-alt fa-lg"></i><span class="link-text">&nbsp;&nbsp; Sign
            Out</span></router-link
          >
        </li>
      </ul>
    </div>
    </div>
  </transition> -->
  <div class="sidebar bg-light" data-color="purple" data-background-color="white">
      <!-- Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

      Tip 2: you can also add an image using data-image tag -->
  
      <div class="logo">
        <span class="simple-text logo-mini">
          Mod Bot
        </span>
        <span class="simple-text logo-normal">
          Admin Website
        </span>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active">
            <router-link to="/dashboard" class="nav-link">
              <i class="material-icons">dashboard</i>
              <span class="link-text">Dashboard</span>
            </router-link>
          </li>
          <br>
          <li class="header-menu">
            <span>Interface</span>
          </li>
          <li class="nav-item">
            <router-link to="/question" class="nav-link">
              <i class="material-icons">switch_account</i>
              <span class="link-text">Admin Profile</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/question" class="nav-link">
              <i class="material-icons">forum</i>
              <span class="link-text">User Response</span>
            </router-link>
          </li>
          <br>
          <li class="header-menu">
            <span>Add-ons</span>
          </li>
          <li class="nav-item">
            <router-link to="/transport/bus" class="nav-link">
              <i class="material-icons">table_chart</i>
              <span class="link-text">Table List</span>
            </router-link>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link to="/chat/training" class="nav-link">
                    <i class="material-icons">spellcheck</i>
                    <span class="link-text">Keyword Table</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/transport/bus" class="nav-link">
                    <i class="material-icons">commute</i>
                    <span class="link-text">Transportaion Table</span>
                  </router-link>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <router-link to="/transport/bus" class="nav-link">
                          <span class="link-text">Bus</span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/transport/van" class="nav-link">
                          <span class="link-text">Van</span>
                        </router-link>
                      </li> -->
                      <li>
                        <router-link to="/transport/minibus" class="nav-link">
                          <span class="link-text">Mini-Bus</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <router-link to="/locations/station" class="nav-link">
                    <i class="material-icons">explore</i>
                    <span class="link-text">Locations Table</span>
                  </router-link>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <router-link to="/locations/station" class="nav-link">
                          <span class="link-text">Bus Stop / Station</span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/locations/locationmark" class="nav-link">
                          <span class="link-text">Landmark</span>
                        </router-link>
                      </li> -->
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/question" class="nav-link">
              <i class="material-icons">notifications</i>
              <span class="link-text">Notification</span>
            </router-link>
          </li>
           <!-- your sidebar here  -->
        </ul>
      </div>
    </div>
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

</style>