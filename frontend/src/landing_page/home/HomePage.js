import React from "react";
import Hero from "./hero";
import Awards from "./awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";



function HomePage() {
    return (
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        
        </>
    );
}

export default HomePage;