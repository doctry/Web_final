import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from "react-router-dom";
import { Home_page, Schedule_page, Contact_page, Reservation_page } from "./Pages"
import Navbar_in from "./components/Navbar_in"
import {Board0, url_0} from "./components/home/Board0"
import {Board1, url_1} from "./components/home/Board1"

import "./Main.css";

function Main() {
    const [board0, setBoard0] = useState([]);
    const [board1, setBoard1] = useState([]);

	useEffect(() => {
        Board0(setBoard0)
        Board1(setBoard1)
    }, []);
    
    return (
        <div>
            <BrowserRouter>
                <Navbar_in/>
                <Switch>
                    <Route 
                        exact path="/in" 
                        render={props => (
                            <Home_page {...props} 
                                board0={board0} url0={url_0} name0={"台大社團經費補助"}
                                board1={board1} url1={url_1} name1={"台大社團資訊"}
                            />
                        )}
                    />
                    <Route path="/in/schedule" component={ Schedule_page }/>
                    <Route path="/in/contact" component={ Contact_page }/>
                    <Route path="/in/reservation" component={ Reservation_page }/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;