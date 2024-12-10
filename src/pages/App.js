import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import Contact from './Contact';
import NavigationBar from '../components/Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from '../components/Dashboard'; // Corrected import path for Dashboard

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Corrected syntax */}
      </Routes>
    </>
  );
};

export default App;
