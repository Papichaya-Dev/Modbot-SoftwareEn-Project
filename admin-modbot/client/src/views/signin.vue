<template>
  <div>
    <div class="row text-center">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Sign In</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="signinUser">
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
            <router-link to="/register" class="card-link text-dark">Don't have an account?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Sign In",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    signinUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/welcome");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.form {
  color: black;
}
.card {
  width: 40%;
  border-radius: 0;
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
</style>