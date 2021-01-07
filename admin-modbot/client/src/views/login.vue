  <template>
  <div >
    <div class="row" id="block">
      <div >
        <div id="text">
          <h4 id="text" >Login</h4>
        </div>
        <div class="card-body">
          <form id="slot" @submit.prevent="loginUser">
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
            <input type="submit" class="btn btn-primary" value="Login">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link id="textlogin" to="/register" >Need and account?</router-link>
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
#slot{
  border: 0;
	background: none;
	display: block;
	margin: 20px auto;
  margin-left: -50px;
	text-align: center;
	border: 2px solid #96b2c6;
	padding: 14px 10px;
	width: 375px;
	outline: none;
	color: white;
	border-radius: 24px;
	transition: 0.25s;
    margin-left:5px;
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
	background: rgba(46, 101, 128, 0.741);
	text-align: center;
	border-radius: 5%;
	font-family: 'Kanit', sans-serif;
}
#text{
  font-family: 'DM Serif Display', serif;
  color: white;
  margin-top: -10px;
  font-size: 40px;
  text-align: center;
  margin-right: 40px;
}
#textlogin{
  /* font-family: 'DM Serif Display', serif; */
  color: rgba(248, 248, 248, 0.707);
  margin-top: -10px;
  font-size: 15px;
  font-weight: bolder;
  text-align: center;
  margin-right: 40px;
}
#buttonlogin{
 font-family: 'DM Serif Display', serif;
 font-weight: bolder;
	border: 2px solid white;
	padding: 0.2rem;
	color: black;
	width: 180px;
	height: 60px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 300px;
	margin-top: 300px;
	letter-spacing: 0.1rem;
	transition: transform .2s;
	opacity: 0.8;
  cursor: pointer;
}
</style>