import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) =>{
    
    const fundo = {backgroundColor: props.corSecundaria}
    const corPrimaria = {borderColor: props.corPrimaria}

    
        if(props.colaboradores.length === 0){
            return null
        }else{

            return (
         <section className='time' style={fundo}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => 
                <Colaborador 
                  key={colaborador.nome}
                  favorito = {colaborador.favorito}
                  id = {colaborador.id}
                  nome={colaborador.nome} cargo={colaborador.cargo} imagemUrl={colaborador.imagem} corPrimaria={props.corPrimaria}
                 aoDeletar={props.aoDeletar}
                 aoFavoritar={props.aoFavoritar}
                />
            )}
            </div>          
                  
        </section> 
    )}

}

export default Time