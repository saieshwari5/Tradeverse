// // // import React, { useEffect, useState } from "react";
// // // import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

// // // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

// // // const Portfolio = () => {
// // //   const [portfolio, setPortfolio] = useState();
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     fetch("http://localhost:5000/api/portfolio", {
// // //       method: "GET",
// // //       credentials: "include",
// // //     })
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         setPortfolio(data);
// // //         setLoading(false);
// // //       })
// // //       .catch((err) => {
// // //         setError("Failed to fetch portfolio");
// // //         setLoading(false);
// // //       });
// // //   },);

// // //   const pieData = portfolio.map(stock => ({
// // //     name: stock.stock_symbol,
// // //     value: stock.total_value
// // //   }));

// // //   const lineData = portfolio.map((stock, index) => ({
// // //     name: stock.stock_symbol,
// // //     value: stock.total_value,
// // //     index
// // //   }));

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
// // //       {loading ? (
// // //         <p>Loading...</p>
// // //       ) : error ? (
// // //         <p className="text-red-500">{error}</p>
// // //       ) : (
// // //         <div>
// // //           <div className="flex flex-col md:flex-row gap-8">
// // //             {/* Portfolio Table */}
// // //             <table className="min-w-full bg-white border border-gray-300 shadow-md">
// // //               <thead>
// // //                 <tr className="bg-gray-200">
// // //                   <th className="py-2 px-4 border">Stock Symbol</th>
// // //                   <th className="py-2 px-4 border">Quantity</th>
// // //                   <th className="py-2 px-4 border">Current Value</th>
// // //                   <th className="py-2 px-4 border">Total Value</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {portfolio.map((stock, index) => (
// // //                   <tr key={index} className="text-center border-t">
// // //                     <td className="py-2 px-4 border">{stock.stock_symbol}</td>
// // //                     <td className="py-2 px-4 border">{stock.quantity}</td>
// // //                     <td className="py-2 px-4 border">${stock.current_value.toFixed(2)}</td>
// // //                     <td className="py-2 px-4 border">${stock.total_value.toFixed(2)}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>

// // //             {/* Portfolio Pie Chart */}
// // //             <div className="w-full md:w-1/3 p-4">
// // //               <h2 className="text-lg font-semibold mb-2">Stock Distribution</h2>
// // //               <ResponsiveContainer width="100%" height={300}>
// // //                 <PieChart>
// // //                   <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
// // //                     {pieData.map((_, index) => (
// // //                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                     ))}
// // //                   </Pie>
// // //                   <Tooltip />
// // //                   <Legend />
// // //                 </PieChart>
// // //               </ResponsiveContainer>
// // //             </div>
// // //           </div>

// // //           {/* Portfolio Line Chart */}
// // //           <div className="mt-8">
// // //             <h2 className="text-lg font-semibold mb-2">Portfolio Value Trend</h2>
// // //             <ResponsiveContainer width="100%" height={300}>
// // //               <LineChart data={lineData}>
// // //                 <CartesianGrid strokeDasharray="3 3" />
// // //                 <XAxis dataKey="name" />
// // //                 <YAxis />
// // //                 <Tooltip />
// // //                 <Legend />
// // //                 <Line type="monotone" dataKey="value" stroke="#8884d8" />
// // //               </LineChart>
// // //             </ResponsiveContainer>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Portfolio;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const Portfolio = () => {
// //   const [portfolioData, setPortfolioData] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchPortfolioData = async () => {
// //       try {
// //         const response = await axios.get("http://127.0.0.1:5000/api/portfolio_progress", {
// //           withCredentials: true, // Ensure cookies are sent if authentication is needed
// //         });

// //         console.log("✅ Portfolio API Response:", response.data); // Debugging

// //         if (Array.isArray(response.data)) {
// //           setPortfolioData(response.data);
// //         } else {
// //           throw new Error("Invalid data format");
// //         }
// //       } catch (err) {
// //         console.error("❌ API Fetch Error:", err.response ? err.response.data : err.message);
// //         setError("Failed to load portfolio data.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPortfolioData();
// //   }, []);

// //   if (loading) return <p>Loading portfolio data...</p>;
// //   if (error) return <p style={{ color: "red" }}>{error}</p>;

// //   return (
// //     <div>
// //       <h1>Portfolio Progress</h1>
// //       {portfolioData.length > 0 ? (
// //         <ul>
// //           {portfolioData.map((item, index) => (
// //             <li key={index}>
// //               <strong>Date:</strong> {item.date} - <strong>Value:</strong> ${item.value}
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No portfolio data available.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Portfolio;


// import { useEffect, useState } from "react";

// const Portfolio = () => {
//     const [portfolioData, setPortfolioData] = useState([]);
//     const [error, setError] = useState(null);

//     // useEffect(() => {
//     //     fetch("http://127.0.0.1:5000/api/portfolio_progress", {
//     //         method: "GET",
//     //         credentials: "include",  // ✅ Ensure session cookies are sent
//     //     })
//     //     .then(response => {
//     //         if (!response.ok) {
//     //             throw new Error("Failed to fetch portfolio data");
//     //         }
//     //         return response.json();
//     //     })
//     //     .then(data => {
//     //         console.log("Portfolio Data:", data);
//     //         setPortfolioData(data);
//     //     })
//     //     .catch(error => {
//     //         console.error("API Fetch Error:", error);
//     //         setError("Failed to load portfolio data.");
//     //     });
//     // }, []);

//     useEffect(() => {
//       console.log("🚀 Fetching Portfolio Progress...");
    
//       fetch("http://localhost:5000/api/portfolio_progress", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log("✅ Portfolio Data:", data);
//         setPortfolioData(data);  // Update UI dynamically
//       })
//       .catch(error => console.error("❌ API Fetch Error:", error));
//     }, []);
    

//   //   useEffect(() => {
//   //     fetch("http://127.0.0.1:5000/api/portfolio_progress", {
//   //         method: "GET",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           "Authorization": "Bearer " + localStorage.getItem("token") // Ensure token is present
//   //       },
//   //         credentials: "include",
//   //     })
//   //     .then(response => response.json())
//   //     .then(data => {
//   //         console.log("Portfolio Data:", data);
//   //         setPortfolioData(data);
//   //     })
//   //     .catch(error => console.error("API Fetch Error:", error));
//   // }, []);


  

//     return (
//         <div>
//             <h2>Portfolio Progress</h2>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             <ul>
//                 {portfolioData.map((item, index) => (
//                     <li key={index}>
//                         {item.date}: {item.value}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Portfolio;



// import { useEffect, useState } from "react";
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

// const Portfolio = () => {
//     const [portfolioData, setPortfolioData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         console.log("🚀 Fetching Portfolio Progress...");
//         fetch("http://localhost:5000/api/portfolio_progress", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             credentials: "include", // Ensuring session cookies are sent
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch portfolio data");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("✅ Portfolio Data:", data);
//                 setPortfolioData(data);
//             })
//             .catch(error => {
//                 console.error("❌ API Fetch Error:", error);
//                 setError("Failed to load portfolio data.");
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     const pieData = portfolioData.map(stock => ({
//         name: stock.stock_symbol,
//         value: stock.total_value
//     }));

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Portfolio Progress</h1>
//             {loading ? (
//                 <p>Loading portfolio data...</p>
//             ) : error ? (
//                 <p className="text-red-500">{error}</p>
//             ) : (
//                 <div className="flex flex-col md:flex-row gap-8">
//                     <table className="min-w-full bg-white border border-gray-300 shadow-md">
//                         <thead>
//                             <tr className="bg-gray-200">
//                                 <th className="py-2 px-4 border">Stock Symbol</th>
//                                 <th className="py-2 px-4 border">Total Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {portfolioData.map((stock, index) => (
//                                 <tr key={index} className="text-center border-t">
//                                     <td className="py-2 px-4 border">{stock.stock_symbol}</td>
//                                     <td className="py-2 px-4 border">${stock.total_value.toFixed(2)}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <div className="w-full md:w-1/3 p-4">
//                         <h2 className="text-lg font-semibold mb-2">Stock Distribution</h2>
//                         <ResponsiveContainer width="100%" height={300}>
//                             <PieChart>
//                                 <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
//                                     {pieData.map((_, index) => (
//                                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                     ))}
//                                 </Pie>
//                                 <Tooltip />
//                                 <Legend />
//                             </PieChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Portfolio;


import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import PortfolioProgress from "../components/PortfolioProgress";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

const Portfolio = ({ currentUser }) => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [portfolioProgressData, setPortfolioProgressData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const [holdingsResponse, progressResponse] = await Promise.all([
                    fetch("http://localhost:5000/api/portfolio", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem('token')}`
                        }
                    }),
                    fetch("http://localhost:5000/api/progress/portfolio_progress", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                ]);
    
                if (!holdingsResponse.ok || !progressResponse.ok) {
                    throw new Error("Failed to fetch portfolio data");
                }
    
                const [holdingsData, progressData] = await Promise.all([
                    holdingsResponse.json(),
                    progressResponse.json()
                ]);
    
                setPortfolioData(holdingsData);
                setPortfolioProgressData(progressData);
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        if (currentUser) {
            fetchPortfolioData();
        }
    }, [currentUser]);

    const pieData = portfolioData.map(stock => ({
        name: stock.stock_symbol,
        value: stock.total_value
    }));

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                {currentUser?.username}'s Portfolio
            </h1>
            
            {loading ? (
                <p>Loading portfolio data...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <div className="mb-8">
                        <PortfolioProgress portfolioData={portfolioProgressData} />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-lg font-semibold mb-4">Your Holdings</h2>
                            <table className="min-w-full bg-white border border-gray-300 shadow-md">
                                {/* ... your existing table code ... */}
                            </table>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="text-lg font-semibold mb-4">Stock Distribution</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                {/* ... your existing PieChart code ... */}
                            </ResponsiveContainer>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Portfolio;