import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const data = [
  { month: "Jan", visitors: 12000 },
  { month: "Feb", visitors: 15000 },
  { month: "Mar", visitors: 18000 },
  { month: "Apr", visitors: 20000 },
  { month: "May", visitors: 22000 },
  { month: "Jun", visitors: 24000 },
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
      text: "Number of Visitors",
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Visitors",
      data: data.map((item) => item.visitors),
    },
  ],
};

const VisitorsByMonthChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default VisitorsByMonthChart;
