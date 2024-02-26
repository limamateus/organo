import './Campo.css'


const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

    //   const aoDigitado = (evento) =>{
    //   props.aoAlterado(evento.target.value)



    //  }
    //   const placeholderModificado = `${props.placeholder}...` 
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type} 
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={`Digite ${placeholder}...`}
            />
        </div>
    )
}

export default Campo;