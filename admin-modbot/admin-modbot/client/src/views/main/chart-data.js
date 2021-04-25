export const planetChartData = {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"],
      datasets: [
        {
          label: "Number of Suggestions",
          data: [0, 4, 0, 0, 0, 0,0 , 0,0,0,0,0],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "Number of Problems",
          data: [0, 14, 0, 0,0, 0, 0, 0],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;