import './App.css';

import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/login"
import Pets from "./pages/Pets/pets"
import cadastroPet from "./pages/CadastroPet/cadastroPet"
import cadastroUsuario from "./pages/CadastroUsuario/cadastroUsuario"
import RegistroVacina from './pages/RegistroVacina/registroVacina';
import AgendamentoConsulta from './pages/AgendamentoConsulta/agendamentoConsulta';

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pets" exact component={Pets} />
                <Route path="/pets/cadastro" exact component={cadastroPet} />
                <Route path="/usuario/cadastro" exact component={cadastroUsuario} />
                <Route path="/vacinas/registro" exact component={RegistroVacina} />
                <Route path="/consultas/agendamento" exact component={AgendamentoConsulta} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
