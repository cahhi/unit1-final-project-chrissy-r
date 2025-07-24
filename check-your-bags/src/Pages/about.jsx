import React, { useState } from "react";
import '../Styles/About.css'




export default function AboutPage() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = () => {
         if(!email){
            setError("Email is required.");
         }else {
            setError("");
        }
        
    
    }

    return (

        <div id="about-page">
            <h1>Get ready to CheckYourBags<span>&#174;</span>!</h1>
                <div className="aboutParagraph">

                <p>CheckYourBags<span>&#174;</span> started as an idea from our founder who wanted an all-in-one application when planning vacations - especially when traveling with family and friends. Having an application that will allow travelers to plan out their vacation by searching for different vacation packages, uploading photos and posts to a secure platform, and many more exciting features. Take a look at the table below for upcoming </p>
                <p>Please enjoy early access features where you can sample the packing list feature and the virtual postcard!</p>
                <br />
                <section>
                    <table>
                        <caption>List of Upcoming Features</caption>
                        <tr>
                            <th>Feature</th>
                            <th>Attributes</th>
                        </tr>
                        <tr>
                            <th>Customizable Itinerary</th>
                            <th>Users will be able to add and customize their own itinerary page </th>
                        </tr>
                        <tr>
                            <th>User Profiles</th>
                            <th>Users will be able to save any customizable features and access them at any tim</th>
                        </tr>
                        <tr>
                            <th>Searchable Travel Features</th>
                            <th>Whether users need to book a flight, cruise, hotel, or resort - Check Your Bags will be a one stop shop. Partnering with 3rd party applications will help users with comparing prices amongst different travel agencies. </th>
                        </tr>
                    </table>
                </section>
                <br /><br />

                <form className="about-form">
                    <p>Please enter your email below to be added to the newsletter! We'll keep you updated with exciting new features and releases. Thank you for being apart of the Check Your Bags<span>&#174;</span> family! 
                     </p>
                    <div className="about-input">
                    <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                    {error && <p style={{color: "red"}}>{error}</p>}
                    </div>
                   
                </form>
                
                
                
                </div>
        </div>
    );

}