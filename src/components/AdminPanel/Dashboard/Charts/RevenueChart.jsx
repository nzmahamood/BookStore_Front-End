import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL_NET } from "../../../../utils/domains";

const RevenueByMonthChart = () => {
  const [data, setData] = useState([]);
  const {access_token} = useSelector((state) => state.token)

  useEffect(() => {
    axios
      .get(`${BASE_URL_NET}/admin-api/api/revenue-data/`, {headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`
      }})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RevenueByMonthChart;
