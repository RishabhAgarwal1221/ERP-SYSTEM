// components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Assume you have some data for key metrics
  const totalProducts = 100;
  const totalOrders = 50;

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Key Metrics:</h3>
        <p>Total Number of Products: {totalProducts}</p>
        <p>Total Number of Orders: {totalOrders}</p>
      </div>
      <div>
        <h3>Quick Navigation:</h3>
        <ul>
          <li>
            <Link to="/products">Manage Products</Link>
          </li>
          <li>
            <Link to="/orders">Manage Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
