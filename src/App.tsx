// import logo from './logo.svg';
import './App.css';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { useState } from 'react';
//import Rodape from './componentes/Rodape';
import Banner from './componentes/Banner/Banner';
import { IColaborador } from './compartilhado/interfaces/IColaborador';


function App() {

  const times = [
    {
      nome: 'Progamação',
      corPrimaria: '#57C278'  ,
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#FQF8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06EBF',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]


  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])
  function deletarColaborador(){
    console.log('Deletando colaboradores')
  }

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    // setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem ='/imagens/banner.png'/>{/*necessário passar as props para o Banner*/}
      <Formulario times ={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    
      {times.map(time => <Time 
        key={time.nome} 
        nome= {time.nome} 
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}//time é de um tipo inconpatível
        />)}

        {/*<Rodape/>*/}

     {/* <header className="App-header">
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
      */}
    </div>
  );
}

export default App;
