import './App.css';
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from "react-router-dom";

import { MainPage } from "./in/Pages"
import { Login_page, Register_page } from "./out/pages";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={ Login_page }/>
          <Route path="/register" component={ Register_page }/>
          <PrivateRoute path="/in" component={ MainPage }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
