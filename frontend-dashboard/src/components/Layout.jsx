import React from "react";
import { useNavigate } from "react-router-dom"; // Your layout styles

const Layout = ({ children, currentUser, setIsAuthenticated, setCurrentUser }) => {
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
    <div className="layout">
      <header className="header">
        <nav>
          {/* Your navigation links */}
          {currentUser && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </nav>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;