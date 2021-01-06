<template>
  <div class="container">
    <ul id ="navdash" class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="/station">STATION</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/locationmark">LOCATION MARK</a>
  </li>
    </ul>
    
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

<style>

#navdash {
  color: rgb(0, 0, 0);
}
</style>