import React from 'react';
import { Chart, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import OrderLineChart from './OrderLineChart';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend);

const DashboardCharts = ({ type }) => {
  const data = {
    total_orders: 50,
    order_data: {
      labels: ['Feb', 'Mar', 'Apr'],
      values: [15, 32, 62, 72],
    },
  };

  const chartData = {
    labels: data.order_data.labels,
    datasets: [
      {
        label: 'Orders',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: data.order_data.values,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: false,
        text: 'Total Orders: ' + data.total_orders,
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
        position: 'right',
      },
      tooltips: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="max-w-[95%] h-[72px] absolute bottom-[-15px] right-[-10px]">
       <OrderLineChart />
    </div>
  );
};

export default DashboardCharts;
