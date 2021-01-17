import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import { Home_page, Schedule_page, Contact_page, Reservation_page } from "./Pages"
import Navbar_in from "./components/Navbar_in"
import {Board0, url_0} from "./components/home/Board0"
import {Board1, url_1} from "./components/home/Board1"
import {Board2, url_2} from "./components/home/Board2"

import "./Main.css";

function Main() {
    const [board0, setBoard0] = useState([]);
    const [board1, setBoard1] = useState([]);
    const [board2, setBoard2] = useState([]);

	useEffect(() => {
        Board0(setBoard0)
        Board1(setBoard1)
        Board2(setBoard2)
    }, []);
    
    return (
        <div>
            <BrowserRouter>
                <Navbar_in/>
                <Switch>
                    <Route 
                        exact path="/" 
                        render={props => (
                            <Home_page {...props} 
                                board0={board0} url0={url_0} name0={"臺大社團經費補助"}
                                board1={board1} url1={url_1} name1={"臺大社團資訊"}
                                board2={board2} url2={url_2} name2={"臺大學生活動管理處"}
                            />
                        )}
                    />
                    <Route path="/schedule" component={ Schedule_page }/>
                    <Route path="/contact" component={ Contact_page }/>
                    <Route path="/reservation" component={ Reservation_page }/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;