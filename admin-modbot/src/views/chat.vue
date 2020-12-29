<template>
  <div class="container">
    <ul>
      <li><router-link>Trainbot</router-link></li>
      <li><router-link>Userpart</router-link></li>
    </ul>
  </div>
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
  <div class="userpart">
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
</template>

<script>
  export default {
    
  };
</script>

<style>
</style>