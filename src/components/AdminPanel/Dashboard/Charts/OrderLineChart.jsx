import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BASE_URL_NET } from '../../../../utils/domains';

const options = {
  credits: { enabled: false },
  chart: {
    type: 'column',
    height: 150,
    width: 300,
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: [],
  },
  yAxis: {
    title: {
      text: 'Number of Orders'
    }
  },
  legend: {
    enabled: true
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Completed Orders',
    data: []
  }]
};

const OrdersByMonthChart = () => {
  const [chartOptions, setChartOptions] = useState(options)
  const {access_token} = useSelector((state) => state.token)


  useEffect(() => {
    axios.get(`${BASE_URL_NET}/admin-api/api/order-data/`, {headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`
    }})
      .then(response => {
        const data = response.data;
        setChartOptions({
          ...options,
          xAxis: {
            categories: data.map(item => item.month)
          },
          series: [{
            name: 'Completed Orders',
            data: data.map(item => item.completedOrders)
          }]
        });
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default OrdersByMonthChart;
