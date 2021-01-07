<template>
  <div class= "home">
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  }
}
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
 width: 1570px;
 height: 110vh;
 margin-left: -250px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-top: -410px;
}
</style>