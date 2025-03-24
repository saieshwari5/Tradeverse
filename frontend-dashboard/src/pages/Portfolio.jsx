import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch portfolio");
        setLoading(false);
      });
  },);

  const pieData = portfolio.map(stock => ({
    name: stock.stock_symbol,
    value: stock.total_value
  }));

  const lineData = portfolio.map((stock, index) => ({
    name: stock.stock_symbol,
    value: stock.total_value,
    index
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Portfolio Table */}
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">Stock Symbol</th>
                  <th className="py-2 px-4 border">Quantity</th>
                  <th className="py-2 px-4 border">Current Value</th>
                  <th className="py-2 px-4 border">Total Value</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((stock, index) => (
                  <tr key={index} className="text-center border-t">
                    <td className="py-2 px-4 border">{stock.stock_symbol}</td>
                    <td className="py-2 px-4 border">{stock.quantity}</td>
                    <td className="py-2 px-4 border">${stock.current_value.toFixed(2)}</td>
                    <td className="py-2 px-4 border">${stock.total_value.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Portfolio Pie Chart */}
            <div className="w-full md:w-1/3 p-4">
              <h2 className="text-lg font-semibold mb-2">Stock Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Portfolio Line Chart */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">Portfolio Value Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;