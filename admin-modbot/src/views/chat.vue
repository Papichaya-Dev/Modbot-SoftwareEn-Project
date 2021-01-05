<template>
  <div>
    <div class="tab">
      <ul class="nav nav-tabs nav-fill">
        <li class="nav-item">
          <router-link to="#" class="nav-link active">Trainbot</router-link>
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link">Responses</router-link>
        </li>
      </ul>
    </div>
    <div class="showDetails">
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
      <div class="res">
        <h1>####title####</h1>
        <button><router-link to="/res">Add Response</router-link></button>
        <p>Search</p>
        <input type="text" name="search" id="usersearch" />
        <table>
          <tr>
            <th>Parameter Messege</th>
            <th>See more</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <button><router-link to="/res">eye</router-link></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Manage Chat",
  created() {
    document.title = "ModBot | " + this.$options.name;
  }
};
</script>

<style>
</style>