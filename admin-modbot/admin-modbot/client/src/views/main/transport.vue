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
  name: "Transportation",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>
  
<style>
@import "../../../public/stylesheet/style.css";
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

#tabletran{
  color: rgb(0, 0, 0);
}

#navtran{
  color: #000;
}
</style>