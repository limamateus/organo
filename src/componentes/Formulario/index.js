import './Formulario.css'
import CampoTexto from '../../componentes/CampoTexto';
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

    // Função para Salvar o card
    const aoSalvar = (evento) =>{
        evento.preventDefault() // função que ira tirar o comportamente padrão e não recarregar a pagina completa.
       
        props.onColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time,
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
            <CampoTexto 
                 obrigatorio={true} 
                 label="Nome" 
                 placeholder="seu nome"                 
                 valor ={nome}
                 aoAlterado={valor => setNome(valor)}
             />
            <CampoTexto
                 obrigatorio={true}
                 label="Cargo" 
                 placeholder="seu cargo"
                 valor ={cargo}
                 aoAlterado ={valor => setCargo(valor)}
               />
            <CampoTexto   
                 label="Imagem" 
                 placeholder="o endereço do sua iamgem"
                 valor ={imagem}
                 aoAlterado ={valor => seImagem(valor)}
                 />
            <ListaSuspensa  
            required={true} 
            label="Times" 
            itens={props.times}
            valor = {time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form> 
        </section>
    )
}

export default Formulario;