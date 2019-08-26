import React, { Component }  from 'react';
import logo from '../logo.svg';
import './App.css';

class MeuLogo extends Component {
    render() {
        return (
            <img src={logo} className="App-logo" alt="logo"/>
        )
    }
}

class MinhaFrase extends Component {
    render() {
        return (
            <div>
                <p>
                    Página Inicial do <code>crud-react</code> .
                </p>
                <p> -- Primeiro Aplicativo React.js -- </p>
            </div>
        )
    }
}

const divStyle = {
  height: 'calc(39.1rem + 2vmin)'
};

function App() {
  return (
    <div className="App" style={divStyle}>
      <div className="Conteudo">
          <MeuLogo />
          <MinhaFrase />
      </div>
    </div>
  );
}

export default App;
