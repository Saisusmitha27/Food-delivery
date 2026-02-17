import React, { useContext } from 'react';
import { contextApi } from './components_1/Context';
import LoginForm from './components_1/LoginForm';
import RegisterForm from './components_1/RegisterForm';
import Home from './components_1/Home';
import Cart from './components_1/Cart';
import FoodDetails from './components_1/FoodDetails';


const App = () => {
  const {
    view,
    handleLoginSuccess,
    handleRegisterSuccess
  } = useContext(contextApi);

  return (
    <>
      {view === 'home' && <Home />}
      {view === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {view === 'register' && <RegisterForm onRegisterSuccess={handleRegisterSuccess} />}
      {view === 'cart' && <Cart />}
      {view === 'details' && <FoodDetails />}
    </>
  );
};

export default App;
