// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//         credentials: 'include',
//       });

//       if (response.ok) {
//         setIsAuthenticated(true); // Update authentication state
//         navigate("/"); // Redirect to the dashboard
//       } else {
//         console.error('Login failed');
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ setIsAuthenticated, setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/auth/login', {
          method: 'GET',
          credentials: 'include',
        });

        const data = await response.json();
        
        if (response.ok && data.authenticated) {
          setIsAuthenticated(true);
          setCurrentUser(data.user);
          navigate("/"); // Redirect if already authenticated
        }
      } catch (err) {
        console.error("Auth check error:", err);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthStatus();
  }, [navigate, setIsAuthenticated, setCurrentUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Update authentication state and user data
      setIsAuthenticated(true);
      setCurrentUser(data.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  if (isCheckingAuth) {
    return <div className="loading">Checking authentication status...</div>;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;