import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 34000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 20000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 24000 },
];

const options = {
  credits: { enabled: false },
  chart: {
    type: "column",
    height: 150,
    width: 300,
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: data.map((item) => item.month),
  },
  yAxis: {
    title: {
      text: "Revenue",
    },
  },
  series: [
    {
      name: "Revenue",
      data: data.map((item) => item.revenue),
    },
  ],
};

const RevenueByMonthChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RevenueByMonthChart;
