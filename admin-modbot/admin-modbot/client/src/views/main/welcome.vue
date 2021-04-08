<template>
  <div>
    <div class="card" v-if="user">
      <h2>Welcome to ModBot Admin</h2>
      <h4>You are {{ user.name.toUpperCase() }}!</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    document.title = "ModBot";
    this.getProfile();
  },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"])
  }
};
</script>

<style scoped>
@import "../../../public/stylesheet/style.css";
</style>