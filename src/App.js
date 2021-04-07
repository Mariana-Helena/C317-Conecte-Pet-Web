import './App.css';

import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/login"
import Pets from "./pages/Pets/pets"

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pets" exact component={Pets} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
