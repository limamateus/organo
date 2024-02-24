import './Colaborador.css'
import { AiFillCloseCircle,AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
const Colaborador = ({colaborador,corDeFundo,aoDeletar,aoFavoritar}) =>{
    function favoritando(){
        aoFavoritar(colaborador.id)
    }
    const propsFavorito = {
        size:25,
        onClick: favoritando

    }
    return (
        <div className='colaborador'>
            <div>
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
            </div>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}} >
                <img src={colaborador.imagemUrl} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavorito}  color='#ff0000'/>
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}


export default Colaborador