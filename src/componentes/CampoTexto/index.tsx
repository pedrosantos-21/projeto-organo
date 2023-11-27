import './CampoTexto.css'

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder:string
    label:string
    valor:string
    obrigatorio?: boolean//true or false
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false }: CampoTextoProps) => {
    const placeholdermodificada = `${placeholder}...` 

    //let valor = "Pedro vinícius"

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label> 
                {label}
             </label>
            <input 
                value = {valor} 
                onChange = {aoDigitado}
                required = {obrigatorio} 
                placeholder =  {placeholdermodificada}
             />
        </div>
    )

} 

export default CampoTexto