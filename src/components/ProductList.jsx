import React from "react";
import CartContext from "../context/Cartcontext";
import {useEffect,useState,useContext} from 'react';
import './Productlist.css';
import { Link ,useLocation} from "react-router-dom";
import { useCategory } from "../context/CategoryContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [products,setproducts]=useState([]);
  const {category}=useCategory();
  const location=useLocation();
  useEffect(()=>{
    const isSearch=(location.pathname==='/search');
    const categoryurl=isSearch?'':`/category/${category}`;
    fetch(`https://fakestoreapi.com/products${categoryurl}`)
      .then((res)=>{
        if(!res.ok){
          throw new Error(`${res.status}`)
        }
        return res.json();
      })
      .then((data)=>{
        setproducts(data);
      })
      .catch((error)=>console.log('Error fetching products',error));
  },[category,location.pathname]);

    return (
        <>
        <div className='product_cont' style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", paddingTop: "200px"}}>
          {products.map((product) => (
            <div key={product.id} style={{ border: "0.5px solid rbg(138,136,136)", textAlign: "justify" }}>
              <div className="product_image">
                <img src={product.image} alt={product.title} style={{ width: "100px", height:'auto-fit' }} />
              </div>
              <div className="product_info">
                <Link to={{
                  pathname:`/product/${product.id}`,
                  state:{product}
                }} className="link_button">
                  <button className="title">{product.title}</button>
                </Link>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        </>
    );
};

export default ProductList;

