import { useState,useEffect } from 'react';
import React from "react";
import ProductList from './ProductList';
import './Search.css';
const Loopbox=()=>{
    const [positionX,setpositionX]=useState(0);
    const speed=window.innerWidth*0.00009;
    const resetpos=-window.innerWidth*0.6;
    useEffect(()=>{
        const interval=setInterval(()=>{
            setpositionX((prevX)=>(prevX<resetpos?window.innerWidth:prevX-speed));
        },16);
        return ()=> clearInterval(interval);
    },[resetpos]);
    return(
        <div className='scroll-content' style={{transform:`translate3d(${positionX}px,0,0)`}}>
            <button className='help_buttons'>Leather Jacket</button>
            <button className='help_buttons'>Blazer</button>
            <button className='help_buttons'>Sweater</button>
            <button className='help_buttons'>Shirt</button>
            <button className='help_buttons'>White Shirt</button>
            <button className='help_buttons'>Black Dress</button>
            <button className='help_buttons'>Bag</button>
            <button className='help_buttons'>Trousers</button>
            <button className='help_buttons'>Top</button>
            <button className='help_buttons'>Scarf</button>
            <button className='help_buttons'>White Trousers</button>
            <button className='help_buttons'>Jackets</button>
            <button className='help_buttons'>Jewellary</button>
            <button className='help_buttons'>Trousers</button>
            <button className='help_buttons'>Top</button>
            <button className='help_buttons'>Scarf</button>
        </div>
    )
}
const Search=()=>{
    return(
        <div className="search_main_cont">
            <div className="search_content">
                <div className="header_search">
                    <h5>What are you looking for?</h5>
                </div>
                <div className="search_hints">
                    <div className="visible_hint_cont">
                        <Loopbox/>
                    </div>
                </div>
                <div className='search_input_bar'>
                    <input type='text' placeholder='Search..'/>
                </div>
                <ProductList/>
            </div>
            
        </div>
    )
}
export default Search;