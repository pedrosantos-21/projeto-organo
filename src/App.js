import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja bem-vindo ao meu projeto organo em React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
