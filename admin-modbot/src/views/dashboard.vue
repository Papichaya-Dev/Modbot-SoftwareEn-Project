<template>
  <div id="app">
      <div class="tab">
        <ul class="nav nav-tabs nav-fill">
          <li class="nav-item">
            <router-link to="/dashuser" class="nav-link active">Dashboard User</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashtime" class="nav-link">Dashboard Time</router-link>
          </li>
        </ul>
      </div>
      <div class="showDetails">
        <div class="dashuser">
          <div class="row justify-content-evenly">
            <div class="col-4">
             <img src="https://image.freepik.com/free-vector/public-city-transport-isometric-collection-with-isolated-images-private-cars-bikes-municipal-transport_1284-27276.jpg" class="img-fluid">
            </div>
            <div class="col-4">
              <img src="https://image.freepik.com/free-vector/city-transport-isometric-with-car-truck-bicycle-taxi-bus-motorbike_1284-27150.jpg" class="img-fluid">
            </div>
            
          </div>
          <div class="row">
            <div class="col align-self-end"><img src="https://image.freepik.com/free-vector/colorful-city-transport-collection_1284-36720.jpg" class="img-fluid"></div>
            
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

</style>