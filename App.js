import React from "react";
import Navigation from "./components/Navigation/Nav";
import Hero from "./components/Hero/Hero";
import Catalog from "./components/Catalog/catalog";
import './App.css'


function App() {
  return (
    <div className="app-main">
    
    <Navigation/>
    <Hero/>
    <Catalog/>
    </div>
   
  );
}

export default App;
