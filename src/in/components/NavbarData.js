import React from "react"

// import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
// import * as IoIcons from "react-icons/io"

export const NavbarData = [
    {
        title: "Home",
        path: "/in",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    
    {
        title: "Schedule",
        path: "/in/schedule",
        icon: <AiIcons.AiFillSchedule/>,
        cName: "nav-text"
    },

    {
        title: "Contact",
        path: "/in/contact",
        icon: <AiIcons.AiFillPhone/>,
        cName: "nav-text"
    },

    {
        title: "Reservation",
        path: "/in/reservation",
        icon: <AiIcons.AiOutlineHdd/>,
        cName: "nav-text"
    }
];