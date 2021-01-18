<template>
  <div class="container">
      <div class="container">
    <div class="tab">
      <ul class="nav nav-tabs btn-group-justified" role="tablist">
        <li class="nav-item">
          <router-link
            to="/locations/station"
            class="nav-link active"
            data-toggle="tab"
            role="tab"
            >Station</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/locations/locationmark"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            >Location Mark</router-link
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
  </div>
</template>

<script>
export default {
  name: "Location Details",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>

<style scoped>
</style>