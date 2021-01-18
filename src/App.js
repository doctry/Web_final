import './App.css';
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";

import { Main_page } from "./in/Pages"
import { Home_page, Register_page } from "./out/pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={ Home_page }/>
          <Route path="/register" component={ Register_page }/>
          <Route path="/in" component={ Main_page }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
