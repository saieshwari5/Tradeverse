
import React from "react";
import { Link } from "react-router-dom";   
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Tradeverse</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>  
        </li>
        <li>
          <Link to="/orders">Orders</Link>  
        </li>
        <li>
          <Link to="/profile">Profile</Link> 
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>  
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
