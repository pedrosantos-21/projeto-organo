import './CampoTexto.css'

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder:string
    label:string
    valor:string
    obrigatorio: boolean//true or false
    evento:any
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, valor }: CampoTextoProps) => {
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