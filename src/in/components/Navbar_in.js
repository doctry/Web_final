import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar_in.css"
import { NavbarData } from "./NavbarData"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

function Navbar_in () {
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
    <>
        <div className="navbar">
            <Link to="#" className="navbar-menu">
                <FaIcons.FaBars onClick={ clickSidebar }/>
            </Link>
        </div>
    
        <nav className={ sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={ clickSidebar }>
                <li className="navbar-toggle"> 
                    <Link to="#" className="navbar-menu">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                { NavbarData.map((item, index) => {
                    return (
                        <li key={index} className={ item.cName }>
                            <Link to={ item.path }>
                                { item.icon }
                                <span>{ item.title }</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

    </>
    );
}

export default Navbar_in