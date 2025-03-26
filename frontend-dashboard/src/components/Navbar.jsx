import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, setIsAuthenticated, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setIsAuthenticated(false);
        setCurrentUser(null);
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/profile">Profile</Link>
        </div>
        
        {currentUser && (
          <div className="user-controls">
            <span className="welcome-message">Welcome, {currentUser.username}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;