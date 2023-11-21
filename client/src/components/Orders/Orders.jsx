import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://d-and-j-diner.onrender.com/orders')
      .then(response => {
        setOrders(response.data.orders);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="orders-container">
      <h2>Todas las ordenes</h2>
      <table>
        <thead>
          <tr>
            <th>Calle</th>
            <th>Estado</th>
            <th>Correo</th>
            <th>Orden</th>
            <th>Pago</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.barangay}</td>
              <td>{order.purok}</td>
              <td>{order.email}</td>
              <td>{order.orders.join(', ')}</td>
              <td>{order.payment}</td>
              <td>{order.total}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
