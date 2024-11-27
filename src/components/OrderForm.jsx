import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';

const OrderForm = ({ cartItems, total, onBack }) => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cakeFlavor: cartItems.map(item => item.name).join(', '),
    numberOfKgs: '',
    messageOnCake: '',
    deliveryDate: '',
    deliveryTime: '',
    mobileNumber: ''
  });

  const questions = [
    { id: 1, label: "What's your name?", field: 'name', type: 'text' },
    { id: 2, label: "What's your email address?", field: 'email', type: 'email' },
    { id: 3, label: "Message on the cake?", field: 'messageOnCake', type: 'text' },
    { id: 4, label: "What's your preferred delivery date?", field: 'deliveryDate', type: 'date' },
    { id: 5, label: "What time would you like it delivered?", field: 'deliveryTime', type: 'time' },
    { id: 6, label: "What's your mobile number?", field: 'mobileNumber', type: 'tel' }
  ];

  const currentQuestion = questions[step - 1];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Updated Paystack configuration
  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: total * 100, // Convert to cents - Paystack expects amount in kobo/cents
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    currency: 'KES', // Add currency specification
    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money'], // Specify payment channels
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: formData.name
        },
        {
          display_name: "Order Details",
          variable_name: "order_details",
          value: formData.cakeFlavor
        },
        {
          display_name: "Delivery Date",
          variable_name: "delivery_date",
          value: formData.deliveryDate
        },
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: formData.mobileNumber
        }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = () => {
    // Validate required fields before initializing payment
    if (!formData.email || !formData.name) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      initializePayment(onSuccess, onClose);
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Payment initialization failed. Please try again.');
    }
  };

  const onSuccess = (reference) => {
    console.log('Payment successful:', reference);
    try {
      handleFinalSubmit(reference);
    } catch (error) {
      console.error('Error processing successful payment:', error);
      alert('Payment was successful but order processing failed. Please contact support.');
    }
  };

  const onClose = () => {
    console.log('Payment cancelled by user');
    // Optionally show a message to the user
    alert('Payment was cancelled. You can try again when ready.');
  };

  const handleFinalSubmit = async (paymentReference) => {
    try {
      const orderData = {
        ...formData,
        cartItems,
        total,
        paymentReference,
        orderDate: new Date().toISOString(),
        status: 'paid'
      };

      // Get existing orders from localStorage or initialize empty array
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      
      // Add new order to the array
      const updatedOrders = [...existingOrders, orderData];
      
      // Save updated orders back to localStorage
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      
      // Clear the cart
      clearCart();
      
      // Show success message
      alert('Order placed successfully! Thank you for your purchase.');
      
      // Redirect to cart page (which will show empty cart)
      navigate('/cart');
    } catch (error) {
      console.error('Error saving order:', error);
      alert('There was an error saving your order. Please contact support.');
    }
  };

  const handleBackToCart = () => {
    onBack();
    setStep(1);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <button
        onClick={handleBackToCart}
        className="mb-6 text-light-rose hover:text-soft-red flex items-center gap-2"
      >
        ← Back to Cart
      </button>

      <div className="mb-8">
        <div className="h-2 bg-pale-pink rounded-full">
          <div 
            className="h-2 bg-light-rose rounded-full transition-all duration-500"
            style={{ width: `${(step / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-soft-red mb-4">
          {currentQuestion.label}
        </h2>
        <input
          type={currentQuestion.type}
          name={currentQuestion.field}
          value={formData[currentQuestion.field]}
          onChange={handleInputChange}
          className="w-full p-3 border border-pale-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-light-rose"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className="px-6 py-2 bg-dusty-rose text-white rounded-lg disabled:opacity-50 hover:bg-light-rose transition-colors"
        >
          Previous
        </button>
        <button
          onClick={step === questions.length ? handleSubmit : handleNext}
          className="px-6 py-2 bg-pale-pink text-white rounded-lg hover:bg-light-rose transition-colors"
        >
          {step === questions.length ? 'Proceed to Payment' : 'Next'}
        </button>
      </div>

      <div className="mt-8 text-sm text-light-gray">
        <h3 className="font-semibold mb-2">Please Note:</h3>
        <ul className="space-y-1">
          <li>• Orders must be made 72 hours in advance</li>
          <li>• Sunday deliveries will be done on Saturday</li>
          <li>• 70% down payment required to begin cake preparation</li>
          <li>• Delivery charges apply from Chunga Mali, Nyathuna</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4">Order Summary:</h3>
        {cartItems.map(item => (
          <div key={item.id} className="text-sm text-light-gray mb-2">
            {item.name} - {item.selectedPrice.label} - KES {item.selectedPrice.price}
          </div>
        ))}
        <div className="font-semibold mt-2">Total: KES {total}</div>
      </div>
    </div>
  );
};

OrderForm.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default OrderForm; 