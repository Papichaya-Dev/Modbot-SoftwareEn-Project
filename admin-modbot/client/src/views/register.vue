<template>
  <div>
    <div class="row" id="block2">
      <div >
        <div >
          <h4 id="text">Register</h4>
        </div>
        <div class="card-body">
          <form id="slot2"  @submit.prevent="registerUser">
            <div class="form-group">
              <!-- <label for="username">Username</label> -->
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
              <!-- <label for="name">Name</label> -->
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
              <!-- <label for="email">Email</label> -->
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
              <!-- <label for="password">Password</label> -->
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
              <!-- <label for="confirm_password">Confirm Password</label> -->
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
                v-model="confirm_password"
              />
            </div>
            <button class="btn btn-primary">Register</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link id="textregister" to="/login" class="card-link"
              >Already have an account?</router-link
            >
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

<style>
.card {
  width: 60%;
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
 margin-right: -150px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-bottom: -600px;
}
#slot2{
  border: 0;
	background: none;
	display: block;
  height: 380px;
	margin: 20px auto;
  margin-left: -70px;
	text-align: center;
	border: 2px solid #85c2eb;
	padding: 14px 10px;
	width: 420px;
	outline: none;
	color: white;
	border-radius: 24px;
	transition: 0.25s;
    margin-left:-10px;
    margin-top:-10px;
	:focus {
		width: 280px;
		border-color: #a6009b;
	}
}
#block2{
   width: 500px;
	padding: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
  height: 550px;
	transform: translate(-50%, -50%);
	background: rgba(46, 101, 128, 0.741);
	text-align: center;
	border-radius: 5%;
	font-family: 'Kanit', sans-serif;
  margin-top: 50px;
}
#text{
  font-family: 'DM Serif Display', serif;
  color: white;
  margin-top: -10px;
  font-size: 40px;
  text-align: center;
  margin-left: 50px;
}
#img{
 width: 1000px;
 height: 80vh;
 margin-left: -250px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-top: -100px;
}
#textregister{
  /* font-family: 'DM Serif Display', serif; */
  color: rgba(248, 248, 248, 0.707);
  margin-top: -10px;
  font-size: 15px;
  font-weight: bolder;
  text-align: center;
  margin-right: 40px;
}
</style>