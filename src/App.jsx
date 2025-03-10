import React from "react";
import { CartProvider } from "./context/Cartcontext.jsx";
import Navbar from "./components/Navbar.jsx";
import Login_or_register from "./components/Login_or_register.jsx";
import './components/login_or_register.css'
import Home from "./components/Home.jsx";
import Register from "./components/register.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from './components/ProductDetails.jsx';
import Cart from "./components/Cart.jsx";
import Help from "./components/Help.jsx";
import {BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <CategoryProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login_or_register' element={<Login_or_register/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/products' element={<ProductList/>}/>
          </Routes>
          <Footer/>
        </CategoryProvider>
      </CartProvider>
    </Router>
  );
};

export default App;

