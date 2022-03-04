


// const response = await fetch('http://localhost:4000/data');
// const data = await response.json();

// const date = [];
// const nav_1 = [];
// const nav_2 = [];

// for (let i = 0; i < 15; i++) date.push(data[i]['date']);
// for (let i = 0; i < 15; i++) nav_1.push(data[i]['nav']);
// for (let i = 15; i < 30; i++) nav_2.push(data[i]['nav']);



// // const data_1 = data.filter(function (i,n){
// //   return JSON.parse(data).fund_id==='FUND_1';
// // });

// // const data_2 = data.filter(function (i,n){
// //   return JSON.parse(data).fund_id==='FUND_2';
// // });

// // export const perfChartData = {
// //     type: "line",
// //     data: {
// //       labels: date,
// //       datasets: [
// //         {
// //           label: "Fund_1",
// //           data: nav_2,
// //           backgroundColor: null,
// //           borderColor: "#36495d",
// //           borderWidth: 2,
// //           fill: false,
// //           pointRadius: 0,
// //           tension: 0, //straight
// //         }
// //         // ,
// //         // {
// //         //   label: "Fund_2",
// //         //   data: nav_2,
// //         //   backgroundColor: null,
// //         //   borderColor: "#47b784",
// //         //   borderWidth: 2,
// //         //   fill: false, //no fill under line
// //         //   pointRadius: 0, //no point
// //         //   tension: 0, //straight
// //         // }
// //       ]
// //     },
// //     options: {
// //       responsive: true,
// //       maintainAspectRatio: false,
// //       lineTension: 1,
// //       parsing: false,
// //       animation: false
// //     }
// //   };
  
//   export function perfChartData(funded_1) {
//     var nav=[];
//     if (funded_1===true) { 
//       nav = nav_1;
//     } else {
//       nav = nav_2;
//     }

//     return {
//       type: "line",
//     data: {
//       labels: date,
//       datasets: [
//         {
//           label: "Fund",
//           data: nav,
//           backgroundColor: null,
//           borderColor: "#36495d",
//           borderWidth: 2,
//           fill: false,
//           pointRadius: 0,
//           tension: 0, //straight
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       lineTension: 1,
//       parsing: false,
//       animation: false
//     }
//     }
    
//   };


//   export default perfChartData();
