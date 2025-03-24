// // // // // import React from "react";
// // // // // import "../styles/Dashboard.css"; // Import the CSS file

// // // // // const Dashboard = () => {
// // // // //   return (
// // // // //     <div className="dashboard-container">
// // // // //       <div className="dashboard-card">
// // // // //         <h2 className="dashboard-title">Dashboard</h2>
// // // // //         <p className="dashboard-text">Welcome to your dashboard. Manage your data efficiently!</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;



// // // // import React from "react";
// // // // import "../styles/Dashboard.css";
// // // // import Sidebar from "../components/Sidebar";
// // // // import Navbar from "../components/Navbar";
// // // // import HighchartsReact from "highcharts-react-official";
// // // // import Highcharts from "highcharts";

// // // // const Dashboard = () => {
// // // //   const chartOptions = {
// // // //     chart: { type: "line" },
// // // //     title: { text: "Stock Market Trends" },
// // // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // // //     yAxis: { title: { text: "Stock Price ($)" } },
// // // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       <Sidebar />
// // // //       <div className="main-content">
// // // //         <Navbar />
// // // //         <div className="dashboard-content">
// // // //           <div className="card stock-card">
// // // //             <h3>Market Insights</h3>
// // // //             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // // //           </div>
// // // //           <div className="card leaderboard-card">
// // // //             <h3>Top Traders</h3>
// // // //             <ul>
// // // //               <li><span className="rank">1.</span> Alice - <span className="amount">$15,000</span></li>
// // // //               <li><span className="rank">2.</span> Bob - <span className="amount">$12,500</span></li>
// // // //               <li><span className="rank">3.</span> Charlie - <span className="amount">$11,000</span></li>
// // // //             </ul>
// // // //           </div>
// // // //           <div className="card portfolio-card">
// // // //             <h3>My Portfolio</h3>
// // // //             <p><strong>Investments:</strong> <span className="amount">$10,000</span></p>
// // // //             <p><strong>Returns:</strong> <span className="amount positive">$2,500</span></p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // // import React from "react";
// // // // import HighchartsReact from "highcharts-react-official";
// // // // import Highcharts from "highcharts";

// // // // const Dashboard = () => {
// // // //   const chartOptions = {
// // // //     chart: { type: "line" },
// // // //     title: { text: "Stock Market Trends" },
// // // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // // //     yAxis: { title: { text: "Stock Price ($)" } },
// // // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       <div className="dashboard-content">
// // // //         <div className="card stock-card">
// // // //           <h3>Market Insights</h3>
// // // //           <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;

// // // // import React from "react";
// // // // import Sidebar from "../components/Sidebar"; 
// // // // import Navbar from "../components/Navbar"; // ✅ Add Navbar back
// // // // import HighchartsReact from "highcharts-react-official";
// // // // import Highcharts from "highcharts";

// // // // const Dashboard = () => {
// // // //   const chartOptions = {
// // // //     chart: { type: "line" },
// // // //     title: { text: "Stock Market Trends" },
// // // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // // //     yAxis: { title: { text: "Stock Price ($)" } },
// // // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       <Sidebar />
// // // //       <div className="main-content">
// // // //         <Navbar />  {/* ✅ Navbar added back */}
// // // //         <div className="dashboard-content">
// // // //           <div className="card stock-card">
// // // //             <h3>Market Insights</h3>
// // // //             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // // import React from "react";
// // // // import HighchartsReact from "highcharts-react-official";
// // // // import Highcharts from "highcharts";

// // // // const Dashboard = () => {
// // // //   const chartOptions = {
// // // //     chart: { type: "line" },
// // // //     title: { text: "Stock Market Trends" },
// // // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // // //     yAxis: { title: { text: "Stock Price ($)" } },
// // // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       <Sidebar />
// // // //       <div className="main-content">
// // // //         <Navbar />
// // // //         <div className="dashboard-content">
// // // //           <div className="card stock-card">
// // // //             <h3>Market Insights</h3>
// // // //             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // // //           </div>
// // // //           <div className="card leaderboard-card">
// // // //             <h3>Top Traders</h3>
// // // //             <ul>
// // // //               <li><span className="rank">1.</span> Alice - <span className="amount">$15,000</span></li>
// // // //               <li><span className="rank">2.</span> Bob - <span className="amount">$12,500</span></li>
// // // //               <li><span className="rank">3.</span> Charlie - <span className="amount">$11,000</span></li>
// // // //             </ul>
// // // //           </div>
// // // //           <div className="card portfolio-card">
// // // //             <h3>My Portfolio</h3>
// // // //             <p><strong>Investments:</strong> <span className="amount">$10,000</span></p>
// // // //             <p><strong>Returns:</strong> <span className="amount positive">$2,500</span></p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // // import React from "react";
// // // // import HighchartsReact from "highcharts-react-official";
// // // // import Highcharts from "highcharts";

