import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time,colaboradores, aoDeletar, mudarDeCor,aoFavoritar}) =>{
    
   // const fundo = {backgroundColor: props.corSecundaria}
   // const corPrimaria = {borderColor: props.corPrimaria}
            
        console.log(time)
        if(colaboradores.length === 0){
            return null
        }else{

            return (
            <section className='time'
             style={{backgroundColor: hexToRgba(time.cor, '0.3')}}>
             <input type='color'
              value={time.cor} 
              onChange={evento => mudarDeCor(evento.target.value,time.id)}  
              className='input-cor'/>
            <h3 style={{borderColor: time.cor}} >{time.nome}</h3>
       
            <div className='colaboradores'>
            {colaboradores.map( colaborador => 
                <Colaborador 
                  key={colaborador.id}               
                  colaborador={colaborador}
                  corDeFundo={time.cor}
                  aoDeletar={aoDeletar}
                  aoFavoritar={aoFavoritar}
                />
            )}
            </div>          
                  
        </section> 
    )}

}

export default Time