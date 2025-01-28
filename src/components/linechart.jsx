import React from 'react';
import { Line as LineChartJS } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Line = ({ data }) => {

  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: "Performance Data",
        data: data.map(item => item.value),
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <LineChartJS data={chartData} />
    </div>
  );
};

export default Line;
