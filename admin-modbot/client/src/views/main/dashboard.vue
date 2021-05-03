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
                  <div class="stats" >
                     <router-link  to="/admin-profile">
                    <i class="material-icons">account_circle</i>
                    <button id="btncrete"
                type="submit"
                class="btn btn-light">Go to Admin Profile</button> 
                     </router-link>
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
                      <router-link  to="/question">
                    <i class="material-icons">
                      <span class="material-icons">schedule_send</span></i>
                    <button id="btncrete"
                type="submit"
                class="btn btn-light">Go to User Response</button> 
                     </router-link>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <chart-user id="chart"/>
    </div> 
  </div>
</template>

<script>
import axios from "axios";
import chartUser from './chartUserResponse.vue';

export default {
  name: "Dashboard",
   components: {
    chartUser
      
  },
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
    console.log(this.details.suggestion)
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
#chart{
  margin-left: -140px;
}
.router-link{
  color: black
}
</style>