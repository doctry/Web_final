import React from "react"

// import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
// import * as IoIcons from "react-icons/io"

export const NavbarData = [
    {
        title: "首頁",
        path: "/in",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    
    {
        title: "行事曆",
        path: "/in/schedule",
        icon: <AiIcons.AiFillSchedule/>,
        cName: "nav-text"
    },

    {
        title: "聯絡我們",
        path: "/in/contact",
        icon: <AiIcons.AiFillPhone/>,
        cName: "nav-text"
    },

    {
        title: "場地借用",
        path: "/in/reservation",
        icon: <AiIcons.AiOutlineHdd/>,
        cName: "nav-text"
    }
];