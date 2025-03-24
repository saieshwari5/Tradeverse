import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  },);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      //  ✅ Replace with the actual API endpoint for orders
      const response = await fetch("YOUR_API_ENDPOINT_FOR_ORDERS");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOrders(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error fetching orders: {error.message}</div>;
  }

  return (
    <div>
      <h2>Orders</h2>
      {orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Stock Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.stockType}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;

