import React from "react";
import './Styles/Header.css'
import './Styles/Navbar.css'
import SurpriseButton from "./Surprisebutton";


const Header = () => { //header that is displayed on each page
    return  (
        <div className="header"> 
            <h1>🧳Check Your Bags<span>&#174;</span></h1>
            <SurpriseButton />
        </div>
    );
};



export default Header;

