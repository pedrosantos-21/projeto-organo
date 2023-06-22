import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
const css = { backgroundColor: props.corSecundaria }
const borda = {borderColor: props.corPrimaria}

    return (
        (props.colaboradores.length > 0 ) && <section className='time' style={css}  >
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => {
                return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome = {colaborador.nome} cargo={colaborador.nome} imagem={colaborador.imagem} aoDeletar = {colaborador.aoDeletar}/>})};
            </div>
        </section>
    
    )
}

export default Time
