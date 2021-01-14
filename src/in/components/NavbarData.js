import React from "react"

// import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
// import * as IoIcons from "react-icons/io"

export const NavbarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    
    {
        title: "Schedule",
        path: "/schedule",
        icon: <AiIcons.AiFillSchedule/>,
        cName: "nav-text"
    },

    {
        title: "Contact",
        path: "/contact",
        icon: <AiIcons.AiFillPhone/>,
        cName: "nav-text"
    },

    {
        title: "Reservation",
        path: "/reservation",
        icon: <AiIcons.AiOutlineHdd/>,
        cName: "nav-text"
    }
];