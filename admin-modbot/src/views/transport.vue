<template>
  <div id="app">
      <div class="tab">
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <router-link to="/bus" class="nav-link active">Bus Route</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/van" class="nav-link">Van Route</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/minibus" class="nav-link">Mini-Bus Route</router-link>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="showDetails">
          <div class="bus">
            <form class="row justify-content-between">
              <div class="col-4">
                <label class="visually-hidden">Add Bus Route</label>
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary mb-3">Back to Show</button>
              </div>
            </form>
            <div class="container-sm">
              <div class="mb-3 row">
                <label for="inputText" class="col-sm-4 col-form-label">Bus Number</label>
                <div class="col-sm-8">
                  <input type="140" class="form-control" id="inputText">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputText" class="col-sm-4 col-form-label">Starting Point</label>
                <div class="col-sm-8">
                  <input type="140" class="form-control" id="inputText">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputText" class="col-sm-4 col-form-label">Destination Point</label>
                <div class="col-sm-8">
                  <input type="140" class="form-control" id="inputText">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputText" class="col-sm-4 col-form-label">Number of Station</label>
                <select class="col-form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
  
<style>
  .showDetails {
    line-height: 100pt
  }
  .visually-hidden {
    font-family: 'Ubuntu', sans-serif;
    font-size: 25pt;
    text-align: left;
  }
  .col-form-label,.col-form-select {
    font-family: 'Ubuntu', sans-serif;
    font-size: 15pt;
    text-align: left;
  }
</style>