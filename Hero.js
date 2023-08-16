import React from "react";
// import 'react-slideshow-image/dist/styles.css'
// import { Fade,Zoom,Slide } from "react-slideshow-image";
import './Hero.css'
import Modal1 from './images/modal-1.webp'
import Modal2 from './images/modal-2.webp'
import Modal3 from './images/modal-3.webp'
import Modal4 from './images/modal-4.webp'
import Modal5 from './images/modal-5.webp'
import Slider from "./Slider/Slider";
function Hero(){
    const images=[Modal1,Modal2,Modal3,Modal4,Modal5]
    return(
        <>
        <div className="hero-main">
            <div className="hero-content">
                <h1>Top Highlights Of The Day.</h1>
                <p>Discover the allure of classic <b>Shalwar Kameez</b> designs that have stood the rest of time. </p>
                <h2>رنگوں کی دنیا میں سادگی کی شان</h2>
                <button className="hero-button">Shop Now.</button>
            </div>
            <div className="hero-image">
                {/* <Zoom>
                {images.map((image,index)=>
                <div key={index}>
                    <img className="hero-inside" src={image}></img>
                </div>
                )}
                </Zoom> */}
                {/* <img  className="hero-inside" src={Modal5}></img> */}
                {/* <img className="hero-inside" src={Modal4}></img> */}
                <Slider/>
            </div>
           
        </div>
        
       </>
    )
}
export default Hero;