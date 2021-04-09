<template>
  <div>
    <canvas id="chart-user"></canvas>
<iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-modbotdb-nndps/embed/charts?id=b5f28550-907e-47b4-ab7c-9f87dd37c986&autoRefresh=10&theme=light"></iframe>  </div>
</template>

<script>
// import Chart from 'chart.js'
// import planetChartData from './planet-data.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
        // planetChartData: planetChartData
    }
  },
  mounted() {
    // const ctx = document.getElementById('planet-chart');
    // new Chart(ctx, this.planetChartData);
  }
}
</script>
<style scoped>
#chartUserResponse{
    margin-right: 500px;
}
</style>