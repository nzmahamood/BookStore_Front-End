// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// import { Typography } from '@mui/material';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ['Current Customers', 'New Customers'],
//   datasets: [
//     {
//       label: '# of Customers',
//       data: [150, 50], // Replace with actual data for current and new customers
//       backgroundColor: [
//         'rgba(43, 37, 40, 0.8)',
//         'rgba(210, 200, 205, 0.68)',
//       ],
//       borderColor: [
//         'rgba(43, 37, 40, 1)',
//         'rgba(210, 200, 205, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// }

// const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: false,
//       },
//     },
//   }

// const CustomersCharts = () => {
//     const containerRef = React.useRef(null);

//   // Get the dimensions of the container element
//   const { width, height } = containerRef.current?.getBoundingClientRect() || {};
//   return (
//     <div ref={containerRef} style={{ width: '100%', height: '93%' }} className='pb-2 flex'>
//         <Doughnut data={data} height={height} width={width} options={options}/>
//         <ul className='flex flex-col gap-2 list-disc text-[#2b2528]'>
//             <li className='text-[#2b2528]'><Typography variant='h6' className='text-sm font-semibold tracking-wider text-[#2b2528]'>Current Customers</Typography></li>
//             <li className='text-[#d2c8cd]'><Typography variant='h6' className='text-sm font-semibold tracking-wider text-[#d2c8cd]'>New Customers</Typography></li>
//         </ul>
//     </div>
//   )
// }

// export default CustomersCharts

import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
const CustomersCharts = () => {
  const options = {
    credits: { enabled: false },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      width: 600,
      height: 300,
    },
    title: {
      text: "Customers",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Current Customers",
            y: 70.67,
            sliced: true,
            selected: true,
          },
          {
            name: "New Customers",
            y: 14.77,
          },
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default CustomersCharts;
