import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
const css = { backgroundColor: props.corSecundaria }
const borda = {borderColor: props.corPrimaria}

    return (
        <section className='time' style={css}  >
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador nome = {colaborador.nome} cargo={colaborador.nome} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time
