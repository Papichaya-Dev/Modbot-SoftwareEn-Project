<template>
  <div class="trainbot">
    <h1>####title####</h1>
    <button><router-link to="/trbot">Training Here</router-link></button>
    <p>Search</p>
    <input type="text" name="search" id="trsearch" />
    <table>
      <tr>
        <th>Parameter Messege</th>
        <th>See more</th>
      </tr>
      <tr>
        <td>1</td>
        <td>
          <button><router-link to="/trbot">eye</router-link></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Trainbot",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>

<style>

</style>