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