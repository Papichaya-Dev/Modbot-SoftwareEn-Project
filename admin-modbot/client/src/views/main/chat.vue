<template>
  <div class="container">
    <div class="tab">
      <ul class="nav nav-tabs btn-group-justified" role="tablist">
        <li class="nav-item">
          <router-link
            to="/chat/trainbot"
            class="nav-link active"
            data-toggle="tab"
            role="tab"
            >Training</router-link
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
  name: "Manage Chat",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>

<style>
#texttitle {
  color: rgb(0, 0, 0);
  font-weight: bolder;
}
#searchbtn{
  width: 50%;
}
#btnbusnum {
  width: 100%;
}
#select {
}
#tabletran{
  color: rgb(0, 0, 0);
}
#navtran{
  color: #000;
}
</style>