<template>
  <!-- <transition name="show">
  <div class="wrapper">
    <div class="sidebar" v-if="open">
      <router-link class="navbar-brand" to="/"><i class="fas fa-user-shield" style="color:rgb(0, 105, 250)"></i> MOD<span>BOT</span></router-link>
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item sidebar-element">
          <router-link to="/question" class="nav-link">
            <i class="fas fa-question-circle fa-lg"></i><span class="link-text">&nbsp;&nbsp;&nbsp; User Response</span>
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
          <router-link to="/design/jointstation" class="nav-link"
            ><i class="fas fa-road fa-lg"></i><span class="link-text">&nbsp;&nbsp; Joint Stations</span></router-link
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
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
              <i class="material-icons">dashboard</i>
              <p class="link-text">Dashboard</p>
            </router-link>
          </li>
          <hr style="width:80%">
          <li class="header-menu">
            <p style="margin-left:1.5rem">Interface</p>
          </li>
          <li class="nav-item">
            <router-link to="/notifications" class="nav-link">
              <i class="material-icons">notifications</i>
              <p class="link-text">Notification</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin-profile" class="nav-link">
              <i class="material-icons">switch_account</i>
              <p class="link-text">Admin Profile</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/question" class="nav-link">
              <i class="material-icons">forum</i>
              <p class="link-text">User Response</p>
            </router-link>
          </li>
          <hr style="width:80%">
          <li class="header-menu">
            <p style="margin-left:1.5rem">Add-ons</p>
          </li>
          <li class="nav-item">
            <router-link to="/chat/trainbot" class="nav-link">
              <i class="material-icons">spellcheck</i>
              <p class="link-text">Keyword Table</p>
            </router-link>
          </li>
          <li class="nav-item">
            <!-- <button onClick="" class=""></button> -->
            <router-link to="/transport/bus" class="nav-link one-drop">
              <i class="material-icons">commute</i>
              <p class="link-text">Transportaion Table</p>
            </router-link>
              <ul class="submenu">
                <li>
                  <router-link to="/transport/bus" class="nav-link">
                    <p class="link-text">Bus</p>
                  </router-link>
                </li>
                      <!-- <li>
                        <router-link to="/transport/van" class="nav-link">
                          <span class="link-text">Van</span>
                        </router-link>
                      </li> -->
                <li>
                  <router-link to="/transport/minibus" class="nav-link">
                    <p class="link-text">Mini-Bus</p>
                  </router-link>
                </li>
              </ul>
          </li>
                <li class="nav-item">
                  <router-link to="/locations/station" class="nav-link">
                    <i class="material-icons">explore</i>
                    <p class="link-text">Locations Table</p>
                  </router-link>
                    <ul class="sidebar-submenu">
                      <li>
                        <router-link to="/locations/station" class="nav-link">
                          <p class="link-text">Bus Stop / Station</p>
                        </router-link>
                      </li>
                    </ul>
                </li>
                <li class="nav-item">
                  <router-link to="/design/jointstation" class="nav-link">
                    <i class="material-icons">account_tree</i>
                  <p class="link-text">Joint Stations</p>
                  </router-link>
                </li>
        </ul>
      </div>
    </div>
</template> 

<script>
// import { SidebarMenu } from 'vue-sidebar-menu'
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["open"],
  data() {
    return {
      clicked: false
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  list-style-position: outside;
}
</style>