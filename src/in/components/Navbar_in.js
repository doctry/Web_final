import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar_in.css"
import { NavbarData } from "./NavbarData"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { IconContext } from "react-icons/lib"

function Navbar_in () {
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
    <IconContext.Provider
        value={{ color: '#EFC958'}}
    >
        <div className="navbar">
            <div className="navbar-text">
                陳述局
            </div>
            <Link to="#" className="navbar-menu">
                <FaIcons.FaBars onClick={ clickSidebar }/>
            </Link>
        </div>
    
        <nav className={ sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={ clickSidebar }>
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

    </IconContext.Provider>
    );
}

export default Navbar_in