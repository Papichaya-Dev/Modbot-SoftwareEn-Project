<template>
<<<<<<< HEAD:modbot-project/src/App.vue
<<<<<<< Updated upstream:modbot-project/src/App.vue
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/question">Q&A 48 hours</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/chat">Manage Chat</router-link> |
      <router-link to="/transport">Transportation</router-link> |
      <router-link to="/locations">Locations Details</router-link> |
      <router-link to="/design">Design Routes</router-link> |
      <router-link to="/">Sign Out</router-link>
    </div>
    <router-view />
>>>>>>> Stashed changes:admin-modbot/src/App.vue
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
>>>>>>> c59685e9b5e5b5aa5489a6383bda7660e34af745:line-chatbot/liff-vue/src/App.vue
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
