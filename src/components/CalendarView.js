// components/CalendarView.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';

// Mock data for orders with delivery dates
const ordersData = [
  { id: 1, orderDate: '2024-03-08', deliveryDate: '2024-03-12', customerName: 'John Doe', status: 'Pending' },
  { id: 2, orderDate: '2024-03-10', deliveryDate: '2024-03-15', customerName: 'Jane Smith', status: 'Completed' },
  // Add more mock data as needed
];

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orders, setOrders] = useState(ordersData);

  // Function to filter orders based on selected date
  const filterOrdersByDate = (date) => {
    const filteredOrders = orders.filter(order => {
      const deliveryDate = new Date(order.deliveryDate);
      return deliveryDate.toDateString() === date.toDateString();
    });
    return filteredOrders;
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <h3>Orders for {selectedDate.toDateString()}:</h3>
      <ul>
        {filterOrdersByDate(selectedDate).map(order => (
          <li key={order.id}>
            <strong>Order ID:</strong> {order.id}, <strong>Customer Name:</strong> {order.customerName}, <strong>Status:</strong> {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarView;
