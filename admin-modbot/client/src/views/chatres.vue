<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>