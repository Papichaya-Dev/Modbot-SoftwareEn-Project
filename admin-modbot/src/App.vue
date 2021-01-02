<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/question">Q&A 48 hours</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/chat">Manage Chat</router-link> |
      <router-link to="/transport">Transportation</router-link> |
      <router-link to="/locations">Locations Details</router-link> |
      <router-link to="/design">Design Routes</router-link> |
    </div>
     <button id="button" type="button" class="btn btn-outline-light">SIGN OUT</button>
      <img id="img" src="https://www.pinclipart.com/picdir/big/368-3682543_data-security-icon-emblem-clipart.png">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Abril Fatface', cursive;
  font-family: 'Averia Gruesa Libre', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.1rem;
  
}

#nav {
  padding: 30px;
  background-color: rgb(195, 192, 235);
  background-image: url("https://i.gifer.com/JXjb.gif");
}

#nav a {
  font-size: bold;
  color: #000000;
  font-size: 20.5px;
  margin-right: 5px;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

#button{
  margin-left: 1300px;
  margin-top: -120px;
  font-size: 20px;
  border-radius: 15px;
}

#img{
  margin-right:1350px ;
  width: 80px;
  margin-top: -165px;
  height: 60px;
}
</style>
