import React from "react";
import Layout from "./logincomponents/layout";
import Dropdown from "./logincomponents/dropaown";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: [
      "1 Oct",
      "2 Oct",
      "3 Oct",
      "4 Oct",
      "5 Oct",
      "6 Oct",
      "7 Oct",
      "8 Oct",
      "9 Oct",
    ],
    datasets: [
      {
        label: "Sale",
        data: [200, 500, 1000, 1500, 3000, 20000, 18000, 25000, 30000],
        borderColor: "#2F80ED",
        backgroundColor: "rgba(47, 128, 237, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#2F80ED",
      },
      {
        label: "Rent",
        data: [100, 200, 400, 800, 1500, 4000, 3000, 3500, 4000],
        borderColor: "#27AE60",
        backgroundColor: "rgba(39, 174, 96, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#27AE60",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`;
          },
        },
      },
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full h-full px-6 lg:px-8 2xl:px-16">
          <div className="py-6 2xl:py-8">
            <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold font-title">
              Dashboard
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:gap-8">
            <div className="bg-white rounded-lg p-6 2xl:p-8">
              <div className="flex flex-col gap-4">
                <img
                  className="h-12 w-12 2xl:h-16 2xl:w-16 bg-red-100 p-3 rounded-lg"
                  src="/apartment.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl 2xl:text-4xl font-bold font-title">
                    $24,000
                  </h2>
                  <p className="text-gray-400 font-title mt-1 2xl:text-xl">
                    Total Properties
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 2xl:p-8">
              <div className="flex flex-col gap-4">
                <img
                  className="h-12 w-12 2xl:h-16 2xl:w-16 bg-[#E6EFFF] p-3 rounded-lg"
                  src="/house.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl 2xl:text-4xl font-bold font-title">
                    $24,000
                  </h2>
                  <p className="text-gray-400 font-title mt-1 2xl:text-xl">
                    Properties for Sale
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 2xl:p-8">
              <div className="flex flex-col gap-4">
                <img
                  className="h-12 w-12 2xl:h-16 2xl:w-16 bg-[#ECFBF5] p-3 rounded-lg"
                  src="/key.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl 2xl:text-4xl font-bold font-title">
                    $24,000
                  </h2>
                  <p className="text-gray-400 font-title mt-1 2xl:text-xl">
                    Properties for Rent
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 2xl:mt-8 bg-white rounded-lg">
            <div className="p-6 2xl:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl 2xl:text-3xl font-bold">
                  Property Sale & Rent
                </h2>
                <div className="border rounded-full">
                  <Dropdown name="This Month" />
                </div>
              </div>
              <div className="w-full" style={{ height: "calc(100vh - 250px)" }}>
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;