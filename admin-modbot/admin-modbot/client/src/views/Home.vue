<template>
<div class="container">
</div>
</template>

<script>
export default {
  name: "Home",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>

<style>

#text {
  font-family: 'DM Serif Display', serif;
  color: white;
  margin-top: -50px;
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

#buttonregis{
 font-family: 'DM Serif Display', serif;
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
	margin-left: 550px;
	margin-top: -60px;
	letter-spacing: 0.1rem;
	transition: transform .2s;
	opacity: 0.8;
  cursor: pointer;
   font-weight: bolder;

}
</style>