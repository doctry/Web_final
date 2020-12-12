import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import { Home_page, Schedule_page, Contact_page } from "./pages"

import Navbar_in from "./components/Navbar_in"

import "./Main.css";

class Main extends Component {
    
    render () {
        return (
        <div>
            <BrowserRouter>
                <Navbar_in/>
                <Switch>
                    <Route exact path="/" component= { Home_page }/>
                    <Route path="/schedule" component={ Schedule_page }/>
                    <Route path="/contact" component={ Contact_page }/>
                </Switch>
            </BrowserRouter>
        </div>
        );
    }
}

export default Main;