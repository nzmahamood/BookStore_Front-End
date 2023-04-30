import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
    labels: ["Book1", "Book1", "Book1", "Book1", "Book1",],
    datasets: [
      {
        data: [30, 25, 20, 15, 10], // Replace with your actual data
        backgroundColor: [
          'rgba(245, 40, 145, 0.6)',
          'rgba(148, 36, 180, 0.6)',
          'rgba(82, 36, 180, 0.6)',
          'rgba(36, 146, 180, 0.6)',
          'rgba(36, 180, 61, 0.6)',
        ],
        borderColor: [
          'rgba(245, 40, 145, 1)',
          'rgba(148, 36, 180, 1)',
          'rgba(82, 36, 180, 1)',
          'rgba(36, 146, 180, 1)',
          'rgba(36, 180, 61, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

const PopularBooksChart = () => {
    const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
      }
    const containerPopularRef = React.useRef(null);

  // Get the dimensions of the container element
  const { width, height } = containerPopularRef.current?.getBoundingClientRect() || {};
  return (
    <div ref={containerPopularRef} style={{ width: '100%', height: '93%' }} className='pb-2 flex'>
        <Pie data={data} height={height} width={width} options={options}/>
        <ul className='m-auto flex flex-col gap-2 list-disc text-[#2b2528]'>
        {data.labels.map((label, index) => (
                    <li key={label} style={{ color: data.datasets[0].backgroundColor[index] }}>
                        <Typography variant='h6' className='text-sm font-semibold tracking-wider text-[#2b2528]' style={{ color: data.datasets[0].backgroundColor[index] }}>
                            {label}
                        </Typography>
                    </li>
                ))}
        </ul>
    </div>
  )
}

export default PopularBooksChart