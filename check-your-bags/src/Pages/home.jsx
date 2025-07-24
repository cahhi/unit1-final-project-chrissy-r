import { Link } from "react-router";
import React, { useState, useContext, createContext } from "react";
import '../Styles/Home.css'

export default function HomePage() {
    return (
        <>
        <div>
            <div id="home-container">
                Let us help
                <br /> make your Travel 
                <div id="flip"> {/* sets the divs for the animation */}
                    <div><div>An Amazing</div></div>
                    <div><div>An Unforgettable</div></div>
                    <div><div>A Breathtaking</div></div>
                </div>
                <div>
                    Experience!
                </div> 
                
            </div>
            
        </div>
        </>
    );
}