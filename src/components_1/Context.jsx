import React, { createContext, useState } from 'react';
import Header from './Header';

// Create the context
export const contextApi = createContext();

const Context = ({ children }) => {
  // State variables
  const [bgColor, setBgColor] = useState('bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [view, setView] = useState('home'); // 'home', 'login', 'register', 'cart', 'details'
  const [cart, setCart] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  // Auth handlers
  const handleLoginSuccess = () => {
    setIsUserLoggedIn(true);
    setView('home');
  };

  const handleRegisterSuccess = () => {
    setIsUserLoggedIn(true);
    setView('home');
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setView('home');
  };

  // Navigation
  const handleHomeClick = () => {
    setView('home');
  };

  // Cart handlers
  const addToCart = (food) => {
    setCart(prev => [...prev, food]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Context value
  const contextValue = {
    bgColor,
    setBgColor,
    isUserLoggedIn,
    setIsUserLoggedIn,
    view,
    setView,
    handleLoginSuccess,
    handleRegisterSuccess,
    handleLogout,
    handleHomeClick,
    cart,
    addToCart,
    removeFromCart,
    selectedFood,
    setSelectedFood,
  };

  return (
    <contextApi.Provider value={contextValue}>
      <div className={`${bgColor} min-h-screen`}>
        <Header />
        {children}
      </div>
    </contextApi.Provider>
  );
};

export default Context;
