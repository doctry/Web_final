import './App.css';
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";

import { Home_page } from "./in/Pages"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={ Home_page }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
