export const perfChartData = {
    type: "line",
    data: {
      labels: ["1 Janv 2020", "3 Janv 2020", "5 Janv 2020", "7 Janv 2020", "9 Janv 2020", "11 Janv 2020", "13 Janv 2020", "15 Janv 2020","17 Janv 2020", "19 Janv 2020", "21 Janv 2020", "23 Janv 2020", "25 Janv 2020", "27 Janv 2020", "29 Janv 2020", "31 Janv 2020"],
      datasets: [
        {
          label: "Indice",
          data: [100, 103, 106, 104, 101, 99, 95, 93, 96, 95, 94, 90, 88, 85, 81, 83],
          backgroundColor: null,
          borderColor: "#36495d",
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
          tension: 0, //straight
        },
        {
          label: "Fond",
          data: [100, 100, 101, 100, 99, 95, 89, 87, 90, 89, 88, 83, 80, 75, 71, 75],
          backgroundColor: null,
          borderColor: "#47b784",
          borderWidth: 2,
          fill: false, //no fill under line
          pointRadius: 0, //no point
          tension: 0, //straight
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      lineTension: 1,
      parsing: false,
      animation: false
    }
  };


  export default perfChartData;