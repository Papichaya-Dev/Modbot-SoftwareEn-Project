<template>
  <div>
    <div class="row text-center">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                v-model="name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                class="form-control"
              />
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
              />
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                v-model="confirm_password"
              />
            </div>
            <button class="btn btn-dark">Register</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link text-dark"
              >Already have an account?</router-link
            >
          </form>
        </div>
      </div>
    </div>
      <!-- <img id="img" src="https://miro.medium.com/max/1600/1*pdyqP9gq5S4KLky_ilbi1g.gif"> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
      };
      this.register(user).then((res) => {
        if (res.data.success) {
          this.$router.push("login");
        }
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
#img{
 width: 1200px;
 height: 110vh;
 margin-left: 10px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-top: -575px;
}
#slot{
  border: 0;
	background: none;
	display: block;
	margin: 20px auto;
  margin-left: -50px;
	text-align: center;
	border: 2px solid #0000005c;
	padding: 14px 10px;
	width: 375px;
	outline: none;
	color: white;
	border-radius: 24px;
	transition: 0.25s;
    margin-left:20px;
	:focus {
		width: 280px;
		border-color: #a6009b;
	}
}
#block{
  width: 500px;
	padding: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.163);
	text-align: center;
	border-radius: 5%;
	font-family: 'Kanit', sans-serif;
}
</style>