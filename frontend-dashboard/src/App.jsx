// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // // // import Sidebar from "./components/Sidebar";
// // // // // import Dashboard from "./components/Dashboard";
// // // // // import Profile from "./pages/Profile";
// // // // // import Orders from "./pages/OrderPage";
// // // // // import Portfolio from "./pages/Portfolio";


// // // // // function App() {
// // // // //   return (
// // // // //     <Router>
// // // // //       <div className="flex">
// // // // //         <Sidebar />
// // // // //         <div className="flex-1 p-6">
// // // // //           <Routes>
// // // // //             <Route path="/dashboard" element={<Dashboard />} />
// // // // //             <Route path="/portfolio" element={<Portfolio />} />
// // // // //             <Route path="/orders" element={<Orders />} />
// // // // //             <Route path="/profile" element={<Profile />} />
// // // // //             {/* Redirect unknown paths to /dashboard */}
// // // // //             <Route path="*" element={<Navigate to="/dashboard" />} />
// // // // //           </Routes>
// // // // //         </div>
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // // import Sidebar from "./components/Sidebar"; 
// // // // // import Dashboard from "./components/Dashboard";
// // // // // import Profile from "./pages/Profile";
// // // // // import Orders from "./pages/OrderPage";
// // // // // import Portfolio from "./pages/Portfolio";
// // // // // import Home from "./pages/Home";
// // // // // const App = () => {
// // // // //   return (
// // // // //     <Router>
// // // // //       <div className="flex">
// // // // //         <Sidebar />
// // // // //         <div className="flex-1 p-6">
// // // // //           <Routes>
// // // // //             <Route path="/" element={<Home />} />  {/* ✅ Default Route */}
// // // // //             <Route path="/dashboard" element={<Dashboard />} />
// // // // //             <Route path="/portfolio" element={<Portfolio />} />
// // // // //             <Route path="/orders" element={<Orders />} />
// // // // //             <Route path="/profile" element={<Profile />} />
// // // // //           </Routes>
// // // // //         </div>
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // // import Layout from "./components/Layout";
// // // // // import Dashboard from "./components/Dashboard";
// // // // // import Portfolio from "./pages/Portfolio";
// // // // // import Orders from "./pages/OrderPage";
// // // // // import Profile from "./pages/Profile";

// // // // // const App = () => {
// // // // //   return (
// // // // //     <Router>
// // // // //       <Layout>
// // // // //         <Routes>
// // // // //           <Route path="/dashboard" element={<Dashboard />} />
// // // // //           <Route path="/portfolio" element={<Portfolio />} />
// // // // //           <Route path="/orders" element={<Orders />} />
// // // // //           <Route path="/profile" element={<Profile />} />
// // // // //         </Routes>
// // // // //       </Layout>
// // // // //     </Router>
// // // // //   );
// // // // // };

// // // // // export default App;



// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // // import Layout from "./components/Layout";
// // // // // import Dashboard from "./components/Dashboard";
// // // // // import Portfolio from "./pages/Portfolio";
// // // // // import Orders from "./pages/OrderPage";
// // // // // import Profile from "./pages/Profile";
// // // // // import LeaderboardPage from "./pages/LeaderboardPage"; //  ✅ Import LeaderboardPage

// // // // // const App = () => {
// // // // //   return (
// // // // //     <Router>
// // // // //       <Layout>
// // // // //         <Routes>
// // // // //           <Route path="/dashboard" element={<Dashboard />} />
// // // // //           <Route path="/portfolio" element={<Portfolio />} />
// // // // //           <Route path="/orders" element={<Orders />} />
// // // // //           <Route path="/profile" element={<Profile />} />
// // // // //           <Route path="/leaderboard" element={<LeaderboardPage />} />  {/* ✅ Route for Leaderboard */}
// // // // //         </Routes>
// // // // //       </Layout>
// // // // //     </Router>
// // // // //   );
// // // // // };

// // // // // export default App;


// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import Layout from "./components/Layout";
// // // // import Dashboard from "./components/Dashboard";
// // // // import Portfolio from "./pages/Portfolio";
// // // // import Orders from "./pages/OrderPage"; //  ✅ Import OrderPage
// // // // import Profile from "./pages/Profile";
// // // // import LeaderboardPage from "./pages/LeaderboardPage";

// // // // const App = () => {
// // // //   return (
// // // //     <Router>
// // // //       <Layout>
// // // //         <Routes>
// // // //           <Route path="/dashboard" element={<Dashboard />} />
// // // //           <Route path="/portfolio" element={<Portfolio />} />
// // // //           <Route path="/orders" element={<Orders />} /> {/* ✅ Correct route */}
// // // //           <Route path="/profile" element={<Profile />} />
// // // //           <Route path="/leaderboard" element={<LeaderboardPage />} />
// // // //         </Routes>
// // // //       </Layout>
// // // //     </Router>
// // // //   );
// // // // };

// // // // export default App;


// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Layout from "./components/Layout";
// // // import Dashboard from "./components/Dashboard";
// // // import Portfolio from "./pages/Portfolio";
// // // import Orders from "./pages/OrderPage";
// // // import Profile from "./pages/Profile";
// // // import LeaderboardPage from "./pages/LeaderboardPage";

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <Layout>
// // //         <Routes>
// // //           <Route path="/dashboard" element={<Dashboard />} />
// // //           <Route path="/portfolio" element={<Portfolio />} />
// // //           <Route path="/orders" element={<Orders />} />
// // //           <Route path="/profile" element={<Profile />} />
// // //           <Route path="/leaderboard" element={<LeaderboardPage />} />
// // //         </Routes>
// // //       </Layout>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Layout from "./components/Layout";
// // import Dashboard from "./components/Dashboard";
// // import Portfolio from "./pages/Portfolio";
// // import Orders from "./pages/OrderPage";
// // import Profile from "./pages/Profile";
// // import LeaderboardPage from "./pages/LeaderboardPage";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Layout>
// //         <Routes>
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/portfolio" element={<Portfolio />} />
// //           <Route path="/orders" element={<Orders />} />
// //           <Route path="/profile" element={<Profile />} />
// //           <Route path="/leaderboard" element={<LeaderboardPage />} />
// //         </Routes>
// //       </Layout>
// //     </Router>
// //   );
// // };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./pages/Portfolio";
// import OrdersPage from "./pages/OrderPage";
// import Profile from "./pages/Profile";
// import LeaderboardPage from "./pages/LeaderboardPage";

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Navigate to="/dashboard" />} />  {/* ✅ Default Route */}
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/orders" element={<OrdersPage />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/leaderboard" element={<LeaderboardPage />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;


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