import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState,useContext} from "react";
import './ProductDetails.css';
import cartContext from '../context/Cartcontext';

const ProductDetails = () => {
  const [showmore,setshowmore]=useState(false);
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [clickedindex,setclickedindex]=useState(null);
  const {addToCart}=useContext(cartContext);

  useEffect(() => {
    if (!product) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product", error));
    }
  }, [id, product]);

  if (!product) return <p>Loading product...</p>;
  const handleadd=()=>{
    if((product.category===("men's clothiing")||product.category===("women's clothing"))&&clickedindex===null){
      alert('Please select a size')
    }else{
      addToCart(product);
      alert('Product added successfully')
    }
  }
  const handleclick_size_button=(index)=>{
    setclickedindex(index);
  }
  const buttonStyles = (index) => ({
    backgroundColor: clickedindex === index ? "black" : "white",
    
    color:clickedindex === index ? "white" : "black"
  })

  return (
    <div className="product_detail_main">
      <div className="detail_container">
        <div className="more_detail" style={{height:showmore? 'auto':'40%',transition:'height 0.3s ease-in-out',overflow:'hidden'}}>
        <div className="more_content" >
          <p>COMPOSITION, CARE & ORIGIN</p>
          <p>COMPOSITION</p>
          <p>OUTER SHELL:</p>
          <p className="detail_content">100% RCS certified recycled polyester</p>
          <p className="detail_content">RCS CERTIFIED RECYCLED POLYESTER
          Nowadays, recycled polyester is mainly made from PET plastic waste. This is a type of plastic that is widely used in a variety of items, a cloth or a clothes brush. This process is more gentle on fabrics and also reduces water and energy consumption when washing. </p>
          <p>CARE</p>
          <p className="detail_content">Caring for your clothes is caring for the environment.To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. This process is more gentle on fabrics and also reduces water and energy consumption when washing.</p>
          <p>ORIGIN</p>
          <p className="detail_content">We have traceability requirements in order to know the supply chain of our productions. We request our suppliers to provide information on all facilities involved in the production processes, from the thread or fibre used right through to the finished garment for each order. This encompasses both our own and external factories, as well as any intermediaries involved in each process.</p>
          
          </div>
        </div>
        <button className='view_more' onClick={()=>setshowmore(!showmore)}>{showmore?'View Less':'View More'}</button>
      </div>
      
      <div className="product_image_detail">
        <img src={product.image} alt={product.title} className="actual_image" width='100%'/>
      </div>
      <div className="size_box">
        <h9>{product.title}</h9>
        <p>${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="size_box_button">CHECK IN STORE AVAILIBILITY</button>
        <button className="size_box_button">SHIPPING,EXCHANGE AND RETURN</button>
        <hr style={{width:'100%'}}/>
        {(product.category==="men's clothing"||product.category==="women's clothing")&&(
            <div className="colour_option">
              <p className="colour">COLOUR:</p>
              <div className="colour_box">
                <button className="colour_box_1" style={{backgroundColor:'black'}}></button>
                <button className="colour_box_1" style={{backgroundColor:'beige'}}></button>
                <button className="colour_box_1" style={{backgroundColor:'white'}}></button>
              </div>
              <div className="size_options">
                
                {['S','M','L','XL'].map((size,index)=>(
                    <button className="size" key={index} onClick={()=>handleclick_size_button(index)} style={buttonStyles(index)}>{size}</button>
                ))}
              </div>
            </div>
          )
        }
        <p className="colour">This product has a larger fit than usual</p>
        <button className="add_to_cart" onClick={handleadd} >ADD</button>
      </div>
      
      
    </div>
  );
};

export default ProductDetails;
