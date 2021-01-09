<template>
  <div class= "home">
    <!-- <h1 id="text">Welcome to</h1>
     <button id="buttonlogin" class="btn btn-light" v-if="!isLoggedIn">
          <router-link to="/login" >Login</router-link>
        </button>
        <button id="buttonregis" class="btn btn-light" v-if="!isLoggedIn">
          <router-link to="/register" >Register</router-link>
        </button> -->
        <img id="img" src="https://image.freepik.com/free-vector/public-city-transport-app-illustration-flat-cartoon-tiny-couple-people-using-smartphone-with-city-map-navigation-bus-ride_121223-643.jpg">
        <!-- <img id="img" src="https://steamuserimages-a.akamaihd.net/ugc/991262566628548285/2A23B0BB92EC12348B1180161261CB2DD10AEFED/"> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>

<style>

#text {
  font-family: 'DM Serif Display', serif;
  color: white;
  margin-top: -50px;
}
#buttonlogin{
 font-family: 'DM Serif Display', serif;
 font-weight: bolder;
	border: 2px solid white;
	padding: 0.2rem;
	color: black;
	width: 180px;
	height: 60px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 300px;
	margin-top: 300px;
	letter-spacing: 0.1rem;
	transition: transform .2s;
	opacity: 0.8;
  cursor: pointer;
}

#buttonregis{
 font-family: 'DM Serif Display', serif;
	border: 2px solid white;
	padding: 0.2rem;
	color: black;
	width: 180px;
	height: 60px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 550px;
	margin-top: -60px;
	letter-spacing: 0.1rem;
	transition: transform .2s;
	opacity: 0.8;
  cursor: pointer;
   font-weight: bolder;

}

#img{
 width: 800px;
 height: 90vh;
 margin-left: 50px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-top: -70px;
}
</style>