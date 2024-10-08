//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import AddProduct from "./components/AddProduct"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;