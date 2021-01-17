<template>
  <div class= "Landingpage">
    <h1 id="text">Welcome to</h1>
     <button id="buttonlogin" class="btn btn-light" v-if="!isLoggedIn">
          <router-link to="/login" >Login</router-link>
        </button>
        <button id="buttonregis" class="btn btn-light" v-if="!isLoggedIn">
          <router-link to="/register" >Register</router-link>
        </button>
        
        <img id="img" src="https://steamuserimages-a.akamaihd.net/ugc/991262566628548285/2A23B0BB92EC12348B1180161261CB2DD10AEFED/">
  </div>
</template>

<script>
export default {
  name: 'Landingpage',
  components: {
    
  }
}
</script>

<style>

</style>