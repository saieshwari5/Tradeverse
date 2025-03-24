import axios from "axios";

// Set the base URL for Flask API
const API_BASE_URL = "http://127.0.0.1:5000/api";

// Function to fetch portfolio data
export const fetchPortfolioProgress = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/portfolio_progress`, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return [];
  }
};

// Function to fetch leaderboard data (if needed)
export const fetchLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/leaderboard`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
};
