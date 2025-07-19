import { useState } from "react";



export default function Postcard() {
   
    const [name, setName] = useState("Jane Doe");
    const [addressLine1, setaddressLine1] = useState("123 Main St");
    const [state, setState] = useState("Anywhere");
    const [zipcode, setZipcode] = useState("12345");


    return (
        <div className="postcard">
           <div className="postcard-info">
                
           </div> 
        </div>
    );
}