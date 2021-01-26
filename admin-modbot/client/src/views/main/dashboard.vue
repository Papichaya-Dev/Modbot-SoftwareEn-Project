<template>
  <div class="container">
    <div class="tab">
      <ul class="nav nav-tabs btn-group-justified" role="tablist">
        <li class="nav-item">
          <router-link
            to="/dashboard/user"
            class="nav-link active"
            data-toggle="tab"
            role="tab"
            >Dashboard User</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/dashboard/timing"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            >Dashboard Time</router-link
          >
        </li>
      </ul>
    </div>
    <div class="showDetails">
      <div class="container">
        <router-view></router-view>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: auto;
}
.nav-item {
  border-radius: 10%;
  transition: 0.3s;
}
</style>