import './App.css';

import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/login"
import Pets from "./pages/Pets/pets"
import RegistroVacina from './pages/RegistroVacina/registroVacina';

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pets" exact component={Pets} />
                <Route path="/vacinas/registro" exact component={RegistroVacina} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
