import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useEffect, useState } from "react";
import axios from "axios";

const initialData = [
  { book: "To Kill a Mockingbird", sales: 532 },
  { book: "The Great Gatsby", sales: 486 },
  { book: "1984", sales: 375 },
  { book: "Animal Farm", sales: 296 },
  { book: "The Hobbit", sales: 245 },
  { book: "Lord of the Flies", sales: 216 },
  { book: "Brave New World", sales: 192 },
];

const TopSellingBooksChart = () => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    axios
      .get("/api/top-selling-books")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const options = {
    credits: { enabled: false },
    chart: {
      type: "bar",
      width: 600,
      height: 300,
    },
    title: {
      text: "Top-Selling Books",
      align: "left",
    },
    xAxis: {
      categories: data.map((item) => item.book),
    },
    yAxis: {
      title: {
        text: "Number of Sales",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Sales",
        data: data.map((item) => item.sales),
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TopSellingBooksChart;
