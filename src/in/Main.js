import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import { HomePage, SchedulePage, AboutPage, ReservationPage } from "./Pages"
import NavbarIn from "./components/Navbar_in"
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
            <HashRouter>
                <NavbarIn/>
                <Switch>
                    <Route 
                        exact path="/in"
                        render={props => (
                            <HomePage {...props} 
                                board0={board0} url0={url_0} name0={"臺大社團經費補助"}
                                board1={board1} url1={url_1} name1={"臺大社團資訊"}
                                board2={board2} url2={url_2} name2={"臺大學生活動管理處"}
                            />
                        )}
                    />
                    <Route path="/in/schedule" component={ SchedulePage }/>
                    <Route path="/in/about" component={ AboutPage }/>
                    <Route path="/in/reservation" component={ ReservationPage }/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default Main;