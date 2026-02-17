import React, { useContext } from 'react';
import { contextApi } from './Context';

const Header = () => {
  const {
    isUserLoggedIn,
    handleLogout,
    setView,
    handleHomeClick,
    cart
  } = useContext(contextApi);

  return (
    <header className="flex justify-between items-center bg-black bg-opacity-80 p-4 shadow-lg">
      <p className="text-yellow-400 text-2xl font-bold cursor-pointer" onClick={handleHomeClick}>
        Foodie<span className="text-white">Express</span>
      </p>
      <nav className="flex gap-4 items-center">
        <button
          onClick={() => setView('cart')}
          className="relative text-white border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
        >
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">{cart.length}</span>
          )}
        </button>
        {isUserLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => setView('login')}
              className="text-white border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
            >
              Login
            </button>
            <button
              onClick={() => setView('register')}
              className="text-white border border-yellow-400 rounded-full px-4 py-1 hover:bg-yellow-400 hover:text-black transition"
            >
              Register
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
