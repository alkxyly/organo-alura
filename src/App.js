import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const times = [
    {
      nome: 'Autom20',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Automação Legada',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Canais e Segurança',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Desty',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Meios de Pagamento',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ] 
  
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])    
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} times={times}/>     
      {times.map(time =>  <Time nome={time.nome}/> )}      
    </div>
  );
}

export default App;
