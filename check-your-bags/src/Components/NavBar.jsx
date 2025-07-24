import { Link } from "react-router-dom";
import '../Styles/NavBar.css';
import Header from "./Header";



export default function NavBar() { //provides button links to each page

    return (
        <div className="navbar">
            <div className="leftSide">
                <Header />
                <Link to="/">
                    <button className="home-button">Home</button>
                </Link>
                <Link to="/about">
                    <button className="about-button">About</button>
                </Link>
                <Link to="/packingList">
                    <button className="packingList-button">Packing List</button>
                </Link>
                <Link to="/postcard">
                   <button className="postcard-button">Postcard</button>
                </Link>

            </div>
        </div>
    );
}
