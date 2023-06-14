import './Time.css'

const Time = (props) => {
const css = { backgroundColor: props.corSecundaria }
const borda = {borderColor: props.corPrimaria}

    return (
        <section className='time' style={css}  >
            <h3 style={borda}>{props.nome}</h3>
        </section>
    )
}

export default Time
