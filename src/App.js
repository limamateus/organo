import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Front-End',
      cor: '#82CFFA',
      id: uuidv4(),
    },
    {
      nome: 'Data Sciense',
      cor: '#A6D157',
      id: uuidv4(),
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
      id: uuidv4(),
    },
    {
      nome: 'UX e Design',
      cor: '#D86EBF',
      id: uuidv4(),
    },
    {
      nome: 'Mobile',
      cor: '#FEBA05',
      id: uuidv4(),
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
      id: uuidv4(),
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {

    setColaboradores(colaboradores.filter(colaboradores => colaboradores.id !== id))
  }

  function mudarDeCorDoTime(cor, id) {
    setTimes(times.map(
      time => {
        if (time.id === id) {
          time.cor = cor
        }
        return time
      }
    ))
  }

  function resolverFavorito(id) {
    debugger
    setColaboradores(colaboradores.map(
      colaborador => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
        return colaborador
      }
    ))
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
      times={times.map(time => time.nome)} 
      onColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        time ={time}     
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        aoFavoritar={resolverFavorito}
        mudarDeCor={mudarDeCorDoTime}        
      />)}

      <Rodape />

    </div>


  );
}

export default App;
