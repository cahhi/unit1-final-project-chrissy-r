import React, { useState } from "react";
import Confetti from "react-confetti";
import './Styles/SurpriseButton.css'

const SurpriseButton = () => { //reusable component that offers users a surprise
    const [showConfetti, setShowConfetti] = useState(false);
    const handleClick =() => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000); //plays confetti for 8 seconds
    };


    return (
        <div>
            <button className="confetti-button" onClick={handleClick}>
                🎉Check Your Bags<span>&#174;</span>!🎉
            </button>
            {showConfetti && <Confetti />}
        </div>

    );
};

export default SurpriseButton;

