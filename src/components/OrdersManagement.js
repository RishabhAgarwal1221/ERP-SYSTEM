// components/OrdersManagement.js
import React, { useState } from 'react';

// Mock data for orders
const ordersData = [
  { id: 1, customerName: 'John Doe', orderDate: '2024-03-08', status: 'Pending' },
  { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-09', status: 'Completed' },
  // Add more mock data as needed
];

function OrdersManagement() {
  // State to store orders data
  const [orders, setOrders] = useState(ordersData);

  // Function to delete an order by ID
  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th> {/* For optional features */}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                {/* Optional: Add buttons for viewing details, updating status, and deleting */}
                <button onClick={() => console.log(`View order details for ID: ${order.id}`)}>View Details</button>
                <button onClick={() => console.log(`Update status for order ID: ${order.id}`)}>Update Status</button>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;
