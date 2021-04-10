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
import AgendamentoConsulta from './pages/AgendamentoConsulta/agendamentoConsulta';

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pets" exact component={Pets} />
                <Route path="/vacinas/registro" exact component={RegistroVacina} />
                <Route path="/consultas/agendamento" exact component={AgendamentoConsulta} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
