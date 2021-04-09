<template>
  <div>
    <div id="login" class="row text-center" >
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark" >
          <h4>Sign In</h4>
        </div>
        <div class="card-body">
          <form  id="slot" @submit.prevent="loginUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              >
            </div>
            <input type="submit" class="btn btn-dark" value="Login">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <!-- <router-link to="/register" class="card-link text-dark">Don't have an account?</router-link> -->
          </form>
        </div>
      </div>
    </div>
     <img id="img" src="https://miro.medium.com/max/1600/1*pdyqP9gq5S4KLky_ilbi1g.gif">
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      console.log(this.username, this.password)
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/question");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.form {
  color: black;
}
.card {
  width: 35%;
  border-radius: 0;
}
#login{
  margin-top: 50px;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
h2{
  padding: 2% 0%;
}
#img{
 width: 1200px;
 height: 110vh;
 margin-left: 100px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-top: -290px;
}
</style>