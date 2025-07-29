import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";


export default function Layout() { 
    return (
        <>
            <Navbar /> 
         <main>
                <Outlet />
        </main> */
        
        </>
    ) 
}
 
//Layout is the parent route to the rest of the components because of Outlet (pages are the children)