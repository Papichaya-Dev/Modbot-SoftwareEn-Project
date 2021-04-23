<template>
  <div class="container">
    <div class="showDetails">
      <div class="container">
        <router-view></router-view>
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
@import "../../../public/stylesheet/style.css";
</style>