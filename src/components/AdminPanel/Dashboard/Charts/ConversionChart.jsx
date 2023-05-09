import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
const data = [
  { date: "Jan", conversionRate: 0.2 },
  { date: "Feb", conversionRate: 0.25 },
  { date: "Mar", conversionRate: 0.3 },
  { date: "Apr", conversionRate: 0.28 },
  { date: "Apr", conversionRate: 0.32 },
  { date: "May", conversionRate: 0.35 },
  { date: "Jun", conversionRate: 0.27 },
];

const options = {
  credits: { enabled: false },
  chart: {
    height: 150,
    width: 300,
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: data.map((item) => item.date),
  },
  yAxis: {
    title: {
      text: "Conversion Rate",
    },
  },
  series: [
    {
      name: "Conversion Rate",
      data: data.map((item) => item.conversionRate),
    },
  ],
};

const OrderConversionChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrderConversionChart;
