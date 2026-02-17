import React, { useContext, useState } from 'react';
import { contextApi } from '../components_1/Context';

const Cart = () => {
  const { cart, removeFromCart, setView, isUserLoggedIn } = useContext(contextApi);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty!</h2>
        <button
          onClick={() => setView('home')}
          className="px-6 py-2 bg-yellow-400 text-white rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Browse Foods
        </button>
      </div>
    );

  const handleProceed = () => {
    if (!isUserLoggedIn) {
      setShowLoginPrompt(true);
    } else {
      // Proceed to checkout logic here
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cart.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between mb-4 border-b pb-2">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">₹{item.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between mt-6 font-bold text-xl text-gray-800">
        <span>Total:</span>
        <span>₹{total}</span>
      </div>
      <button
        className="mt-6 w-full bg-yellow-400 text-white py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
        onClick={handleProceed}
      >
        Proceed to Checkout
      </button>

      {/* Login Prompt */}
      {showLoginPrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Login Required</h3>
            <p className="mb-6 text-gray-600">You must be logged in to proceed to checkout.</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition"
              onClick={() => { setView('login'); setShowLoginPrompt(false); }}
            >
              Go to Login
            </button>
            <button
              className="ml-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowLoginPrompt(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
