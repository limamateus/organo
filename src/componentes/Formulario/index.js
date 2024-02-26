import './Formulario.css'
import Campo from '../../componentes/Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) =>{    
 
    // States obs setValor = hoocks
    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, seImagem] = useState ('')
    const [time, setTime] = useState('')

    const [novoTime, setNovoTime] = useState('')
    const [cor,setCor]= useState('')

    // Função para Salvar o card
    const aoSalvar = (evento) =>{
        evento.preventDefault() // função que ira tirar o comportamente padrão e não recarregar a pagina completa.
       
        props.onColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time,
        favorito : false,
        id : uuidv4()
       })
        
       setNome('')
       setCargo('')
       seImagem('')      
       setTime('')
       
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os Dados para Criar o card do colaborador</h2>
            <Campo 
                 obrigatorio
                 label="Nome" 
                 placeholder="seu nome"                 
                 valor ={nome}
                 aoAlterado={valor => setNome(valor)}
             />
            <Campo
                 obrigatorio
                 label="Cargo" 
                 placeholder="seu cargo"
                 valor ={cargo}
                 aoAlterado ={valor => setCargo(valor)}
               />
            <Campo   
                 label="Imagem" 
                 placeholder="o endereço do sua iamgem"
                 valor ={imagem}
                 aoAlterado ={valor => seImagem(valor)}
                 />
            <ListaSuspensa  
            required
            label="Times" 
            itens={props.times}
            valor = {time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form> 

            <form onSubmit={(evento)=>{
                evento.preventDefault()
                props.novoTime({nome: novoTime, cor:cor})
                setCor('')
                setNovoTime('')
            }}>
                <h2> Preencha os Dados para Criar um novo time</h2>
            <Campo 
                 obrigatorio
                 label="Time" 
                 placeholder="nome do time"                 
                 valor ={novoTime}
                 aoAlterado={valor => setNovoTime(valor)}
             />
            <Campo
                 type ='color'
                 obrigatorio
                 label="Cor do time"                 
                 valor ={cor}
                 aoAlterado ={valor => setCor(valor)}
               />           
            <Botao>
                Criar time novo
            </Botao>
            </form> 
        </section>
    )
}

export default Formulario;