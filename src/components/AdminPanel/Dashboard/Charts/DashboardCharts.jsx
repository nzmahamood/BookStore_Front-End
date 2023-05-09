import React from "react";
import OrderConversionChart from "./ConversionChart";
import OrdersByMonthChart from "./OrderLineChart";
import OrderLineChart from "./OrderLineChart";
import RevenueByMonthChart from "./RevenueChart";
import VisitorsByMonthChart from "./VisitorsChart";

const DashboardCharts = ({ type }) => {
  console.log(type);
  return (
    <div className="max-w-[95%] h-[72px] absolute bottom-[-15px] right-[-10px]">
      {type === "Orders" ? (
        <OrdersByMonthChart />
      ) : type === "Revenue" ? (
        <RevenueByMonthChart />
      ) : type === "Conversion" ? (
        <OrderConversionChart />
      ) : type === "Visitors" ? (
        <VisitorsByMonthChart />
      ) : null}
    </div>
  );
};

export default DashboardCharts;
