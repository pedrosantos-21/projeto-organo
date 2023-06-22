import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem , corDeFundo}) => {
const css ={ backgroundColor: corDeFundo}

    return (<div className='colaborador'>
        <div className='deletar'></div>
        <div className='cabecalho' style={css}>
            <img src= {imagem}
                 alt= {nome}
            />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>

    )
}

export default Colaborador