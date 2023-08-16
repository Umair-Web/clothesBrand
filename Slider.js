import React from 'react';
import modal1 from '../images/modal-1.webp'
import modal2 from '../images/modal-2.webp'
import modal3 from '../images/modal-3.webp'
import modal4 from '../images/modal-4.webp'
import modal5 from '../images/modal-5.webp'
import './slider.css'




const Slider = () => {
  function prevDef(event){
    event.preventDefault();
  }
  return(
    <>
      {/* <section className='container'> */}
        <div className='slider-wrapper'>
          <div className='slider'>
            <img id='slide-1' src={modal1}></img>
            <img id='slide-2' src={modal2}></img>
            <img id='slide-3' src={modal3}></img>
            <img id='slide-4' src={modal4}></img>
            <img id='slide-5' src={modal5}></img>
          </div>
          <div className='slider-nav'>
            <a href='slide-1'></a>
            <a href='slide-2'></a>
            <a href='slide-3'></a>
            <a href='slide-4'></a>
            <a href='slide-5'></a>
          </div>
        </div>
      {/* </section> */}
    </>
  )
};
export default Slider;