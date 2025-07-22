import { useState } from "react";
import React from "react";
import '../Styles/Postcard.css'
import stamp1 from '../Pictures/stamp1.png';



export default function Postcard() {
   
    const [name, setName] = useState("Jane Doe");
    const [addressLine1, setaddressLine1] = useState("123 Main St");
    const [state, setState] = useState("STL, MO");
    const [zipcode, setZipcode] = useState("12345");
    const [userContent, setUserContent] = useState("Share your memories here!")


    return (
        <div className="postcard-page">
            <div className="wrapper">
                <section>
                    <form className="postcard">
                        <div className="postcard-header">
                            <img src={stamp1} />
                            <h1>My Postcard</h1>
                        </div>
                        <div className="postcard-body">
                            <div className="left-part">
                                <p>
                                Hello, !
                                </p>
                                {/* <p><textarea maxLength="250" rows="12" cols="30" name="" placeholder="Share your memories here..."></textarea></p> */}
                            </div>
                            <div className="right-part">
                                <input type="text" name="" placeholder="Recipient Name"></input>
                                <input type="text" name="" placeholder="Recipient Email"></input>
                                {/* <input type="text" name=""></input> */}
                            </div>
                        </div>
                            
                        <div className="postcard-footer">
                            <input type="submit" name="submit-button" value="Bon Voyage!" />
                        </div>
                    </form>
                        <div className="postcard-styles">
                            <h2>Choose Postcard style: </h2>
                            <select id="postcard-style-input" name="style-input" required>
                                <option value="">Default Theme</option>
                                <option value="beachy">Beach Theme</option>
                                <option value="cityLights">City Lights Theme</option>
                                <option value="airplane">Airplane Theme</option>
                                <option value="cruiseShip">Cruise Ship Theme</option>
                            </select>

                    </div>
                    
                
                </section>
                
            
            </div>
        </div>
       
   
    );
}