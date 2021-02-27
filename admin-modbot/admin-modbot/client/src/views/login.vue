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
            this.$router.push("/dashboard");
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
  width: 50%;
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
 margin-left: -70px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 margin-top: -330px;
}
/* #slot{
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
} */
</style>