// // // // const Dashboard = () => {
// // // //   const chartOptions = {
// // // //     chart: { type: "line" },
// // // //     title: { text: "Stock Market Trends" },
// // // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // // //     yAxis: { title: { text: "Stock Price ($)" } },
// // // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       <div className="dashboard-content">
// // // //         <div className="card stock-card">
// // // //           <h3>Market Insights</h3>
// // // //           <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;
// // // import React from "react";
// // // import "../styles/Dashboard.css";
// // // import Sidebar from "../components/Sidebar";
// // // import Navbar from "../components/Navbar";
// // // import HighchartsReact from "highcharts-react-official";
// // // import Highcharts from "highcharts";
// // // import Leaderboard from "../components/Leaderboard"; //  ✅ Import Leaderboard

// // // const Dashboard = () => {
// // //   const chartOptions = {
// // //     chart: { type: "line" },
// // //     title: { text: "Stock Market Trends" },
// // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // //     yAxis: { title: { text: "Stock Price ($)" } },
// // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // //   };

// // //   return (
// // //     <div className="dashboard-container">
// // //       <Sidebar />
// // //       <div className="main-content">
// // //         <Navbar />
// // //         <div className="dashboard-content">
// // //           <div className="card stock-card">
// // //             <h3>Market Insights</h3>
// // //             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // //           </div>
// // //           <Leaderboard />  {/* ✅ Render Leaderboard here */}
// // //           <div className="card portfolio-card">
// // //             <h3>My Portfolio</h3>
// // //             <p>
// // //               <strong>Investments:</strong> <span className="amount">$10,000</span>
// // //             </p>
// // //             <p>
// // //               <strong>Returns:</strong> <span className="amount positive">$2,500</span>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // // import React from "react";
// // // import "../styles/Dashboard.css";
// // // import Sidebar from "../components/Sidebar";
// // // import Navbar from "../components/Navbar";
// // // import HighchartsReact from "highcharts-react-official";
// // // import Highcharts from "highcharts";
// // // import Leaderboard from "../components/Leaderboard";

// // // const Dashboard = () => {
// // //   const chartOptions = {
// // //     chart: { type: "line" },
// // //     title: { text: "Stock Market Trends" },
// // //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// // //     yAxis: { title: { text: "Stock Price ($)" } },
// // //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// // //   };

// // //   return (
// // //     <div className="dashboard-container">
// // //       <Sidebar />
// // //       <div className="main-content">
// // //         <Navbar />
// // //         <div className="dashboard-content">
// // //           <div className="card stock-card">
// // //             <h3>Market Insights</h3>
// // //             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// // //           </div>
// // //           <Leaderboard />
// // //           <div className="card portfolio-card">
// // //             <h3>My Portfolio</h3>
// // //             <p>
// // //               <strong>Investments:</strong> <span className="amount">$10,000</span>
// // //             </p>
// // //             <p>
// // //               <strong>Returns:</strong> <span className="amount positive">$2,500</span>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // import React from "react";
// // import "../styles/Dashboard.css";
// // import Sidebar from "../components/Sidebar";
// // import Navbar from "../components/Navbar";
// // import HighchartsReact from "highcharts-react-official";
// // import Highcharts from "highcharts";
// // import Leaderboard from "../components/Leaderboard";

