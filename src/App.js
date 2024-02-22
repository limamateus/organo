import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

const times = [
 {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
},
{
    nome: 'Data Sciense',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
},
{
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
},
{
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
},
{
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
},
{
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
}
]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {  
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id){
    
    setColaboradores(colaboradores.filter(colaboradores => colaboradores.id !== id))
  }

  function resolverFavorito(id){
    debugger
    setColaboradores(colaboradores.map(
      colaborador =>{
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
        return colaborador
      }
    ))
  }
  return (
    <div className="App">
      <Banner/>      
      <Formulario times={times.map(time => time.nome)} onColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}   
        aoDeletar={deletarColaborador}    
        aoFavoritar ={resolverFavorito}
       />)}

        <Rodape/>

    </div>

    
  );
}

export default App;
