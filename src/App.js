import logo from './logo.svg';
import './App.css';

import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/login"

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
