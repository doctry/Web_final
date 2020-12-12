import './App.css';
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";

import { Main_page } from "./in/pages"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={ Main_page }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
