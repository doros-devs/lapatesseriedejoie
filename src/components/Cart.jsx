import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OrderForm from './OrderForm';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.selectedPrice.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-soft-red mb-4">Your Cart is Empty</h2>
        <Link to="/shop" className="text-pale-pink hover:text-light-rose">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {!showOrderForm ? (
        <>
          <h2 className="text-2xl font-bold mb-8 text-soft-red">Your Cart</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-light-gray">{item.selectedPrice.label}</p>
                  <p className="font-semibold">KES {item.selectedPrice.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-light-rose hover:text-soft-red"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: KES {total}</p>
            <button 
              onClick={() => setShowOrderForm(true)}
              className="inline-block mt-4 bg-pale-pink hover:bg-light-rose text-white px-6 py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <OrderForm 
          cartItems={cartItems} 
          total={total} 
          onBack={() => setShowOrderForm(false)} 
        />
      )}
    </div>
  );
};

export default Cart; 