import React, { useState } from "react";

// importing images
import Modal1 from './images/modal-1.jpg'
import Modal2 from './images/modal-2.webp';
import Modal3 from './images/modal-3.webp';
import Modal4 from './images/modal-4.webp';
import Modal5 from './images/modal-5.webp';
import Modal6 from './images/modal-6.webp';
import Modal7 from './images/modal-7.webp';
import Modal8 from './images/modal-8.webp';

// importing css
import './catalog.css'

// importing from ant design
import { Card } from 'antd';



function Catalog()
{
    const { Meta } = Card;
    const[inputdata,setInputData]=useState("");
    const data=[
        {
            id: 1,
            image:Modal1,
            brand: "Diners",
            color:"Light-Gray",
            price: 8500
        },
        {
            id: 2,
            image:Modal2,
            brand: "Diners",
            color:"Light-Blue",
            price: 9000
        },
        {
            id: 3,
            image:Modal3,
            brand: "MTJ",
            color:"Off-White",
            price: 5000
        },
        {
            id: 4,
            image:Modal4,
            brand: "MTJ",
            color:"White",
            price: 6000
        },
        {
            id: 5,
            image:Modal5,
            brand: "Junaid Jamshed",
            color:"Black",
            price: 7500
        },
        {
            id: 6,
            image:Modal6,
            brand: "Junaid Jamshed",
            color:"Dark-Blue",
            price: 7000
        },
        {
            id: 7,
            image:Modal7,
            brand: "Khaadi",
            color:"Brown",
            price: 5673
        },
        {
            id: 8,
            image:Modal8,
            brand: "Khaadi",
            color:"Musterd",
            price: 4665
        }
        
    ]
    
    return(
        <> 
        <div className="items-display">
             <div className="search-box">
              <input placeholder="Search here" onChange={(event)=>{setInputData(event.target.value)}}></input>
             </div>
             <div className="items">
                {
                   data.filter((val) => {
                    if(inputdata == ""){
                      return val;
                    }else if(val.brand.toLowerCase().includes(inputdata.toLowerCase())){
                      return val;
                    }
                    else if(val.color.toLowerCase().includes(inputdata.toLowerCase())){
                        return val;
                    }
                    // else if(val.price.includes(inputdata.toLowerCase())){
                    //     return val;
                    // }

                  })
                  .map((val)=>
                {
                    return(
                        <Card
                  hoverable
                  style={{
                    width: 240,
                    height:470,
                    margin:30,
                  }}
                  cover={<img alt="example" src={val.image} className="catalog-img" />}
                >
                 <h3>{val.brand}</h3>
                 <p>{val.color}</p>
                 <p>Rs {val.price}</p>
                </Card>
                    )
                })
                }
                
                
                
            </div>
        </div>
        </>
    )
}
export default Catalog;