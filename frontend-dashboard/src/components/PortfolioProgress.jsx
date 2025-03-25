import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const PortfolioProgress = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        // Make sure your Flask backend is running and CORS is enabled
        const response = await axios.get(
          "http://127.0.0.1:5000/api/portfolio_progress",
          { withCredentials: true }
        );
        setPortfolioData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching portfolio progress:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) return <div>Loading portfolio progress...</div>;
  if (error)
    return <div style={{ color: "red" }}>Error: {error.message}</div>;

  return (
    <div className="portfolio-progress">
      <h2>Portfolio Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={portfolioData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioProgress;
