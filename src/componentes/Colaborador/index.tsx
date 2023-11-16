import './Colaborador.css'

interface ColaboradorProps{
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
}    

const Colaborador = ({ nome, cargo, imagem , corDeFundo}: ColaboradorProps) => { //any para indicar que pode ou não haver um desses itens.

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