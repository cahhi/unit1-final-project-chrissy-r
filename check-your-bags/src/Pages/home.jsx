import { Link } from "react-router";
import React, { useState, useContext, createContext } from "react";
import '../Styles/Home.css'

export default function HomePage() {
    return (
        <>
        <div>
            <div id="home-container">
                Make Travel 
                <div id="flip">
                    <div><div>An Amazing</div></div>
                    <div><div>An Inspiring</div></div>
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