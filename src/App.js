import React from "react";
import NavBar from "./Naavbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection"
import CardSection from "./CardSection"
import Footer from "./Footer"

const App =() =>{

    return(
        <div>
          <h1>Kshitij !</h1>
          <NavBar/>
          <HeroSection/>
          <AppSection/>
          <CardSection/>
          <Footer/>
        </div>
    )
} 


export default App;