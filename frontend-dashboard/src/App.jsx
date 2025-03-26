// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./pages/Portfolio";
// import Orders from "./pages/OrderPage";
// import Profile from "./pages/Profile";
// import LeaderboardPage from "./pages/LeaderboardPage"; // ADD THIS LINE

// const App = () => {
//     return (
//         <Router>
//             <Layout>
//                 <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/portfolio" element={<Portfolio />} />
//                     <Route path="/orders" element={<Orders />} />
//                     <Route path="/profile" element={<Profile />} />
//                     <Route path="/leaderboard" element={<LeaderboardPage />} />  {/* ADD THIS LINE */}
//                 </Routes>
//             </Layout>
//         </Router>
//     );
// };

// export default App;
//----------------------------------------------------------------------------------
// //used for working
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./pages/Portfolio";
// import Orders from "./pages/OrderPage";
// import Profile from "./pages/Profile";
// import LeaderboardPage from "./pages/LeaderboardPage";

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/leaderboard" element={<LeaderboardPage />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

//----------------------------------------------------------------------------------



/*
import React from "react";
import Portfolio from "./pages/Portfolio";

const sampleData = [
  { name: "Stock A", description: "Investment in Stock A" },
  { name: "Stock B", description: "Investment in Stock B" }
];

const App = () => {
  return (
    <div>
      <Portfolio portfolioData={sampleData} />  {/* Ensure prop is passed! }*//*
    </div>
  );
};

export default App;
// */
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./pages/Portfolio";
// import Orders from "./pages/OrderPage";
// import Profile from "./pages/Profile";
// import LeaderboardPage from "./pages/LeaderboardPage";

// const App = () => {
//   const [portfolioData, setPortfolioData] = useState([]);

//   useEffect(() => {
//     const fetchPortfolioData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/portfolio_progress', {
//           credentials: 'include'
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch portfolio data');
//         }
        
//         const data = await response.json();
//         setPortfolioData(data);
//       } catch (error) {
//         console.error('Error fetching portfolio data:', error);
//       }
//     };

//     fetchPortfolioData();
//   }, []);

//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Dashboard portfolioData={portfolioData} />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/leaderboard" element={<LeaderboardPage />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

// below are updated and working

// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./pages/Portfolio";
// import Orders from "./pages/OrderPage";
// import Profile from "./pages/Profile";
// import LeaderboardPage from "./pages/LeaderboardPage";
// import Login from "./pages/Login";

// const App = () => {
//   const [portfolioData, setPortfolioData] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/auth/check', {
//           method: 'GET',
//           credentials: 'include',
//         });

//         if (response.ok) {
//           setIsAuthenticated(true);
//         } else {
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error('Error checking authentication:', error);
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   useEffect(() => {
//     if (isAuthenticated) {
//       const fetchPortfolioData = async () => {
//         try {
//           const response = await fetch('http://127.0.0.1:5000/api/progress/portfolio_progress', {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//           });

//           if (!response.ok) {
//             throw new Error('Failed to fetch portfolio data');
//           }

//           const data = await response.json();
//           setPortfolioData(data);
//         } catch (error) {
//           console.error('Error fetching portfolio data:', error);
//         }
//       };

//       fetchPortfolioData();
//     }
//   }, [isAuthenticated]);

//   return (
//     isAuthenticated ? (
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Dashboard portfolioData={portfolioData} />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/leaderboard" element={<LeaderboardPage />} />
//         </Routes>
//       </Layout>
//     ) : (
//       <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     )
//   );
// };

// export default App;

//-----------------------------------------------
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Portfolio from "./pages/Portfolio";
import Orders from "./pages/OrderPage";
import Profile from "./pages/Profile";
import LeaderboardPage from "./pages/LeaderboardPage";
import Login from "./pages/Login";

const App = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/auth/login', {
          method: 'GET',
          credentials: 'include',
        });

        const data = await response.json();
        
        if (response.ok && data.authenticated) {
          setIsAuthenticated(true);
          setCurrentUser(data.user);
        } else {
          setIsAuthenticated(false);
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          // Fetch portfolio data
          const portfolioResponse = await fetch(
            'http://127.0.0.1:5000/api/progress/portfolio_progress',
            {
              method: 'GET',
              credentials: 'include',
            }
          );

          if (portfolioResponse.ok) {
            const portfolioData = await portfolioResponse.json();
            setPortfolioData(portfolioData);
          }

          // You can add more data fetching here as needed
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {isAuthenticated ? (
        <Route 
          element={
            <Layout 
              currentUser={currentUser}
              setIsAuthenticated={setIsAuthenticated}
              setCurrentUser={setCurrentUser}
            />
          }
        >
          <Route 
            path="/" 
            element={
              <Dashboard 
                portfolioData={portfolioData} 
                currentUser={currentUser} 
              />
            } 
          />
          <Route 
            path="/portfolio" 
            element={
              <Portfolio 
                currentUser={currentUser} 
              />
            } 
          />
          <Route 
            path="/orders" 
            element={
              <Orders 
                currentUser={currentUser} 
              />
            } 
          />
          <Route 
            path="/profile" 
            element={
              <Profile 
                currentUser={currentUser} 
              />
            } 
          />
          <Route 
            path="/leaderboard" 
            element={
              <LeaderboardPage 
                currentUser={currentUser} 
              />
            } 
          />
        </Route>
      ) : (
        <>
          <Route 
            path="/login" 
            element={
              <Login 
                setIsAuthenticated={setIsAuthenticated} 
                setCurrentUser={setCurrentUser} 
              />
            } 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default App;