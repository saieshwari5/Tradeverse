// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const PortfolioProgress = ({ portfolioData }) => {
//   const chartData = {
//     labels: portfolioData?.map(item => item.date) || [],
//     datasets: [
//       {
//         label: 'Portfolio Value',
//         data: portfolioData?.map(item => item.value) || [],
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         tension: 0.1,
//         fill: true
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Portfolio Value Over Time'
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: false
//       }
//     }
//   };

//   return (
//     <div className="portfolio-progress">
//       <h2>Portfolio Performance</h2>
//       {portfolioData?.length > 0 ? (
//         <Line data={chartData} options={options} />
//       ) : (
//         <p>Loading portfolio data...</p>
//       )}
//     </div>
//   );
// };

// export default PortfolioProgress;


import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PortfolioProgress = ({ portfolioData }) => {
  // Ensure data is in correct format
  const formattedData = portfolioData?.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    value: item.value
  })) || [];

  const chartData = {
    labels: formattedData.map(item => item.date),
    datasets: [
      {
        label: 'Portfolio Value ($)',
        data: formattedData.map(item => item.value),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Portfolio Value Over Time'
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `$${value}`
        }
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Portfolio Performance</h2>
      {portfolioData?.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p className="text-gray-500">No portfolio progress data available</p>
      )}
    </div>
  );
};

export default PortfolioProgress;