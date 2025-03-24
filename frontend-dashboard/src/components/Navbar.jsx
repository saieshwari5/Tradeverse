// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-800 p-4">
//             <ul className="flex space-x-4 text-white">
//                 <li><Link to="/">Dashboard</Link></li>
//                 <li><Link to="/portfolio">Portfolio</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <ul className="flex space-x-4 text-white">
//         <li>
//           <Link to="/">Dashboard</Link>
//         </li>
//         <li>
//           <Link to="/portfolio">Portfolio</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 text-white">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li> {/* ADD THIS LINE */}
            </ul>
        </nav>
    );
};

export default Navbar;
