import { NavBar } from "./Components/NavBar";
import { Outlet } from "react-router-dom";


export default function Layout() { 
    return (
        <>
            <NavBar/> 
            <main>
                <Outlet/>
            </main>
        
        </>
    ) 
}

//Layout is the parent route to the rest of the components because of Outlet (pages are the children)