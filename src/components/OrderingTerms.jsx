import { useState } from "react";

const OrderingTerms = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <button
        className="w-full flex justify-between items-center text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Ordering & Delivery Terms</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="mt-4 space-y-2 text-sm">
          <p>• Orders must be made 72 hours in advance</p>
          <p>• Sunday deliveries will be done on Saturday</p>
          <p>• 70% down payment required to begin cake preparation</p>
          <p>• Delivery charges apply from Chunga Mali, Nyathuna</p>
          <p>• Prices exclude additional items (toppers, flowers, etc.)</p>
          <p>• Final payment due on collection day</p>
          <p>• Operating Hours: Monday to Saturday, 10 AM - 4 PM</p>
        </div>
      )}
    </div>
  );
};

export default OrderingTerms; 