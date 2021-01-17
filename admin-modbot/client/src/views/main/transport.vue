<template>
  <div class="container">
    <div class="tab">
      <ul class="nav nav-tabs btn-group-justified" role="tablist">
        <li class="nav-item">
          <router-link
            to="/transport/bus"
            class="nav-link active"
            data-toggle="tab"
            role="tab"
            >Bus</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/transport/van"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            >Van</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/transport/minibus"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            >Mini-Bus</router-link
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
  name: "Transportation",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>
  
<style>
#texttitle {
  color: rgb(0, 0, 0);
  font-size: 35px;
  font-weight: bolder;
  margin-left: -910px;
  margin-top: 20px;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
#btnadd{
  margin-left: 900px;
  margin-top: -70px;
}
<<<<<<< HEAD

#searchbtn{
  width: 300px;
}

=======
#searchbtn{
  width: 300px;
}
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
#btnbusnum {
   margin-left: 350px;
   margin-top: -40px;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
#select {
   margin-left: -930px;
   margin-top: 30px;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
#tabletran{
  color: rgb(0, 0, 0);
  margin-top: 30px;
  width: 1000px;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
#navtran{
  color: #000;;
  margin-left: 740px;
}
</style>