import './CampoTexto.css'

interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder:string
    label:string
    valor:string
    obrigatorio?: boolean//true or false
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo ='text' }: CampoTextoProps) => {
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
                placeholder = {placeholdermodificada}
                type = {tipo}
             />
        </div>
    )

} 

export default CampoTexto