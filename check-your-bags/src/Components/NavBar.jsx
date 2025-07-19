import { Link } from "react-router-dom";


export default function NavBar() {

    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/itinerary">
                <button>Itinerary</button>
            </Link>
            <Link to="/postcard">
            <button>Postcard</button>
            </Link>
            <Link to="/userProfile">
                <button>Profile</button>
            </Link>


        </div>
    )
}