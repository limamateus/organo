import './Colaborador.css'
import { AiFillCloseCircle} from 'react-icons/ai';
const Colaborador = ({id,nome,cargo,imagemUrl,corPrimaria,aoDeletar}) =>{
   
    return (
        <div className='colaborador'>
            <div>
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(id)} />
            </div>
            <div className='cabecalho' style={{backgroundColor:corPrimaria}} >
                <img src={imagemUrl} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}


export default Colaborador