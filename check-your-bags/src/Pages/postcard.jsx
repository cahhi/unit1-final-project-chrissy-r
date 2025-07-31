import { useState } from "react";
import React from "react";
import '../Styles/Postcard.css'
import stamp1 from '../Pictures/stamp1.png';







export default function Postcard() {
   
    //setting useState to allow for users to be able to dynamically change content
    const [name, setName] = useState("Jane Doe");
    const [destination, setDestination] = useState("Paris");
    const [attraction, setAttraction] = useState("the Louvre");
    const [food, setFood] = useState("croissants");
    const [userName, setUserName] = useState("Your name here");


    return (
        <>
            <div className="postcard-body">
                <div className="postcard-page">
                    <div className="wrapper">
                        <section>
                            <form name="postcard" className="postcard" method="POST" netlify action="/">
                                <div className="postcard-header">
                                    <img src={stamp1} alt="Picture of computer and coffee cup on a light wood desk. Only partial image is shown" />
                                    <h1>My Postcard</h1>
                                </div>
                                <div className="postcard-body">
                                    <div className="left-part">
                                        {/* this is the paragraph that will change */}
                                        <p>
                                        Hello, {name}! I wish you were here in {destination} with me! I had a great time seeing {attraction} and eating {food}. I can't wait to tell you all about my adventures when I see you!
                                        <br /><br />
                                        Miss you lots!
                                        <br />
                                        {userName}
                                        </p>
                                        {/* <p><textarea maxLength="250" rows="12" cols="30" name="" placeholder="Share your memories here..."></textarea></p> */}
                                    </div>
                                    <div className="right-part">
                                        <input type="text" name="" placeholder="Recipient Name" required></input>
                                        <input type="email" name="" placeholder="Recipient Email" required></input>
                                        {/* <input type="text" name=""></input> */}
                                    </div>
                                </div>
                                <div className="postcard-footer">
                                        <button type="submit">Bon Voyage</button>
                                </div>
                            </form>
                                
                        </section>
                            </div>
                            {/* //form input allows users to change the postcard inputs by plugging in info to designated places */}
                            <form className="postcard-input">
                                <h3>Customize your digital postcard now!</h3>
                                    <label>Enter Recipient Name: </label>
                                        <input
                                        type="text"
                                        maxLength="15"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Jane Doe"
                                        required
                                        />
                                        <br />
                                    <label>Enter Your Destination: </label>
                                        <input 
                                        type="text"
                                        maxLength="15"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="Paris"
                                        required
                                        />
                                        <br />
                                    <label>Enter one attraction you saw:  </label>
                                        <input 
                                        type="text"
                                        maxLength="15"
                                        value={attraction}
                                        onChange={(e) => setAttraction(e.target.value)}
                                        placeholder="the Louvre"
                                        required
                                        />
                                        <br />
                                    <label>Enter one food item you ate:  </label>
                                        <input 
                                        type="text"
                                        maxLength="15"
                                        value={food}
                                        onChange={(e) => setFood(e.target.value)}
                                        placeholder="croissants"
                                        required
                                        />
                                        <br />
                                    <label>Enter your name:  </label>
                                        <input 
                                        type="text"
                                        maxLength="30"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Your Name Here"
                                        required
                                        />    
                            </form>
                        </div> 
        </div>
    </>
    );
}