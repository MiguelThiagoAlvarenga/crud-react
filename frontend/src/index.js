import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App.js';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Alunos from "./componentes/cadastros/cad-aluno";
import CadAluno from "./componentes/cadastros/cad-aluno/cad-aluno.js";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import 'react-dropzone-uploader/dist/styles.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import HeaderApp from "./componentes/header";
import Footer from "./componentes/footer";

ReactDOM.render(
  <BrowserRouter>
    <HeaderApp />
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/alunos" component={Alunos} />
      <Route path="/editar-aluno/:id" component={CadAluno} />
      <Route path="/novo-aluno/" component={CadAluno} />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
