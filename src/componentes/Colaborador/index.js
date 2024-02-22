import './Colaborador.css'
import { AiFillCloseCircle,AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
const Colaborador = ({id,nome,cargo,imagemUrl,corPrimaria,aoDeletar,favorito,aoFavoritar}) =>{
    function favoritando(){
        aoFavoritar(id)
    }
    const propsFavorito = {
        size:25,
        onClick: favoritando

    }
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
                <div className='favoritar'>
                    {favorito
                        ? <AiFillHeart {...propsFavorito}  color='#ff0000'/>
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}


export default Colaborador