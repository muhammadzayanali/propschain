import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import Line from "./linechart";
import Data from "./datalabel";
import Backarrow from "./logincomponents/backarrow";

const Analytics = () => {
  const [selectedItem, setSelectedItem] = useState("User Demographics");

  const list = [
    { label: "User Demographics", to: "/linechart" },
    { label: "Property Performance", to: "/linechart" },
    { label: "Market Trends", to: "/linechart" },
  ];

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const chartData = {
    "User Demographics": [
      { month: "January", value: 100 },
      { month: "February", value: 200 },
      { month: "March", value: 200 },
      { month: "March", value: 350 },
      { month: "March", value: 100 },
      { month: "March", value: 200 },
      { month: "March", value: 250 },
      { month: "March", value: 300 },
      { month: "March", value: 300 },
      { month: "March", value: 300 },
      { month: "March", value: 300 },
    ],
    "Property Performance": [
      { month: "1 oct", value: 150 },
      { month: "3 oct", value: 250 },
      { month: "7 oct", value: 350 },
      { month: "10 oct", value: 340 },
      { month: "14 oct", value: 390 },
      { month: "20 oct", value: 290 },
      { month: "23 oct", value: 230 },
      { month: "27 oct", value: 320 },
      { month: "30 oct", value: 300 },
    ],
    "Market Trends": [
      { month: "1 oct", value: 120 },
      { month: "2 oct", value: 220 },
      { month: "3 oct", value: 320 },
      { month: "4 oct", value: 320 },
      { month: "5 oct", value: 350 },
      { month: "6 oct", value: 370 },
      { month: "7 oct", value: 380 },
      { month: "8 oct", value: 320 },
      { month: "9 oct", value: 100 },
    ],
  };

  return (
    <Layout>
      <div className="p-5">
        <div className="flex flex-row items-center gap-3">
          <Backarrow hrf="/content" />
          <h1 className="text-4xl font-bold font-title my-5">
            Analytics & Reporting
          </h1>
        </div>
        <div className=" rounded-lg mt-5">
          <div className="flex flex-row gap-5">
            {list.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.label)}
                className={`text-lg ${
                  selectedItem === item.label
                    ? "text-red-600 underline"
                    : "text-gray-600"
                } hover:text-red-600 hover:underline transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {selectedItem && (
            <div className=" flex flex-col bg-white p-5 rounded-lg mt-5">
              <div className="flex justify-end">
                <Data />
              </div>
              <div className="xl:w-full w-10/12">
                <Line data={chartData[selectedItem]} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
