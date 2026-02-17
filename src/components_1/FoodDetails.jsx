import React, { useContext } from 'react';
import { contextApi } from './Context';

const FoodDetails = () => {
  const { selectedFood, addToCart, setView } = useContext(contextApi);

  if (!selectedFood) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-xl">
        <img
          src={selectedFood.image}
          alt={selectedFood.name}
          className="w-60 h-60 object-cover rounded-full border-4 border-yellow-400 mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedFood.name}</h2>
        <p className="text-gray-700 mb-2">{selectedFood.details}</p>
        <p className="text-gray-600 mb-2">{selectedFood.desc}</p>
        <div className="flex gap-6 mb-4">
          <span className="text-yellow-500 font-bold">{selectedFood.rating}★</span>
          <span className="text-gray-500">{selectedFood.time}</span>
          <span className="text-xl text-yellow-500 font-bold">₹{selectedFood.price}</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => addToCart(selectedFood)}
            className="px-6 py-2 bg-yellow-400 text-white rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            Add to cart
          </button>
          <button
            onClick={() => setView('home')}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-bold hover:bg-gray-400 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
