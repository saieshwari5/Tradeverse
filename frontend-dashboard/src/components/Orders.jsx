// // // import React, { useEffect, useState } from "react";

// // // const Orders = ({ userId }) => {
// // //   const [orders, setOrders] = useState([]);

// // //   useEffect(() => {
// // //     fetchOrders();
// // //   }, []);

// // //   const fetchOrders = async () => {
// // //     try {
// // //       const response = await fetch(`http://localhost:5000/api/orders/${userId}`);
// // //       const data = await response.json();
// // //       setOrders(data);
// // //     } catch (error) {
// // //       console.error("Error fetching orders:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-4 bg-white rounded-lg shadow-md">
// // //       <h2 className="text-xl font-semibold mb-4">Orders</h2>
// // //       <table className="w-full border-collapse border border-gray-300">
// // //         <thead>
// // //           <tr className="bg-gray-100">
// // //             <th className="border p-2">Stock</th>
// // //             <th className="border p-2">Type</th>
// // //             <th className="border p-2">Quantity</th>
// // //             <th className="border p-2">Price</th>
// // //             <th className="border p-2">Status</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {orders.length > 0 ? (
// // //             orders.map((order, index) => (
// // //               <tr key={index} className="text-center">
// // //                 <td className="border p-2">{order.symbol}</td>
// // //                 <td className="border p-2">{order.order_type}</td>
// // //                 <td className="border p-2">{order.quantity}</td>
// // //                 <td className="border p-2">${order.price.toFixed(2)}</td>
// // //                 <td className="border p-2">{order.status}</td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="5" className="p-4 text-center">
// // //                 No orders found.
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default Orders;

// // import React, { useEffect, useState } from "react";

// // const Orders = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchOrders();
// //   },);

// //   const fetchOrders = async () => {
// //     setIsLoading(true);
// //     try {
// //       //  ✅ Replace with the actual API endpoint for orders
// //       const response = await fetch("YOUR_API_ENDPOINT_FOR_ORDERS");
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       setOrders(data);
// //       setIsLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching orders:", error);
// //       setError(error);
// //       setIsLoading(false);
// //     }
// //   };

// //   if (isLoading) {
// //     return <div>Loading orders...</div>;
// //   }

// //   if (error) {
// //     return <div>Error fetching orders: {error.message}</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Orders</h2>
// //       {orders.length > 0 ? (
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Stock Type</th>
// //               <th>Quantity</th>
// //               <th>Price</th>
// //               <th>Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {orders.map((order) => (
// //               <tr key={order.id}>
// //                 <td>{order.stockType}</td>
// //                 <td>{order.quantity}</td>
// //                 <td>{order.price}</td>
// //                 <td>{order.status}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       ) : (
// //         <p>No orders found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Orders;


// import React, { useEffect, useState } from "react";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   },);

//   const fetchOrders = async () => {
//     setIsLoading(true);
//     try {
//       //  ✅ Replace with the actual API endpoint for orders
//       const response = await fetch("YOUR_API_ENDPOINT_FOR_ORDERS");
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setOrders(data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setError(error);
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading orders...</div>;
//   }

//   if (error) {
//     return <div>Error fetching orders: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Orders</h2>
//       {orders.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Stock Type</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.stockType}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.price}</td>
//                 <td>{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default Orders;


import React, { useEffect, useState } from "react";

const Orders = ({ userId }) => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetchOrders();
  },);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${userId}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Stock</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{order.symbol}</td>
                <td className="border p-2">{order.order_type}</td>
                <td className="border p-2">{order.quantity}</td>
                <td className="border p-2">${order.price.toFixed(2)}</td>
                <td className="border p-2">{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
