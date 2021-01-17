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
        <li class="nav-item">
          <router-link
            to="/chat/responses"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            >Responses</router-link
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
<<<<<<< HEAD

#btnbusnum {
  width: 100%;
}

#select {
}

#tabletran{
  color: rgb(0, 0, 0);
}

=======
#btnbusnum {
  width: 100%;
}
#select {
}
#tabletran{
  color: rgb(0, 0, 0);
}
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
#navtran{
  color: #000;
}
</style>