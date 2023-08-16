import React from "react";
import logo from "./images/lb2.png"
import "./Nav.css"

function Navigation(){


    return(
        
        <div className="nav-main">
           <div className="nav-heading">
               <h1>لباس</h1>
           </div>
           <nav className="fill">
            <ul className="nav-menu">
                <li>Home</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

           </nav>
           <div>
            <button className="nav-button">
                Sign in
            </button>

           </div>
           <div className="menu">

           <i class="bi bi-list"></i>

           </div>
        </div>
    )
}
export default Navigation;