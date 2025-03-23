// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
//       <h2 className="text-xl font-bold mb-6">Trading Dashboard</h2>
//       <nav>
//         <ul className="space-y-4">
//           <li>
//             <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/portfolio" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link to="/orders" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Orders
//             </Link>
//           </li>
//           <li>
//             <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Profile
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
//       <h2 className="text-xl font-bold mb-6">Trading Dashboard</h2>
//       <nav>
//         <ul className="space-y-4">
//           <li>
//             <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/portfolio" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link to="/orders" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Orders
//             </Link>
//           </li>
//           <li>
//             <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700 rounded">
//               Profile
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div style={{
//       position: "fixed",  // ✅ Fix Sidebar position
//       height: "100vh",     // ✅ Full height
//       width: "250px",      // ✅ Set width
//       backgroundColor: "gray",
//       padding: "20px",
//       top: 0,              // ✅ Align with Navbar
//       left: 0
//     }}>
//       <h2 style={{ color: "white" }}>Trading Dashboard</h2>
//       <nav>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           <li><Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link></li>
//           <li><Link to="/portfolio" style={{ color: "white" }}>Portfolio</Link></li>
//           <li><Link to="/orders" style={{ color: "white" }}>Orders</Link></li>
//           <li><Link to="/profile" style={{ color: "white" }}>Profile</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
      
//       <ul>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/portfolio">Portfolio</Link></li>
//         <li><Link to="/orders">Orders</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// import React from "react";
// import "./Sidebar.css"; // Make sure this CSS file is linked

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       {/* <h2>🔥 Tradeverse Dashboard 🔥</h2> */}
//       <ul>
//         <li>
//           <a href="/dashboard">
//             <i className="fas fa-chart-line"></i> Dashboard
//           </a>
//         </li>
//         <li>
//           <a href="/portfolio">
//             <i className="fas fa-briefcase"></i> Portfolio
//           </a>
//         </li>
//         <li>
//           <a href="/orders">
//             <i className="fas fa-shopping-cart"></i> Orders
//           </a>
//         </li>
//         <li>
//           <a href="/profile">
//             <i className="fas fa-user"></i> Profile
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link } from "react-router-dom"; //  ✅ Import Link
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Tradeverse</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>  {/* ✅ Use Link */}
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>  {/* ✅ Use Link */}
        </li>
        <li>
          <Link to="/orders">Orders</Link>  {/* ✅ Use Link */}
        </li>
        <li>
          <Link to="/profile">Profile</Link>  {/* ✅ Use Link */}
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>  {/* ✅ Add Link to Leaderboard */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

