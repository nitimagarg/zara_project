
import React,{useContext} from 'react';
import cartContext from '../context/Cartcontext';

const ProductItem = ({ product }) => {
    console.log(cartContext)
  const {addtocart} =useContext(cartContext);
  return (
    <div>
      <h3>product1</h3>
      <p>Price: 34</p>
      <button onClick={()=> addtocart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
