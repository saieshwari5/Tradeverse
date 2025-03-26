// import React, { useEffect, useState } from "react";
// import "../styles/Dashboard.css";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import HighchartsReact from "highcharts-react-official";
// import Highcharts from "highcharts";

// const Dashboard = () => {
//     const [portfolioProgress, setPortfolioProgress] = useState();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // useEffect(() => {
//     //     const fetchPortfolioProgress = async () => {
//     //         setLoading(true); // Set loading to true when fetch starts
//     //         setError(null);    // Reset error state
//     //         try {
//     //             const response = await fetch("/api/portfolio_progress"); // Ensure this URL is correct
//     //             if (!response.ok) {
//     //                 // Handle HTTP errors more explicitly
//     //                 throw new Error(`HTTP error! status: ${response.status}, ${response.statusText}`);
//     //             }
//     //             const contentType = response.headers.get("content-type");
//     //             if (!contentType || !contentType.includes("application/json")) {
//     //                 throw new TypeError("Expected JSON response but received " + contentType);
//     //             }
//     //             const data = await response.json();
//     //             setPortfolioProgress(data);
//     //             setLoading(false);
//     //         } catch (error) {
//     //             setError(error);
//     //             setLoading(false);
//     //             console.error("Error fetching portfolio progress:", error); // Log the error
//     //         }
//     //     };

//     //     fetchPortfolioProgress();
//     // },);

//     useEffect(() => {
//         const fetchPortfolioProgress = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/portfolio_progress"); // Updated URL
//                 if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//                 const data = await response.json();
//                 setPortfolioProgress(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching portfolio progress:", error);
//                 setError(error);
//                 setLoading(false);
//             }
//         };
    
//         fetchPortfolioProgress();
//     }, []);
    

//     const chartOptions = {
//         chart: { type: "line" },
//         title: { text: "Portfolio Value Over Time" },
//         xAxis: {
//             categories: portfolioProgress.map(item => item.date),
//         },
//         yAxis: { title: { text: "Portfolio Value" } },
//         series: [{
//             name: "Portfolio",
//             data: portfolioProgress.map(item => item.value)
//         }],
//     };

//     return (
//         <div className="dashboard-container">
//             <Sidebar />
//             <div className="main-content">
//                 <Navbar />
//                 <div className="dashboard-content">
//                     {loading && <div>Loading portfolio progress...</div>}
//                     {error && <div>Error fetching portfolio progress: {error.message}</div>}
//                     {/* Portfolio Progress Chart */}
//                     {portfolioProgress.length > 0 && (
//                         <div className="card portfolio-chart-card">
//                             <h3>Portfolio Value Over Time</h3>
//                             <HighchartsReact highcharts={Highcharts} options={chartOptions} />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PortfolioProgress from "../components/PortfolioProgress";

const Dashboard = ({ portfolioData }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <PortfolioProgress portfolioData={portfolioData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
