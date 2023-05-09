import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const data = [
  { month: "Jan", completedOrders: 1200, pendingOrders: 300 },
  { month: "Feb", completedOrders: 1500, pendingOrders: 350 },
  { month: "Mar", completedOrders: 1800, pendingOrders: 400 },
  { month: "Apr", completedOrders: 2000, pendingOrders: 450 },
  { month: "May", completedOrders: 2200, pendingOrders: 500 },
  { month: "Jun", completedOrders: 2400, pendingOrders: 550 },
];

const options = {
  credits: { enabled: false },
  chart: {
    type: "column",
    width: 600,
    height: 300,
  },
  title: {
    text: "Orders By Month",
    align: "left",
  },
  xAxis: {
    categories: data.map((item) => item.month),
  },
  yAxis: {
    title: {
      text: "Number of Orders",
    },
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    column: {
      stacking: "normal",
    },
  },
  series: [
    {
      name: "Pending Orders",
      data: data.map((item) => item.pendingOrders),
    },
    {
      name: "Completed Orders",
      data: data.map((item) => item.completedOrders),
    },
  ],
};

const OrdersByMonthChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrdersByMonthChart;