// // const Dashboard = () => {
// //   const chartOptions = {
// //     chart: { type: "line" },
// //     title: { text: "Stock Market Trends" },
// //     xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
// //     yAxis: { title: { text: "Stock Price ($)" } },
// //     series: [{ name: "Company A", data: [120, 130, 125, 140, 150, 160] }],
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       <Sidebar />
// //       <div className="main-content">
// //         <Navbar />
// //         <div className="dashboard-content">
// //           <div className="card stock-card">
// //             <h3>Market Insights</h3>
// //             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
// //           </div>
// //           <Leaderboard />
// //           <div className="card portfolio-card">
// //             <h3>My Portfolio</h3>
// //             <p>
// //               <strong>Investments:</strong> <span className="amount">$10,000</span>
// //             </p>
// //             <p>
// //               <strong>Returns:</strong> <span className="amount positive">$2,500</span>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useEffect, useState } from "react";
// import "../styles/Dashboard.css";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// // import HighchartsReact from "highcharts-react-official"; // If you want to use the chart version
// // import Highcharts from "highcharts";          // If you want to use the chart version


// const Dashboard = () => {
//     const [portfolioProgress, setPortfolioProgress] = useState();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);


//     useEffect(() => {
//         const fetchPortfolioProgress = async () => {
//             try {
//                 const response = await fetch("/api/portfolio_progress"); // Ensure this URL is correct
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setPortfolioProgress(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };


//         fetchPortfolioProgress();
//     },);


//     //   const chartOptions = {  // If you want to use the chart version
//     //     chart: { type: "line" },
//     //     title: { text: "Portfolio Value Over Time" },
//     //     xAxis: {
//     //       categories: portfolioProgress.map(item => item.date),
//     //     },
//     //     yAxis: { title: { text: "Portfolio Value" } },
//     //     series: [{
//     //       name: "Portfolio",
//     //       data: portfolioProgress.map(item => item.value)
//     //     }],
//     //   };


//     if (loading) {
//         return <div>Loading portfolio progress...</div>;
//     }


//     if (error) {
//         return <div>Error fetching portfolio progress: {error.message}</div>;
//     }


//     return (
//         <div className="dashboard-container">
//             <Sidebar />
//             <div className="main-content">
//                 <Navbar />
//                 <div className="dashboard-content">
//                     {/* Portfolio Progress Table */}
//                     <div className="card portfolio-progress-card">
//                         <h3>Portfolio Progress</h3>
//                         <table className="portfolio-table">
//                             <thead>
//                                 <tr>
//                                     <th>Date</th>
//                                     <th>Portfolio Value</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {portfolioProgress.length > 0 ? (
//                                     portfolioProgress.map((item, index) => (
//                                         <tr key={index}>
//                                             <td>{item.date}</td>
//                                             <td>${item.value.toFixed(2)}</td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="2">No portfolio progress data available.</td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                     {/* Portfolio Progress Chart 
//                     <div className="card portfolio-chart-card">
//                         <h3>Portfolio Value Over Time</h3>
//                         <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//                     </div>
//                     */}
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default Dashboard;


import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const Dashboard = () => {
    const [portfolioProgress, setPortfolioProgress] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolioProgress = async () => {
            setLoading(true); // Set loading to true when fetch starts
            setError(null);    // Reset error state
            try {
                const response = await fetch("/api/portfolio_progress"); // Ensure this URL is correct
                if (!response.ok) {
                    // Handle HTTP errors more explicitly
                    throw new Error(`HTTP error! status: ${response.status}, ${response.statusText}`);
                }
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Expected JSON response but received " + contentType);
                }
                const data = await response.json();
                setPortfolioProgress(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
                console.error("Error fetching portfolio progress:", error); // Log the error
            }
        };

        fetchPortfolioProgress();
    },);

    const chartOptions = {
        chart: { type: "line" },
        title: { text: "Portfolio Value Over Time" },
        xAxis: {
            categories: portfolioProgress.map(item => item.date),
        },
        yAxis: { title: { text: "Portfolio Value" } },
        series: [{
            name: "Portfolio",
            data: portfolioProgress.map(item => item.value)
        }],
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="dashboard-content">
                    {loading && <div>Loading portfolio progress...</div>}
                    {error && <div>Error fetching portfolio progress: {error.message}</div>}
                    {/* Portfolio Progress Chart */}
                    {portfolioProgress.length > 0 && (
                        <div className="card portfolio-chart-card">
                            <h3>Portfolio Value Over Time</h3>
                            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;