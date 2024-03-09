// components/ProductsManagement.js
import React, { useState } from 'react';

function ProductsManagement() {
  // Mock data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, quantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, quantity: 50 },
    // Add more products as needed
  ]);

  // State for form input
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit for adding a new product
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1, // Generate unique ID (replace with server-generated ID in a real app)
      ...formData
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', category: '', price: '', quantity: '' }); // Clear form
  };

  // Handle product deletion
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Products Management</h2>
      {/* Form for adding new product */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
      
      {/* Display products list */}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price} - {product.quantity} in stock
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsManagement;
