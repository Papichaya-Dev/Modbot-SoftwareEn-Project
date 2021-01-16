<template>
  <div id="app">
    <div class="tab">
      <ul class="nav nav-tabs nav-fill">
        <li class="nav-item">
          <router-link to="/trainbot" class="nav-link active">Trainbot</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/responses" class="nav-link">Responses</router-link>
        </li>
      </ul>
    </div>
    <div class="showDetails">
      <div class="trainbot">
        <h1>####title####</h1>
        <button><router-link to="/trainbot">Training Here</router-link></button>
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
              <button><router-link to="/trainbot">eye</router-link></button>
            </td>
          </tr>
        </table>
      </div>
      <div class="res">
        <h1>####title####</h1>
        <button><router-link to="/response">Add Response</router-link></button>
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
              <button><router-link to="/response">eye</router-link></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-fill {
  width: 90%;
  margin-left: 150px;
}
.trainbot {
  margin-left: 150px;
}
.res {
  margin-left: 150px;
}
</style>