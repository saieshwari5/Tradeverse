import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Portfolio from "./pages/Portfolio";
import Orders from "./pages/OrderPage";
import Profile from "./pages/Profile";
import LeaderboardPage from "./pages/LeaderboardPage"; // ADD THIS LINE

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/leaderboard" element={<LeaderboardPage />} />  {/* ADD THIS LINE */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

