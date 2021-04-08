<template>
<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
  <div class="container">
    <div class="container-fluid">
      <div class="justify-content-start">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link  text-dark" href="javascript:;">
              <i class="material-icons">verified</i>
              <span class="navbar-brand">admin Lookpad</span> 
            </a>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link  text-dark" href="javascript:;">
              <router-link to="/">
                <span class="navbar-brand">Mod Bot | Website</span> 
              </router-link>
            </a>
          </li>
          <!-- your navbar here -->
        </ul>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="isLoggedIn" @click.prevent="logoutUser">
            <router-link to="/logout" class="nav-link">
              <i class="material-icons">logout</i> sign out
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link">
              <i class="material-icons">login</i> sign in
            </router-link>
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
    data() {
      return {
        // user: null,
        // logged_in: false,
        minimized: false,
        mobileWidth: 767,
        navOpen: true,
        
        showNavbar: true,
        lastScrollPosition: 0
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
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.onScroll)
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
    
  };
</script>

<style lang="scss" scoped>
</style>