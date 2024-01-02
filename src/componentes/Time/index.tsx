import './Time.css'
import React from 'react'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Colaborador from '../Colaborador'

interface TimeProps {
    corPrimaria:string
    nome:string
    colaboradores: IColaborador[] //I de interface e o [] para defini-la como um array
    corSecundaria:string
}

const Time = (props: TimeProps) => {
const css = { backgroundColor: props.corSecundaria }
const borda = {borderColor: props.corPrimaria}

    return (
        (props.colaboradores.length > 0 ) ? <section className='time' style={css}  >
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome} 
                        nome = {colaborador.nome} 
                        cargo={colaborador.nome} 
                        imagem={colaborador.imagem}
                        data={colaborador.data}
                    />)};
            </div>
        </section>
        : <></>// um tipo incompativel   
    )
}

export default Time
