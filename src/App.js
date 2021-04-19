import './App.css';

import React,{useEffect} from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login/login"
import Pets from "./pages/Pets/pets"
import CadastroPet from "./pages/CadastroPet/cadastroPet"
import CadastroUsuario from "./pages/CadastroUsuario/cadastroUsuario"
import RegistroVacina from './pages/RegistroVacina/registroVacina';
import AgendamentoConsulta from './pages/AgendamentoConsulta/agendamentoConsulta';
import Consultas from './pages/Consultas/consultas';
import CarteiraDeVacinacao from './pages/CarteiraDeVacinacao/carteiraDeVacinacao'

function App() {

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    callApi().then(res => console.log({ response: res.express }))
            .catch(err => console.log(err));
  });

  const callApi = async () => {
    const response = await fetch('/pets');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pets" exact component={Pets} />
                <Route path="/pets/cadastro" exact component={CadastroPet} />
                <Route path="/usuario/cadastro" exact component={CadastroUsuario} />
                <Route path="/vacinas/registro" exact component={RegistroVacina} />
                <Route path="/consultas/agendamento" exact component={AgendamentoConsulta} />
                <Route path="/consultas" exact component={Consultas} />
                <Route path="/vacinas" exact component={CarteiraDeVacinacao} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
