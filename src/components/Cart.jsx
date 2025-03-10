import React, {useContext,useState,useEffect } from "react";
import CartContext from "../context/Cartcontext";
import ProductList from "./ProductList.jsx";
import './cart.css';
const Cart = () => {
  const { cart, removeFromCart, clearCart ,addToCart} = useContext(CartContext);
  const [showcart,setshowcart]=useState(true);
  const handleadd=(product)=>{
    addToCart(product)
  }
  const handlesub=(productId)=>{
    removeFromCart(productId);
  }
  return (
    <div className='cart_main'>
      <div className="cart_content">
        <div className="gift_">
          <h7>IS YOUR ORDER A GIFT?</h7>
          <h7>ADD</h7>
        </div>
        <div className="cart_items">
          <div className="product_cart">
          {cart.map((product,index)=>(
            <div key={index} className="product_card" style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <img src={product.image} alt={product.title} style={{ width: "170px", height: "300px" }} />
              <h4 className='card_title' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "180px"}}>
                {product.title}
              </h4>
              <p>${product.price}</p>
              <div className="add_sub">
                <div className="add"  onClick={()=>handleadd(product)}>
                  <p>+</p>
                </div>
                <div className="quantity">
                  {product.quantity}
                </div>
                <div className="sub"  onClick={()=>handlesub(product.id)}>
                  <p>-</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
