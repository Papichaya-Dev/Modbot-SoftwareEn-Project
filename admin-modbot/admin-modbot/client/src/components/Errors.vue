<template>
  <div id="texterror" class="alert alert-danger">{{ msg }}</div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style scoped>
.alert {
  border-radius: 0px;
}
.alert-danger {
  background:  rgba(255, 0, 0, 0.687);
  color: #fff;
  margin-top: 50px;
  width: 300px;
  margin-left: 600px;
}
</style>