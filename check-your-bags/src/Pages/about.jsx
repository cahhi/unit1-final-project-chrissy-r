import React, { useState } from "react";
import '../Styles/About.css'
import User from "../Components/userWelcome";




export default function AboutPage() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event) => { //this will throw an error to the user if they press the submit button and no email is entered
         if(!email){
            event.preventDefault();
            setError("Email is required.");
         }else {
            setError("");
            event.preventDefault();
            alert("You have been added to the newsletter!");
            
        }
    }

    return (

        <div id="about-page">
            <h1>Get ready to CheckYourBags<span>&#174;</span>!</h1>
                <div className="aboutParagraph">
                    <User name="Traveler" /> {/* Parent component to the User function */}

                <p>CheckYourBags<span>&#174;</span> started as an idea from our founder who wanted an all-in-one application when planning vacations - especially when traveling with family and friends. Having an application that will allow travelers to plan out their vacation by searching for different vacation packages, uploading photos and posts to a secure platform, and many more exciting features. Take a look at the table below for upcoming </p>
                <p>Please enjoy early access features where you can sample the packing list feature and the virtual postcard!</p>
                <br />
                <section>
                    <table> {/* //table to show upcoming features  */}
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
                <form className="about-form"> {/* made this into a form so that I could move this section as one */}
                    <p>Please enter your email below to be added to the newsletter! We'll keep you updated with exciting new features and releases. Thank you for being apart of the Check Your Bags<span>&#174;</span> family! 
                     
                    <div className="about-input"> {/* this is where users can enter in their email */}
                    <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                    <button onClick={handleSubmit}>Submit</button> {/* this button calls the function so that the error will be displayed as needed */}
                    {error && <p style={{color: "red"}}>{error}</p>} {/* conditional rendering so that the error message shows to the user in red text */}
                    </div>
                    </p>
                </form>
                </div>
        </div>
    );

}