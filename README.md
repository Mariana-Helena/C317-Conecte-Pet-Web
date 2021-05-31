# 💻 Conecte Pet - Aplicação Web 
<p align="center">
<img src="https://github.com/Mariana-Helena/C317-Conecte-Pet-Web/blob/main/src/images/Logo.png" height="300" width="300" >
</p>
<p align="center">Figura 1 - Logo do projeto</p>

<p> Conecte Pet é uma aplicação para acompanhamento/monitoramento médico veterinário de animais domésticos, oferecendo um serviço de agendamento de consultas, acesso ao histórico de vacinação e acesso aos dados dos pets.  </p>

<p>O projeto foi feito para a disciplina de Tópicos Especiais (C317) com a finalidade de aprendizagem e prática das ferramentas de desenvolvimento web e mobile. </p>

 ### 🎯 Objetivo da aplicação
<p>  O objetivo do sistema é oferecer uma plataforma digital para manter o histórico médico veterinário dos animais domésticos e, deste modo, auxiliar tanto as clínicas veterinárias como os donos de pet. Um dos grandes motivadores dessa ideia é a substituição dos registros em papel, como por exemplo registro de vacina, pois documentos impressos geralmente são perdidos dificultando o acompanhamento médico veterinário do animal. Essa redução de papel também auxilia na questão da sustentabilidade.  
Com o desenvolvimento da aplicação o agendamento de consultas pode ser agilizado e o trabalho do veterinário é facilitado por ter acesso a todos dados do animal.</p>

### 💻 Funcionalidades

![image](https://user-images.githubusercontent.com/70379653/120219688-01c7c000-c212-11eb-8871-938b28ccb038.png)

<p align="left">Figura 2 - Use Case </p>

#### Usuário (Dono de pet):
- Criar conta
- Cadastrar pet
- Visualizar pets cadastrados
- Excluir pet
- Visualizar vacinas (aplicadas/agendadas) de cada pet
- Visualizar consultas de cada pet

#### Veterinário:
- Criar conta
- Registrar/agendar aplicação de vacina
- Visualizar vacinas aplicadas/agendadas 
- Excluir registro de vacinação
- Agendar consulta
- Visualizar consultas agendadas 
- Excluir registro de consulta

### 🚀 Começando
 Para obter uma cópia do projeto a fim de operá-lo/testá-lo, clone o repositório em uma pasta na sua máquina: 

```
git clone https://github.com/Mariana-Helena/C317-Conecte-Pet-Web.git
```

### 📋 Pré-requisitos 
- npm

### 🔧 Instalação das dependências
<p> Para instalar as dependências do projeto é necessário digitar o comando no terminal:</p>

```
npm install 
```

### 👩‍💻 Execução 
<p>Para execução do projeto, digite:</p>

```
npm run dev
```

<p>Após a execução, o servidor estará rodando na porta 5000 e a página web no localhost 3000.</p>

### ⚙️ Executando os testes
<p> Foram implementados alguns testes utilizando o framework de teste Cypress.</p>

<p>Para abrir a interface do Cypress, digite o seguinte comando no terminal:</p>

```
./node_modules/.bin/cypress open
```

<p>Para executar os testes via terminal, digite:</p>

```
./node_modules/.bin/cypress run --spec 'cypress/integration/tests/**/'
```

<p>Para gerar o relatório HTML dos testes, primeiro certifique-se que os arquivos mochawesome_XXX.json foram gerados. Caso estes tenham sido salvos fora da pasta cypress/reports, mova-os para esse diretório. Depois, execute os comandos:</p>

```
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 
npx marge mochawesome.json 
```


### 🛠️ Construído com

**IDE**: [Visual Studio Code](https://code.visualstudio.com/)

**Front-End**: [React](https://pt-br.reactjs.org/)

**Back-End**: [NodeJS](https://nodejs.org/en/)

**Linguagens**: [Html, CSS e Javascript](https://www.devmedia.com.br/primeiros-passos-no-html5-javascript-e-css3/25647)

**Armazenamento de dados**: [MongoDB Atlas](https://www.mongodb.com/)

**Framework de teste**: [Cypress](https://www.cypress.io/)

**Gerenciamento de dependências**: [npm](https://www.npmjs.com/)

**Controle de versões**: [GitHub](https://github.com/)

**Interface Gráfica**: [Material-UI](https://material-ui.com/pt/)


## ✒️ Autores

* **Mariana Helena Inês Moreira** - [Mariana](https://github.com/Mariana-Helena)
* **Sinara Pimenta Medeiros** - [Sinara](https://github.com/SinaraPimenta)

### 📄 Licença
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://badges.mit-license.org/)

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.txt](https://github.com/Mariana-Helena/C317-Conecte-Pet-Web/blob/main/LICENSE) para detalhes.

⌨️ com ❤️ por Mariana e Sinara 😊


