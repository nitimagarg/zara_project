import React, {useState,useEffect} from "react";
import './Home.css';

import img1 from './images1/img1.jpeg';
import img2 from './images1/img2.jpeg';
import img3 from './images1/img3.jpeg';
import img4 from './images1/img4.jpeg';
const Home=()=>{
    const images=[img1,img2,img3,img4
    ];
    
    const [imageindex,setImageindex]=useState(0);
    const handlescroll=()=>{
        const scrollTop=window.pageYOffset || document.documentElement.scrollTop;
        const imageheight=window.innerHeight;
        const index=Math.floor(scrollTop/imageheight);
        setImageindex(Math.min(index,images.len-1));
    }

    useEffect(()=>{
        window.addEventListener("scroll",handlescroll);
        return ()=>{
            window.removeEventListener("scroll",handlescroll);
        }
    },[]);
    return (
        <div className="homepage">
            {images.map((image,index)=>(
                <div 
                    key={index}
                    className={`image-secton ${index===imageindex?'active':''}`}
                    style={{
                        height: '100vh',
                    }}
                ><img src={image} className="actualimage"></img></div>
            ))}
        </div>
    )
}
export default Home;