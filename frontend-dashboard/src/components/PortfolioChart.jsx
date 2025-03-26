// import React, { useEffect, useState } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import PortfolioChart from "./components/PortfolioChart";


// // const PortfolioChart = () => {
// //     const [chartData, setChartData] = useState([]);

// //     useEffect(() => {
// //         fetch("http://127.0.0.1:5000/progress/api/portfolio")
// //             .then((response) => response.json())
// //             .then((data) => {
// //                 const formattedData = data.map(item => ({
// //                     name: item.stock_symbol,
// //                     y: item.total_value
// //                 }));
// //                 setChartData(formattedData);
// //             })
// //             .catch(error => console.error("Error fetching portfolio data:", error));
// //     }, []);

// //     const options = {
// //         chart: { type: "pie" },
// //         title: { text: "Stock Portfolio Distribution" },
// //         series: [{ name: "Value", data: chartData }]
// //     };

// //     return <HighchartsReact highcharts={Highcharts} options={options} />;
// // };

// // export default PortfolioChart;
// const PortfolioChart = () => {
//     const [chartData, setChartData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("http://127.0.0.1:5000/progress/api/portfolio")
//             .then(response => {
//                 if (!response.ok) throw new Error("Failed to fetch data");
//                 return response.json();
//             })
//             .then(data => {
//                 if (!Array.isArray(data) || data.length === 0) {
//                     throw new Error("No portfolio data available");
//                 }
//                 setChartData(data.map(item => ({
//                     name: item.stock_symbol,
//                     y: item.total_value
//                 })));
//             })
//             .catch(error => setError(error.message))
//             .finally(() => setLoading(false));
//     }, []);

//     const options = {
//         chart: { type: "pie" },
//         title: { text: "Stock Portfolio Distribution" },
//         series: [{ name: "Value", data: chartData }]
//     };

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//     if (chartData.length === 0) return <p>No portfolio data available</p>;

//     return <HighchartsReact highcharts={Highcharts} options={options} />;
// };
// export default PortfolioChart;

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PortfolioChart = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/progress/api/portfolio");
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error("No portfolio data available");
                }

                setChartData(data.map(item => ({
                    name: item.stock_symbol,
                    y: item.total_value
                })));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const options = {
        chart: { type: "pie" },
        title: { text: "Stock Portfolio Distribution" },
        series: [{ name: "Value", data: chartData }]
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (chartData.length === 0) return <p>No portfolio data available</p>;

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PortfolioChart;
