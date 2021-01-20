import React from "react"

// import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { BiLogOut } from "react-icons/bi";
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
        title: "關於我們",
        path: "/in/about",
        icon: <AiIcons.AiFillPhone/>,
        cName: "nav-text"
    },

    {
        title: "增加成員",
        path: "/in/reservation",
        icon: <AiIcons.AiOutlineHdd/>,
        cName: "nav-text"
    },

    {
        title: "登出",
        path: "/",
        icon: <BiLogOut/>,
        cName: "nav-text"
    }
];