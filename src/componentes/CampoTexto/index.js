
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholdermodificada = `${props.placeholder}...` 

    //let valor = "Pedro vinícius"

    const aoDigitado = (evento) => {

        props.aoAlterado(evento.target.value)
            
    }

    return(

        <div className="campo-texto">

            <label> 
                {props.label}
             </label>

            <input 
                value = {props.valor} 
                onChange = {aoDigitado}
                erequired = {props.obrigatorio} 
                placeholder =  {placeholdermodificada}
             />

        </div>
    )

} 

export default CampoTexto