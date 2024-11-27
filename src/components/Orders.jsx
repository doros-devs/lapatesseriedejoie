import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-soft-red mb-4">No Orders Yet</h2>
        <Link to="/shop" className="text-pale-pink hover:text-light-rose">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8 text-soft-red">Your Orders</h2>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Order Date: {new Date(order.orderDate).toLocaleDateString()}</h3>
              <span className="text-pale-pink">Status: {order.status}</span>
            </div>
            <div className="space-y-2">
              {order.cartItems.map((item, idx) => (
                <div key={idx} className="text-sm text-light-gray">
                  {item.name} - {item.selectedPrice.label} - KES {item.selectedPrice.price}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="font-semibold">Total: KES {order.total}</p>
              <p className="text-sm text-light-gray mt-2">
                Delivery to: {order.name} ({order.mobileNumber})
              </p>
              <p className="text-sm text-light-gray">
                Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()} at {order.deliveryTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders; 