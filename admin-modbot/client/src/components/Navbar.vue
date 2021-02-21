<template>
  <nav id="nav" class="navbar navbar-expand-lg " :class="{ 'navbar--hidden': !showNavbar }" > 
     <router-link class="navbar-brand" 
     v-if="isLoggedIn" to="/">
     <i class="fas fa-user-shield" style="color:rgb(0, 105, 250)"></i> 
     MOD<span>BOT</span></router-link>

        <nav role="navigation" class="nav-res" >
          <div class="logo" style="position:relative; top:15px; left:1px;">
          <router-link class="navbar-brand " 
            v-if="isLoggedIn" to="/" >
            <i class="fas fa-user-shield" style="color:rgb(0, 105, 250);"></i> 
            MOD<span>BOT</span></router-link>
          </div>
          <div id="menuToggle">
            <!--
            A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it.
            -->          
            <input type="checkbox" />           
            <!--
            Some spans to act as a hamburger.           
            They are acting like a real hamburger,
            not that McDonalds stuff.
            -->
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>          
            <!--
            Too bad the menu has to be inside of the button
            but hey, it's pure CSS magic.
            -->
            
            <ul id="menu">
              <div class="wrapper">
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
              </div>
            </ul>
          </div>
        </nav>


    <div class="container">
        <router-link class="navbar-brand" to="/" 
        v-if="!isLoggedIn "><i class="fas fa-user-shield" style="color:rgb(0, 105, 250) "></i> 
        MOD<span>BOT</span></router-link>

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
        <span class="navbar-toggler-icon" style="color:#aaadb3"></span> 
      </button> 

    

        <li class="nav-item " >
          <router-link to="/logout" 
          @click.prevent="logoutUser"
          v-if="isLoggedIn" 
          class="nav-link">
          <i class="fas fa-sign-out-alt fa-lg"></i><span class="link-text">&nbsp;&nbsp; Sign
          Out</span></router-link>
        </li>
          <!-- <li class="nav-item">
            <router-link
              to="/logout"
              @click.prevent="logoutUser"
              class="nav-link"
              v-if="isLoggedIn"
              ><i class="fas fa-power-off" ></i
            ></router-link>
          </li> -->
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
    onScroll () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    this.showNavbar = currentScrollPosition < this.lastScrollPosition
    this.lastScrollPosition = currentScrollPosition
  }
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
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
nav {
  // padding: 1% 0%;
  // display: fixed;
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
@media (min-width: 1000px) {
  
  .nav-res{
    display: none;
  }
  .navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
}
@media (max-width: 1000px) {
 
  #menuToggle
{
  display: block;
  position: relative;
  top: 4px;
  left: 50px; 
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
#menuToggle a
{
  text-decoration: none;
  color: #aaadb3;
  transition: color 0.3s ease;
 
}
#menuToggle a:hover
{
  font-size: 18px;
  transition: 0.2s ease-in-out;
  color: rgb(67, 163, 147);
#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -15px;
  left: 150px;
  
  
  cursor: pointer;
  
  opacity: 0; /* hide this 0*/
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}
.hamburger
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #fffefe;
  border-radius: 3px;
  top: -15px;
  left: 155px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}
/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #fff9f9;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}
#menu
{
  width: 300px;
  margin: 10px 0 0 -50px;
  padding: 50px;
  background-color:#252f3f; 
  height:1000px;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  flex-direction: column;
}
#menu li
{
  padding: 20px 0;
}
/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}
}}
</style>