<template>
  <div class="container">
    <div class="container-fluid">
      <div class="row">

        <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">security</i>
                  </div>
                  <p class="card-category">Total Admin Profile</p>
                  <h3 class="card-title">{{ username.length }} Admins</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">people_alt</i>
                  </div>
                  <p class="card-category">Suggestion and Problem</p>
                  <h3 class="card-title">{{ details.length }} Users</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">access_time</i> Last 2 Hours
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">people_alt</i>
                  </div>
                  <p class="card-category">Suggestion and Problem</p>
                  <h3 class="card-title">{{ details.length }} Users</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">access_time</i> Last 2 Hours
                  </div>
                </div>
              </div>
            </div> -->

      </div>
    </div> 
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      username: '',
      details: {
        suggestion: "",
      problem: "",
      }
    }
  },
  async mounted() {
    const resDash = await axios.get("api/dashboard/", {
      username: this.username,
    });
    this.username = resDash.data;

    const resQues = await axios.get("api/Question/", {
      suggestion: this.suggestion,
      problem: this.problem
    });
    this.details = resQues.data;
    console.log(this.details)
  },
};
</script>

<style scoped>
@import "../../../public/stylesheet/style.css";
.container {
  width: 100%;
  margin: auto;
}
.nav-item {
  border-radius: 10%;
  transition: 0.3s;
}
</style>