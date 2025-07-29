import React from "react";
import './Styles/Footer.css';
import SurpriseButton from "./Surprisebutton";


const Footer = () => { //calls the surprise button in the footer of every page
    return(
        <>
        <div className="footer-wrapper">
            <SurpriseButton />
        </div>
        </>
    )
}

export default Footer;
