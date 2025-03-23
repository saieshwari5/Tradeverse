// // import React from "react";
// // import Orders from "../components/Orders";
// // import Dashboard from "../components/Dashboard";  // Default import
// // import "../styles/Dashboard.css";

// // const OrdersPage = () => {
// //   return (
// //     <div>
// //       <Dashboard />
// //       <Orders />
// //     </div>
// //   );
// // };

// // export default OrdersPage;


// import React from "react";
// import Orders from "../components/Orders"; //  ✅ Import Orders component

// const OrderPage = () => {
//   return (
//     <div>
//       <Orders /> {/* ✅ Only render the Orders component */}
//     </div>
//   );
// };

// export default OrderPage;
import React from "react";
import Orders from "../components/Orders";
import "../styles/Dashboard.css"; //  Keep this import if the Orders component relies on these styles

const OrdersPage = () => {
  return (
    <div>
      <Orders /> 
    </div>
  );
};

export default OrdersPage;